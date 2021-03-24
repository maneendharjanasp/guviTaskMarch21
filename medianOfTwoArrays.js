/**Return median of two sorted arrays of same size  */

console.log("7. Return median of two sorted arrays of same size ");
//Anonymous function
var medianOfArray = function(arr1, arr2){
    var arr = (arr1.concat(arr2)).sort();
    if(arr.length%2 !== 0){
        console.log("Median of two given arrays using anonymous function: "+ arr[parseInt(arr.length/2)]);
    }else{
        var n = arr.length;
        var value = (arr[parseInt((n-1)/2)] + arr[parseInt((n)/2)])/2;
        console.log("Median of two given arrays using anonymous function: "+ value);    
    }
}
medianOfArray([8,9,10],[5,6,7]);

(function(arr1, arr2){
    var arr = (arr1.concat(arr2)).sort();
    if(arr.length%2 !== 0){
        console.log("Median of two given arrays using IIFE: "+ arr[parseInt(arr.length/2)]);
    }else{
        var n = arr.length;
        var value = (arr[parseInt((n-1)/2)] + arr[parseInt((n)/2)])/2;
        console.log("Median of two given arrays using IIFE: "+ value);    
    }
})([8,9,10],[5,6,7]);

console.log("---------------------------------------------------------------------");