/**Return all the palindromes in an array  */

console.log("4. Return all the palindromes in an array ");
//Anonymous function
var palindrome = function(arr){
    console.log("The Palindromes in the array using anonymous function: ");
    for(var i=0;i<arr.length;i++){
        var str1 = arr[i];
        var str2 = arr[i].split("").reverse().join("");
        if(str1 === str2){
            console.log(str1);
        }
    }
}
palindrome(["strts","ffee","civic"]);

//IIFE
(function(arr){
    console.log("The Palindromes in the array using IIFE: ");
    for(var i=0;i<arr.length;i++){
        var str1 = arr[i];
        var str2 = arr[i].split("").reverse().join("");
        if(str1 === str2){
            console.log(str1);
        }
    }
})(["strts","ffee","civic"]);

console.log("---------------------------------------------------------------------");