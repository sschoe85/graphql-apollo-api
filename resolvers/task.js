const { tasks, users } = require("../constants");
const uuid = require("uuid");
module.exports = {
    Query: {
        tasks: () => tasks,
        task: (_, args) => tasks.find((task) => task.id === args.id),
    },
      Task: {
        user: (parent) => users.find((user) => user.id === parent.userId),
      },
    
      Mutation: {
        createTask: (_, { input }) => {
          const task = { ...input, id: uuid.v4() };
          tasks.push(task);
          return task;
        },
      },
}
