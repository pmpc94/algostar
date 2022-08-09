import { createServer } from '@graphql-yoga/node'
import express from 'express'
import { resolvers } from './resolvers/index'
import prisma from './prisma'

const app = express()

const graphQLServer = createServer({
  schema: {
    typeDefs: './models/schema.graphql',
    resolvers
  },
  context(request: object) {
    return {
      prisma,
      request
    }
  }
})

app.use('/graphql', graphQLServer)

app.listen(3000, () => {
  console.log('GraphQL API located at http://localhost:4000/graphql')
})
