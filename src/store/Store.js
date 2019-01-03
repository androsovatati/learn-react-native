import { types, flow } from "mobx-state-tree";

const User = types.model({
  name: types.string,
  photoUrl: types.string
});

const Error = types.model({
  message: types.string
});

const Store = types
  .model({
    user: types.maybe(User)
  })
  .actions(self => ({
    login: flow(function*({ email, password }) {
      try {
        const response = yield fetch(
          "https://us-central1-mercdev-academy.cloudfunctions.net/login",
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email, password })
          }
        );
        const parsedData = yield response.json();
        if (response.ok) {
          self.user = User.create(parsedData);
          return parsedData;
        }

        if (parsedData && parsedData.error) {
          return { error: Error.create({ message: parsedData.error }) };
        }

        let errorMessage = "";
        if (response.status >= 500) {
          errorMessage = "Server error. Try again";
        } else if (response.status >= 400 && response.status < 500) {
          errorMessage = "Application error";
        }
        return {
          error: Error.create({ message: errorMessage || "Unhandled error" })
        };
      } catch (error) {
        return { error: Error.create({ message: "Network error" }) };
      }
    })
  }))
  .create();

export default Store;
