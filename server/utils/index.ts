const generateRandomList = function (limit: Number): Array<Number> {
  let i = 0
  const list = []
  let randomNumber = 0
  while (i < limit) {
    i++
    randomNumber = Math.floor(Math.random() * Number(limit))
    list.push(randomNumber)
  }
  return list
}

module.exports = { generateRandomList }
