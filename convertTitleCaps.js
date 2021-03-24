/**Convert all the strings to title caps in a string array  */

console.log("5. Convert all the strings to title caps in a string array ");
//Anonymous function
var titleCaps = function(arr){
    for(var i=0;i<arr.length;i++){
        var str = arr[i].split("");
        for(var j=0;j<str.length;j++){
            str[j] = str[j].toUpperCase();
        }
        arr[i] = str.join("");
    }
    console.log("Array with all strings in title caps using anonymous function:");
    console.log(arr);
}
titleCaps(["mango","apple","tomato"]);

//IIFE
(function(arr){
    for(var i=0;i<arr.length;i++){
        var str = arr[i].split("");
        for(var j=0;j<str.length;j++){
            str[j] = str[j].toUpperCase();
        }
        arr[i] = str.join("");
    }
    console.log("Array with all strings in title caps using IIFE:");
    console.log(arr);
})(["mango","apple","tomato"]);

console.log("---------------------------------------------------------------------");