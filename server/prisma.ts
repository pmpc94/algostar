import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
  typeDefs: 'generated/prisma.graphql',
  endpoint: 'http://localhost:4466'
})

export { prisma as default }
