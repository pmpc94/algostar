const Query = {
  getAll(_parent: object, _args: object, { prisma }: any, _info: object) {
    return prisma.todo.findMany()
  }
}

export { Query as default }
