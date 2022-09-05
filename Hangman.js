/**
* 方法1
*/ 
function replaceAt(indexArray, string) {
  const newString = [...string];
  const replaceValue = i => (newString[i] = {newString[i]});
  indexArray.map(replaceValue);
  return newString;
}

/**
* 方法2
*/ 
function replaceAt(indexArray, string) {
  let newString = [...string];

  for (let i = 0; i < indexArray.length; i++) {
    newString = Object.assign(newString, {
      [indexArray[i]]: {newString[indexArray[i]]}
    });
  }

  return newString;
}
