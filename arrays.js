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




//I based this off of the Replit on the Arrays lesson. I have stored numbers to an array containing all numbers 1-10, but will only print to the terminal multiples of three. To do this I will call on index positions 2 5 and 8, the expected output is 3, 6, and 9.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
//Is there a way to do the following next 3 lines all together??
console.log(numbers[2]);
console.log(numbers[5]);
console.log(numbers[8]);



//This one took some doing, but I figure it out. Slice is another method I learned about, and it should allow me to remove parts of an array, completeNonsense.slice(1, 5) slices the array starting(and including index position 1, 2, 3 and 4, it excludes the last index position of 5). Since slice doesn't actually change the original array like some methods do, I need to store completeNonsense.slice(1, 5) to a new variable. This should print out an array excluding index positions 0, 5, and 6
var completeNonsense = ["Oklahoma", "This", "sentence", "makes", "sense", "Pork Rinds", "Rock Music"];
var verySensical = completeNonsense.slice(1, 5);
console.log(verySensical);