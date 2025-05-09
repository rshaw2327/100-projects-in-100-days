// given a sorted array and an element, find the element in the array and return its index
// let array = [3, 4, 5, 98, 9, 8, 7, 4];
// let k = 7;
// let sort_arr = array.sort();

// function findarr(sort_arr, k) {
//   for (let i = 0; i < sort_arr.length; i++) {
//     if (sort_arr[i] == k) {
//       console.log(sort_arr[i]);
//     }
//   }
// }
// console.log(findarr(sort_arr, k));

// let array = [3, 4, 5, 98, 9, 8, 7, 4];
// let k = 9;
// let sort_arr = array.sort();

// function binarySearch(sort_arr, k) {
//   let left = 0;
//   let right = sort_arr.length - 1;

//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (sort_arr[mid] == k) {
//       return mid;
//     } else if (sort_arr[mid] < k) {
//       left = mid + 1;
//     } else if (sort_arr[mid] > k) {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch(sort_arr, k));

// Find First and Last Position of Element in Sorted Array

// let arr = [5, 7, 7, 8, 8, 10];
// let target = 8;
// [3, 4]

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] == target) {
//       if (arr[mid] == arr[mid - 1]) {
//         return [mid - 1, mid];
//       } else if (arr[mid] == arr[mid + 1]) {
//         return [mid, mid + 1];
//       }
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else if (arr[mid] > target) {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch(arr, target));

// Find Insert Position

// Return the index where the target would be if it were inserted in order.
// Input: [1,3,5,6], target = 5 → Output: 2
// Input: [1,3,5,6], target = 2 → Output: 1
// let arr=[1,3,5,6]
// let target=4
// function binarySearch(arr,target){
//     let left =0;
//     let right=arr.length-1

//     while(left<=right){
//         let mid=Math.floor((left +right)/2)
//         if(arr[mid]==target){
//             return mid;
//         } else if(arr[mid]< target){
//             left=mid+1
//         }else if(arr[mid]>target){
//             right=mid-1
//         }

//     }return left

// }
// console.log(binarySearch(arr,target))

// let arr = [1, 2, 8, 10, 10, 12, 19]
// let x = 8

// let left=0;
// let right=arr.length-1;
// function binarySearch(arr,x){
//     while(left < right){
//         let mid=Math.floor((left + right)/2)
//         // console.log(mid)
//         if(arr[mid]==x){
//             return mid;
//         }else if(arr[mid] < x){
//             left=mid+1
//         }else if(arr[mid] > x){
//             right= mid-1
//         }
//     }return -1

// }
// console.log(binarySearch(arr,x))

// Given a number N, find if the number is a perfect square.
// 16 - true
// 17 - false

// let N=16
// let num=0
// function perfectSq(N,num){
//     for(let num = 0;num <= N; num++){
//         if(num*num ==N){
//             return true
//         }
//     }return false

// }console.log(perfectSq(N,num))

// function binaryPerfectSq(N){
//     let left = 0;
//     let right= N
//     while(left<=right){
//         let mid=Math.floor((left+right)/2)
//         let sq=mid*mid
//         if(sq==N){
//             return true
//         }else if(sq<N){
//             left=mid+1
//         }else if(sq>N){
//             right=mid-1
//         }
//     }return false

// }console.log(binaryPerfectSq(N,num))

// Find Floor of a Number without math.floor
// let arr = [1, 2, 4, 6, 10];
// let target = 5;
// let floors = 0;
// // → Output: 4
// function floor(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= target) {
//       floors=arr[i]
//     }
//     else{
//         break
//     }
//   }return floors
// }
// console.log(floor(arr, target));
// let ceils=0
// function ceil(arr,target){
//     for(let i = arr.length-1; i >= 0; i--){
//         if(arr[i] >= target){
//             ceils=arr[i]
//         } else {
//             break
//         }
       
//     }return ceils
// }
// console.log(ceil(arr,target))
n=5
 function factorial(n){
    let factorial=1
    fact=[]
    for(let i = n ; i > 0 ; i--){
        factorial= i*factorial
        
         
        
    } fact.push(factorial)
    return factorial
}
console.log(factorial(n),fact)
let s1="25"
let s2="5"
function multiplyStrings(s1, s2) {
    let multiply=0
    for(let i =0 ; i < s1.length;i++){
        for(let j = 0; j < s2.length;j++){
            multiply=s1[i]*s2[j]
        } return multiply   
        
    }
}console.log(multiplyStrings(s1,s2))

// Count Occurrences in Sorted Array
// Input: [1, 1, 2, 2, 2, 3], target = 2  
// Output: 3  
// hint - Input: [1, 1, 2, 2, 2, 3], target = 2  
// Output: 3



// Find Smallest Number Greater Than Target
// Input: [1, 3, 5, 6], target = 4 → Output: 5  
// Input: [1, 3, 5, 6], target = 6 → Output: -1 (no greater element)