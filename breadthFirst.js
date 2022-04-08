const { a, logger } = require('./tree')
// A B C D E F G H I J K L M

const breadthFirst = (root, callback) => {
  // write code here
  const queue = [root]
  while (queue.length) {
    const currNode = queue.shift()
    callback(currNode)
    queue.push(...currNode.children)
  }
}

breadthFirst(a, logger)
