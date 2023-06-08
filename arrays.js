var fourStrings = ["Uno", "Dos", "Tres", "Quatro"];
var fourNumbers = [2, 4, 6, 8];
var fourBooleans = [true, true, false, false];

//Calling the pop method upon the fourStrings variable will remove the last element from the array. The last element is "Quatro" so that will be removed.
fourStrings.pop();
console.log(fourStrings);

//Calling the push method upon the fourNumbers variable will add whatever is contained in the paraetheses (in this case the number 12) to the end of the array. 
fourNumbers.push(12);
console.log(fourNumbers);


//Calling the reverse method upon the fourBooleans variable will reverse the order of the array. The expected output is false, false, true, true.
fourBooleans.reverse();
console.log(fourBooleans);