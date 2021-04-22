
// 3.
var myArray = [["Kittens", 2],  ["Puppies", 4]]


// 4.
var arr = [
    [1,2], [3,4], [5,6]
   ];
   for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
       console.log(arr[i][j]);
     }
   }

 //5.
var myArray = [[ ["puppies", 2] , ["kittens", 4 ] , [["cicadas", 6] , ["lobsters", 8] ] , ["fish", 10] ] ] 

//6.
function whichIsGreater(arg1, arg2) {
    if (arg1 > arg2) {
        console.log(arg1);
    } if (arg1 < arg2) {
        console.log(arg2);
    } else {
        console.log("Equal");
    } 
}
  

//7.
function areTheyEqual(str1, str2) {
    if (str1 === str2) {
        console.log("These are equal");
    } else {
        console.log("These are NOT equal");
    }
}
