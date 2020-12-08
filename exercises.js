class BinarySearhTree {
	constructor(key = null, val, left = null, right = null) {
		this.key = key;
		this.value = val;
		this.left = left;
		this.right = right;
	}

	insert(key, val) {
		if (this.key === null) {
			this.key = key;
			this.value = val;
		}
		else if (key == this.key) throw new Error('No duplicate keys allowed');
		else if (key < this.key) {
			if (this.left === null) this.left = new BinarySearhTree(key, val);
			else this.left.insert(key, val);
		}
		else if (key > this.key) {
			if (this.right === null) this.right = new BinarySearhTree(key, val);
			else this.right.insert(key, val);
		}
	}
	find(key) {
		if (key == this.key) return this.value;
		else if (key < this.key) {
			if (this.left === null) return;
			else return this.left.find(key);
		}
		else if (key > this.key) {
			if (this.right === null) return;
			else return this.right.find(key);
		}
	}

	remove(key) {
		if (key =)
	}

	_findMin() {
		if (this.left === null) return this;
		else return this.left._findMin()
	}
}
let a = new BinarySearhTree(1, 'one');
a.insert(2, 'two');
a.insert(3, 'three');
a.insert(-4/3, {name:'minus four thirds'})
a.insert(0, 'zero');
a.insert(0.5, 'half');
// a.insert(0.5, 'half'); throws error. Expected
// console.log(a);
console.log(a.find(2));
console.log(a.find(-4/3));
