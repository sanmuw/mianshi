//完全二叉树
function Tree(left,present,right){
  this.left = left;
  this.present = present;
  this.right = right;
}

function make(arr){
  if(!Array.isArray(arr)){console.log("请传入数组")}
  if(arr.lengtj == 1){return new Tree(null,arr[0],null)}
  return new Tree(make(make(array[0]), array[1], make(array[2])))
}

function* inorder(t) {
  if (t) {
    yield* inorder(t.left);
    yield t.label;
    yield* inorder(t.right);
  }
}

let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

var result = [];
for (let node of inorder(tree)) {
  result.push(node);
}

//拍平数组
function oneDimensional(arr){
  if(Array.isArray(arr)){
    for(let i=0; i < arr.length; i++) {
      oneDimensional(arr[i]);
    }
  }else{
    newArr.push[arr]
  }
  return newArr;
}
