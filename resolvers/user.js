const { tasks, users } = require("../constants");

module.exports = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((user) => user.id === id), //destructure args
  },

  User: {
    tasks: (parent) => tasks.filter((task) => task.userId === parent.id),
  },
};
