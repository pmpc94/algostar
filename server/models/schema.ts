import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Todo {
    item: String!
    id: String
  }

  type Query {
    getAll: [Todo!]!
  }
  type Mutation {
    newTodo(item: String!): Todo
  }
`

export { typeDefs as default }
