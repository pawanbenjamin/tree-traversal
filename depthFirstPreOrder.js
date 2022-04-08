const { a, logger } = require('./tree')
// A B E K L C F G H M D I J

const depthFirstPre = (node, callback) => {
  // write code here
  callback(node)
  node.children.forEach((child) => {
    depthFirstPre(child, callback)
  })
}

depthFirstPre(a, logger)
