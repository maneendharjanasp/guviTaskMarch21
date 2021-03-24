/**Return all the prime numbers in an array */

console.log("3. Return all the prime numbers in an array");
//Anonymous function
var findPrime = function(arr){
    console.log("Prime numbers in the array using anonymous function: ");
    for(var i=0; i<arr.length; i++){
        var isPrime = true;
        if(arr[i] === 0 || arr[i] == 1){
            continue;
        }else{
            for(var j=2; j<= arr[i]/2;j++){
                if(arr[i]%j === 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                console.log(arr[i]);
            }
        }
    }
}
findPrime([1,2,3,4,5,6,7,8,9,10,11]);

//IIFE
(function(arr){
    console.log("Prime numbers in the array using IIFE: ");
    for(var i=0; i<arr.length; i++){
        var isPrime = true;
        if(arr[i] === 0 || arr[i] == 1){
            continue;
        }else{
            for(var j=2; j<= arr[i]/2;j++){
                if(arr[i]%j === 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                console.log(arr[i]);
            }
        }
    }
})([1,2,3,4,5,6,7,8,9,10,11]);

console.log("---------------------------------------------------------------------");