/**Print odd numbers in an array */

console.log("1. Print odd numbers in an array");
//Anonymous function
var printOdd = function(arr){
    console.log("Printing Odd numbers using anonymous function: ");
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 !== 0){
            console.log(arr[i]);
        }
    }
}
printOdd([1,2,3,4,5]);

//IIFE
(function(arr){
    console.log("Printing Odd numbers using IIFE: ");
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 !== 0){
            console.log(arr[i]);
        }
    }
})([1,2,3,4,5]);

console.log("---------------------------------------------------------------------");