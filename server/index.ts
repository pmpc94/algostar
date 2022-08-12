import { resolvers } from './resolvers/index'
import typeDefs from './models/schema'
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs,
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
  console.log('server started: ', server)
  server.applyMiddleware({ app })
})

export default {
  path: '/api',
  handler: server
}
