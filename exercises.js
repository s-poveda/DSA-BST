const tree = new (require('./BinarySearchTree'))();

const keys = [
  { key: 3, value: 'three' },
  { key: 8, value: 'eight' },
  { key: 2, value: 'two' },
  { key: 1, value: 'one' },
  { key: 4, value: 'four' },
  { key: 7, value: 'seven' },
  { key: 9, value: 'nine' },
  { key: 0, value: 'zero' },
  { key: 6, value: 'six' },
  { key: 10, value: 'ten' },
  { key: 8.5, value: 'eight.5' },
];
tree.insert(5, 'five');
for (let d of keys) {
  tree.insert(d.key, d.value);
}

// What does this do?
function t(t) {
  //go down the tree. If node is null you've reached the end and return 0
  if (!t) return 0;
  // If node is not null, add and return node's value + its children's values
  //returns the sum of the tree
  return tree(t.left) + t.value + tree(t.right);
}

// Height of a BST

function treeHeight(node) {
  if (node === null) return -1;
  let Lheight = 0,
    Rheight = 0;
  Lheight = treeHeight(node.left);
  Rheight = treeHeight(node.right);
  // console.log('L', Lheight);
  // console.log('R', Rheight);
  return 1 + (Lheight > Rheight ? Lheight : Rheight);
}

//console.log(treeHeight(tree));

// get 3rd largest node
function _findMax(node) {
	if (node.right === null) return node;
	return _findMax(node.right);
  // while (node.right !== null) {
	// 	console.log('max',node);
  //   node = node.right;
  // }
	// // console.log(node.);
  // return node;
}

function thirdLargest(node) {
  if (!node.right) return node;
	const max = _findMax(node);
	if (max.parent.left === null) return max.parent.parent;
  return _findMax(max.parent.left);
}
// console.log(thirdLargest(tree));

// balanced BST
function isBalancedBST(node) {
	if (node)
}
