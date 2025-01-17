function getMyArray() {
  let myArray = [];
  for (let i = 0; i < 10; i++) {
    myArray.push(i);
  }
  return myArray;
}

function printArray(arr) {
  if (arr === null || arr === undefined || arr.length === 0) {
    console.log("Array is empty or null");
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

let myArray = getMyArray();
printArray(myArray);

// Example with null/undefined array
printArray(null);
printArray(undefined);
printArray([]);