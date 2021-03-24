/**Sum of all numbers in an array */

console.log("2. Sum of all numbers in an array");
//Anonymous function
var sumOfNumbers = function(arr){
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum += arr[i];
    }
    console.log("Sum of all numbers in array using anonymous function: "+sum);
}
sumOfNumbers([1,5,23,56]);

//IIFE
(function(arr){
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum += arr[i];
    }
    console.log("Sum of all numbers in array using IIFE: "+sum);
})([1,5,23,56]);

console.log("---------------------------------------------------------------------");