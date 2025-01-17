function getMyArray() {
  let myArray = [];
  for (let i = 0; i < 10; i++) {
    myArray.push(i);
  }
  return myArray;
}

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

let myArray = getMyArray();
printArray(myArray);