let arr1 = [1,2,3];
let arr2 = [1,2,3];
let count = 0;
let res = false;
const isEqual = arr1.forEach(item => {
   if(arr2.includes(item))
   count++; 
});

if(count==arr1.length)
res = true;
console.log(res);