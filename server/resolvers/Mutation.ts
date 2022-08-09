const Mutation = {
  async newTodo(_parent: object, args: object, { prisma }: any, _info: object) {
    const newTodo = await prisma.todo.create({
      data: args
    })
    return newTodo
  }
}

export { Mutation as default }
