class BinarySearhTree {
  constructor(key = null, val, parent = null) {
    this.key = key;
    this.value = val;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }

  insert(key, val, parent = this) {
    if (key == this.key) throw new Error('No duplicate keys allowed');
    //if root node:
    if (this.key === null) {
      this.key = key;
      this.value = val;
    } else if (key < this.key) {
      if (this.left === null) this.left = new BinarySearhTree(key, val, this);
      else this.left.insert(key, val, this);
    } else if (key > this.key) {
      if (this.right === null)
        this.right = new BinarySearhTree(key, val, this);
      else this.right.insert(key, val, this);
    }
  }
  find(key) {
    if (key == this.key) return this.value;
    else if (key < this.key) {
      if (this.left === null) return;
      else return this.left.find(key);
    } else if (key > this.key) {
      if (this.right === null) return;
      else return this.right.find(key);
    }
  }

  remove(key) {
    if (key == this.key) {
      if (this.right && this.left) {

      }
			else if (this.left) this._replaceWith(this.left);
    	else if (this.right) this._replaceWith(this.right);
			else this._replaceWith(null);
    } else {
			if (key < this.key) this.left.remove(key);
			else if (key > this.key) this.right.remove(key);
    }
  }

  _replaceWith(node) {
		if (this.parent) {
			if (node) node.parent = this.parent;
			if (this == this.parent.right) this.parent.right = node;
			else if (this == this.parent.left) this.parent.left = node;
		}
		else {
			const nodeKeys = ['key','value', 'left', 'right'];
			if (node) {
				nodeKeys.forEach(key => this[key] = node[key]);
			}
			else nodeKeys.forEach(key => this[key] = null);
		}
	}

  _findMin() {
    if (this.left === null) return this;
    else return this.left._findMin();
  }
}
module.exports = BinarySearhTree;

// let a = new BinarySearhTree(1, 'one');
// a.insert(2, 'two');
// a.insert(3, 'three');
// a.insert(-4/3, {name:'minus four thirds'})
// a.insert(0, 'zero');
// a.insert(0.5, 'half');

// a.insert(0.5, 'half'); throws error as expected

// console.log(a);
// console.log(a.find(2));
// console.log(a.find(-4/3));
