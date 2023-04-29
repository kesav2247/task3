// Do the below programs in anonymous function & IIFE


// Print odd numbers in an array
let arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
function oddnumber() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
};
oddnumber()
// Convert all the strings to title caps in a string array
let array = [guvi, geek, zen, fullstack];
function titlecap() {
    for (var i = 0; i <= array.length; i++) {
        console.log(array[0][i].toUpperCase() + array[i].substr(1));
    }
};

titlecap()
// Sum of all numbers in an array

let num = [10, 20, 30, 40,50,60,70,80,90,100] 
let sum = (a, b) =>
 a + b
let odder = num.reduce(sum)
console.log(odder);

// Remove duplicates from an array
var res = function(arr){
    for(var i=0; i < arr.length; i++){
    newArr = [];
    if(newArr.indexOf(arr[i]) == -1) {
    newArr.push(arr[i]);
    } }
    console.log(newArr)
   }
   res([guvi,geek,guvi,duplicate,geeK])

//    Rotate an array by k times

var array1= [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = array1.length % k;
(function() {
 arr = {};
 out = arrat1.slice(k + 1, array1.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = array1[i];
 count += 1;
 }
 console.log(out);})();
 
//  Return all the prime numbers in an array

let newArray=[1,3,2,5,10];
let myPrime=newArray.filter(num=>{
 for(let i=2;i<=num;i++){
 if(num%i===0)
 {
 return true;
 }
 }
 return num===1;
});
console.log(myPrime);