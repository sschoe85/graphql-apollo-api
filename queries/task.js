const { gql } = require("apollo-server-express");
module.exports = gql`
  extend type Query {
    tasks: [Task!]
    task(id: ID!): Task
  }
 
  type Task {
    id: ID!
    name: String!
    completed: Boolean!
    user: User!
  }
 extend type Mutation {
    createTask(input: createTaskInput!): Task
  }

  input createTaskInput {
    name: String!
    completed: Boolean!
    userId: ID!
  }
`;