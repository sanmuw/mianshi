//数组取并集
function union(arr1=[],arr2=[]){
	let a = new Set(arr1);
	let b = new Set(arr2);
	let unionArr = Array.from(new Set([...a,...b]))
	return unionArr;
}

//数组取交集
function intersection(arr1=[],arr2=[]){
	let a = new Set(arr1)
	let b = new Set(arr2)
	let intersectionArr = Array.from(new Set([...b].filter(x => a.has(x))));
	return intersectionArr;
}

//数组取差集
function difference(arr1=[],arr2=[]){
	let a = new Set(arr1)
	let b = new Set(arr2)
	let differenArr = Array.from(new Set([...b].filter(x => !a.has(x))));
	return differenArr;
}
