// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var result = [];

  var traverse = function(node) {
    if (node.classList && node.classList.contains(className)) {
      result.push(node);
    }
    for (var i = 0; i < node.children.length; i += 1) {
      traverse(node.children[i]);
    }
  };
    
  traverse(document.body);

  return result;
};
