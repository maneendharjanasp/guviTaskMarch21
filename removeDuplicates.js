/**Remove duplicates from an array  */

console.log("6. Remove duplicates from an array ");
//Anonymous function
removeDuplicate = function(arr){
    arr.sort();
    var j = 0;
    for(var i=0;i<arr.length-1;i++){
        if(arr[i] != arr[i+1]){
            arr[j++] = arr[i];
        }
    }
    arr[j++] = arr[arr.length-1];
    console.log("Array elements after removing duplicates using anonymous function: ");
    for(var k=0;k<j;k++){
        console.log(arr[k]);
    } 
}
removeDuplicate([5,5,5,4,1,2,3,2,1,4]);

//IIFE
(function(arr){
    arr.sort();
    var j = 0;
    for(var i=0;i<arr.length-1;i++){
        if(arr[i] != arr[i+1]){
            arr[j++] = arr[i];
        }
    }
    arr[j++] = arr[arr.length-1];
    console.log("Array elements after removing duplicates using IIFE: ");
    for(var k=0;k<j;k++){
        console.log(arr[k]);
    } 
})([5,5,5,4,1,2,3,2,1,4]);

console.log("---------------------------------------------------------------------");