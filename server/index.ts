import express from 'express'
import { resolvers } from './resolvers/index'
import prisma from './prisma'

const { ApolloServer } = require('apollo-server-express')

const server = ApolloServer({
  typeDefs: './models/schema.graphql',
  resolvers,
  context(request: object) {
    return {
      prisma,
      request
    }
  }
})

const app = express()

server.start().then(() => {
  server.applyMiddleware({ app })
})

export default {
  path: '/api',
  handler: app
}
