const { a, logger } = require("./tree");
// K L E B F G M H C I J D A

const depthFirstPost = (node, callback) => {
  // write code here
  node.children.forEach(child => {
    depthFirstPost(child, callback)
  })
  callback(node)
};

depthFirstPost(a, logger);
