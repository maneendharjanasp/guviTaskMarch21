/**Rotate an array by k times and return the rotated array.*/

console.log("8. Rotate an array by k times and return the rotated array.");
//Anonymous function
var rotateArray = function(arr, k){
    var n = arr.length;
    for(var i=0; i<k;i++){
        for(var j=n-1;j>0;j--){
            var temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
    console.log("Rotated array after k times in anonymous function:");
    console.log(arr);
}
rotateArray([1,2,3,4,5], 3);

//IIFE
(function(arr, k){
    var n = arr.length;
    for(var i=0; i<k;i++){
        for(var j=n-1;j>0;j--){
            var temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
    console.log("Rotated array after k times in IIFE:");
    console.log(arr);
})([1,2,3,4,5], 3);

console.log("---------------------------------------------------------------------");
