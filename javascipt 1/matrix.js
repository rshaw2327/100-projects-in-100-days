let a1 = [20, 23, 50];
let a2 = [15, 20, 62];
let a3 = [25, 65, 90];
let index1 = [0, 1, 2];
let matrix1 = [a1, a2, a3];
let matrix2 = [
  [20, 23, 50],
  [15, 20, 62],
  [25, 65, 90],
];

// let matrix3Index= [
//   [00,01,02,03],
//   [10,11,12,13],
//   [20,21,22,23],
//   [30,31,32,33]
// ]

let matrix3 = [
  [20, 23, 50, 40],
  [15, 20, 62, 40],
  [25, 65, 90, 62],
  [44, 74, 65, 98],
];

let sumofindividualDiagnoals = 0;
let sumofupperDiagonal = 0;
let sumoofLowerDiagonal = 0;
for (let i = 0; i < matrix3.length; i++) {
  let columnLength = matrix3[i].length;
  for (let j = 0; j < columnLength; j++) {
    if (i == j) {
      sumoofLowerDiagonal = sumoofLowerDiagonal + matrix3[i][j];
    } if (i + j == matrix3.length-1) {
      sumofupperDiagonal = sumofupperDiagonal + matrix3[i][j];
    }
  }
} // O(n^2)
console.log(sumoofLowerDiagonal);
console.log(sumofupperDiagonal);

// let sumofupperDiagonal=0
// for(let i = 0; i < matrix3.length ; i++){
//   let columnLength=matrix3[i].length
//     for (let j =0; j< columnLength; j++){
//       if(i==j){
//         sumofupperDiagonal=sumofupperDiagonal+matrix3[i][j]
//         // console.log(matrix3[i][j])

//       }
//     }

// }console.log(sumofupperDiagonal)

// let sumoofLowerDiagonal=0
// for(let i = 0; i < matrix3.length ; i++){
//     let columnLength=matrix3[i].length
//     for(let j = 0; j < columnLength; j++){
//       if(i+j==matrix3.length - 1){
//         sumoofLowerDiagonal=sumoofLowerDiagonal+matrix3[i][j]
//         // console.log(matrix3[i][j])
//       }

//     }
//   }console.log(sumoofLowerDiagonal)

//  let differenceOfDiagonals= Math.abs(sumoofLowerDiagonal-sumofupperDiagonal)
//  console.log(differenceOfDiagonals)

// upper diagonal
// let upperDiagonal=[]
// for(let i = 0; i < matrix3.length ;i++){
//   let columnLength=matrix3[i].length
//   for (let j =0; j< columnLength; j++){
//     if(i==j){
//       // console.log(matrix3[i][j])
//       upperDiagonal.push(matrix3[i][j])
//     }

//   }
// }console.log(upperDiagonal)

// //lower diagonal
// let lowerDiagonal=[]
// for(let i = 0; i < matrix3.length ; i++){
//   let columnLength=matrix3[i].length
//   for(let j = 0; j < columnLength; j++){
//     if(i+j==matrix3.length - 1){
//       // console.log(matrix3[i][j])
//       lowerDiagonal.push(matrix3[i][j])
//     }

//   }
// }console.log(lowerDiagonal)

// find the difference of the sum of the diagonals

// let upperDiagoanlSum = 0;
// let upperDiagonal = [20, 20, 90, 98];
// for (let i = 0; i < upperDiagonal.length; i++) {
//   upperDiagoanlSum = upperDiagoanlSum + upperDiagonal[i];
// }
// console.log(upperDiagoanlSum);

// let lowerDiagoanlSum = 0;
// let lowerDiagonal = [40, 62, 65, 44];
// for (let i = 0; i < lowerDiagonal.length; i++) {
//   lowerDiagoanlSum = lowerDiagoanlSum + lowerDiagonal[i];

// }
// console.log(lowerDiagoanlSum);

// let difference = Math.abs(lowerDiagoanlSum - upperDiagoanlSum)
// console.log(difference)

// both diagonals
// for(let i =0; i < matrix3.length ;i++){
//   let columnLength=matrix3[i].length
//   for(let j =0; j < columnLength;j++){
//     if(i+j==matrix3.length - 1 || i==j){
//       console.log(matrix3[i][j])
//     }
//   }
// }

// let indexm1 = [
//     [00,01,02],
//     [10,11,12],
//     [20,21,22],
// ]

// for(let i=0; i < a1.length ; i++){
//     console.log(a1[i])
// }

// for(let i = 0; i < matrix2.length ; i++){
//     // console.log(matrix2[i])
//     let column = matrix2[i]
//     for(let j= 0; j < column.length; j++ ) {
//         console.log(matrix2[i][j])
//     }
// }

let matrix4 = [
  [
    [1, 2, 3],
    [1, 2, 3],
    [3, 2, 1],
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
    [3, 2, 1],
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
    [3, 2, 1],
  ],
];
// console.log(matrix1, matrix2, matrix3);

// upper diagonal
// let upperDiagonal=[]
// for(let i = 0; i < matrix3.length ;i++){
//   let columnLength=matrix3[i].length
//   for (let j =0; j< columnLength; j++){
//     if(i!=j){
//       console.log(matrix3[i][j])
//       upperDiagonal.push(matrix3[i][j])
//     }

//   }
// }console.log(upperDiagonal)

// // lower diagonal
// let lowerDiagonal=[]
// for(let i = 0; i < matrix3.length ; i++){
//   let columnLength=matrix3[i].length
//   for(let j = 0; j < columnLength; j++){
//     if(i+j!=matrix3.length - 1){
//       // console.log(matrix3[i][j])
//       lowerDiagonal.push(matrix3[i][j])
//     }

//   }
// }console.log(lowerDiagonal)
// let nonDiagnolEl=[]

// for( let i = 0 ; i < matrix3.length; i++) {
//   let columnLength=matrix3[i].length
//   for (let j = 0; j < columnLength; j++){
//     if(i!=j && i+j!=matrix3.length-1){
//       console.log(matrix3[i][j])

//     }
//     nonDiagnolEl.push(matrix3[i][j])
//      console.log(nonDiagnolEl)
//   }

// }

// // differnce sum of diagnols and sum of non-diagnols

// sum=0
// for(let i =0 ; i < nonDiagnolEl.length; i++) {
//   sum=sum+nonDiagnolEl[i]

// }console.log(sum)

// // console.log(sumofupperDiagonal)
// // console.log(sumoofLowerDiagonal)

// let totalSumofDiagnols=sumofupperDiagonal+sumoofLowerDiagonal
// // console.log(totalSumofDiagnols)

// differenceOfSumOfDiagonalsAndSumOfNonDiagnals= Math.abs(totalSumofDiagnols-sum)
// console.log(differenceOfSumOfDiagonalsAndSumOfNonDiagnals)

// Given two arrays with same length make a new array with the sum of each element of the 2 arrays eg = [1,2,3] + [4,5,6] = [5,7,9], do same for difference and multiplication

// let array1=[1,2,3]
// let array2=[4,5,6]
// let subtract=[]
// let multiplication=[]
// let sum=[];

// for(let i =0; i < array1.length ; i++){
//   sum.push(array1[i]+array2[i])

// }console.log(sum)

// for(let i =0; i < array1.length ; i++){
//   subtract.push(Math.abs(array1[i]-array2[i]))

// }console.log(subtract)

// for(let i = 0; i < array1.length ; i++){
//   multiplication.push(array1[i]*array2[i])

// }console.log(multiplication)

// for (let i = 0; i < array1.length; i++){
//   for(let j = 0; j < array2.length; j++){
//     subtract=array1[i]-array2[j]
//     multiplication=array1[i]*array2[j]

//   }

// }console.log(subtract)
// console.log(multiplication)

// add rows of first matrix with columns of second matrix

// let add=[]

// for(let i = 0; i < matrix5.length;i++){
//   tempsum=[]
//   for(let j=0 ; j < matrix6.length; j++){
//     add.push(matrix5[i][j]+matrix6[j][i])
//   }
// }console.log(add)
// print an array in reverse
// print all the matrix elements in reverse

// let array=[1,4,5,6,78,5]

// for(let i = array.length-1; i >= 0; i--  ){
//   console.log(array[i])
// }

// let reverse=[]
// for(let i=matrix5.length-1; i >= 0; i--){
//   let rowreverse=[]
//   for(let j=matrix5.length-1 ; j >=0 ; j--){
//     rowreverse.push(matrix5[i][j])

//   }reverse.push(rowreverse)

// }console.log(reverse)

// let matrix5 = [
//   [3, 5, 6],
//   [6, 8, 7],
//   [8, 9, 5],
// ];

// let matrix6 = [
//   [8, 7, 6],
//   [4, 9, 7],
//   [7, 8, 9],
// ];

// reverseC=[]

// for(let j = matrix5.length-1 ; j >= 0 ; j--){
//   columnReverse=[]
//   for(let i = matrix5.length-1; i >=0; i--){
//     columnReverse.push(matrix5[i][j])

//   }reverseC.push(columnReverse)
// }console.log(reverseC)

// let substraction=[]
// for(let i =0; i < matrix5.length; i++){
//   rowsubtract=[]
//   for(let j =0; j < matrix6.length; j++){
//     substraction.push(Math.abs(matrix5[i][j]-matrix6[i][j]))
//   }
// }console.log(substraction)

// let addition=[]

// for(let i =0; i < matrix5.length; i++){
//   let rowsum=[]
//   for(let j = 0; j < matrix6.length; j++){
//     rowsum.push(matrix5[i][j]+matrix6[i][j])
//   }
//   addition.push(rowsum)
// }console.log(addition)

// given a matrix and a number n multiply the matrix with the number
// multiply the matrix with the scalar

// let n = 11;
// let multiply = [];

// let matrix = [
//   [5, 7, 9],
//   [8, 7, 10],
//   [11, 20, 4],
// ];

// for (let i = 0; i < matrix.length; i++) {
//   let matrixm = [];
//   for (let j = 0; j < matrix.length; j++) {
//     matrixm.push(matrix[i][j] * n);

//   }
//   multiply.push(matrixm)

// }
// console.log(multiply)

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix.length; j++) {
//     matrix[i][j] = matrix[i][j] * n;
//   }
// }
// console.log(matrix);

// 1. Find the transpose of a square matrix.

// let matrixt = [
//   [50, 70, 90],
//   [80, 70, 100],
//   [110, 200, 40],
// ];
//  let matrixT=[]

// for (let i = 0; i < matrixt.length; i++) {
//   let transpose = [];
//   for (let j = 0; j < matrixt.length; j++) {
//     transpose.push(matrixt[j][i]);

//   }matrixT.push(transpose)
// }
// console.log(matrixT);

// 2. Find the maximum number in a matrix

// let matrixMnum = [
//   [5, 7, 9],
//   [8, 7, 10],
//   [11, 20, 4],
// ];

// let max=matrixMnum[0][0]

// for(let i = 0; i < matrixMnum.length ; i++){
//   for(let j=0 ; j < matrixMnum.length; j++){
//   if(matrixMnum[i][j] > max){
//     max=matrixMnum[i][j]

//   }
// } } console.log(max)

// }

// 3. Find the minimum number in a matrix

// let matrixMnum2 = [
//   [55, 7, 9],
//   [18, 7, 10],
//   [11, 20, 4],
// ];

// let min = matrixMnum2[0][0];

// for (let i = 0; i < matrixMnum.length; i++) {
//   for (let j = 0; j < matrixMnum.length; j++) {
//     if (matrixMnum2[i][j] < min) {
//       min = matrixMnum2[i][j];
//     }
//   }
// }
// console.log(min);

// 4. ⁠Find the difference of the maximum number and minimum number in a matrix

// let matrixMnum = [
//   [55, 7, 9],
//   [18, 7, 10],
//   [11, 20, 4],
// ];

// let maxNum=matrixMnum[0][0]
// let minNum=matrixMnum[0][0]

// for(let i =0 ; i < matrixMnum.length; i++){
//   for(let j= 0; j < matrixMnum.length;j++){
//     if(matrixMnum[i][j] > maxNum){
//       maxNum=matrixMnum[i][j]
//     }
//     if(matrixMnum[i][j] < minNum){
//       minNum=matrixMnum[i][j]

//     }

//   }
// }
// let difference = maxNum - minNum
//   console.log(difference)
//   console.log(maxNum)
//   console.log(minNum)

// / 5. ⁠Find the sum of rows of a square matrix and push that to an array

// let matrixMnum = [
//   [55, 7, 9],
//   [18, 7, 10],
//   [11, 20, 4],
// ];
// let rowSum = [];

// for (let i = 0; i < matrixMnum.length; i++) {
//   sum = 0;
//   for (let j = 0; j < matrixMnum.length; j++) {
//     sum = sum + matrixMnum[i][j];
//   }
//   rowSum.push(sum);
// }
// console.log(rowSum);

// 6. ⁠Find the row which has the maximum sum and return it’s index

// let matrixMnum = [
//   [55, 7, 9],
//   [18, 7, 10],
//   [11, 20, 4],
// ];

// let rowSum=[]
// for (let i = 0; i < matrixMnum.length; i++) {
//   let sum = 0;

//   for (let j = 0; j < matrixMnum.length; j++) {
//     sum = sum + matrixMnum[i][j]

//   }rowSum.push(sum)
//   console.log(sum);

// }
// console.log(rowSum)

// let maxRow= rowSum[0]

// for(let i =0 ; i < rowSum; i++){
//   if(rowSum[i] > maxRow){
//     maxRow=rowSum[i]
//   }
// }console.log(maxRow)

// 7. ⁠Find the sum of columns of a matrix and push that to an array

// let matrixMnum = [
//   [55, 7, 9],
//   [18, 7, 10],
//   [11, 20, 4],
// ];

// let columnSum=[]

// for(let i = 0 ; i < matrixMnum.length; i++ ){
//   sum=0
//   for(let j=0; j < matrixMnum.length; j++){
//     sum=sum+matrixMnum[j][i]

//   } columnSum.push(sum)
//   console.log(sum)

// }console.log(columnSum)

// let maxColumn=columnSum[0]

// for(let i =0; i < columnSum ; i++){
//   if(columnSum[i] > maxColumn){
//     maxColumn=columnSum[i]
//   }
// }console.log(maxColumn)

// 8. ⁠Find the column which has the maximum sum and return it’s index

// let matrixMnum = [
//   [55, 7, 9],
//   [18, 7, 10],
//   [11, 20, 4],
// ];
// let columnSum=[]

// for(let i = 0 ; i < matrixMnum.length; i++ ){
//   sum=0
//   for(let j=0; j < matrixMnum.length; j++){
//     sum=sum+matrixMnum[j][i]

//    } columnSum.push(sum)
//   console.log(columnSum)

// }
// let maxC=columnSum[0]
// let maxIndex=0
// for(let i = 0 ; i < columnSum.length; i++){

//   if(columnSum[i] > maxC){
//     maxC= columnSum[i]
//     maxIndex=i
//   }
// }
// console.log(maxC,maxIndex)

// 9. ⁠Given a square matrix, replace all the 0s in the matrix with 1

// let zeros=[

// [0, 0, 8,],
// [0, 0, 0,],
// [6, 0, 0,]]

// let ones=[]
// for(let i =0 ; i < zeros.length ; i++){
//   for(let j = 0; j < zeros.length; j++){
//     if(zeros[i][j]== 0){
//       zeros[i][j]=1

//     }
//   }

// }console.log(zeros)

// 10. ⁠Find if a matrix is an identity matrix (hint- diagonal elements 1s and rest all zeros)
// let identity = [
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1],
// ];
// function Checkidentity(identity){

//   for(i=0; i < identity.length ; i++){
//     for(j=0; j < identity.length; j++){
//       if(i==j && identity[i][j]==1  ){
//       }else if( identity[i][j]==0){

//       } else {
//         return false

//       }

//       }

//     } return true

// }
// console.log(Checkidentity(identity))

// 11. ⁠Find the sum of a matrix with an identity matrix
// let identity = [
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1],
// ];
// let sum=0
// for(let i = 0; i < identity.length; i++ ){
//   for(let j =0; j < identity.length; j++){
//     sum=sum+identity[i][j]
//   }

// }console.log(sum)

// 11. ⁠Find the sum of a matrix with an identity matrix

// let identity = [
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1],
// ];

// let matrix = [
//   [50, 70, 90],
//   [80, 70, 100],
//   [110, 200, 40],
// ];

// let answerArray=[]

// for (let i = 0; i < identity.length; i++) {
//  let rowSum=[]
//   for (let j = 0; j < matrix.length; j++) {
//     rowSum.push(identity[i][j]+matrix[i][j])
  
//   }answerArray.push(rowSum)
  
// }console.log(answerArray);


// 12. ⁠Divide a matrix with a scaler

// let scalarM = [
//   [12, 14, 160],
//   [6, 8, 90],
//   [5, 50, 81],
// ];

// let scalar = 2;


// for (let i = 0; i < scalarM.length; i++) {

//   for (let j = 0; j < scalarM.length; j++) {
//     scalarM[i][j]= scalarM[i][j] / scalar;
//   }
// }
// console.log(scalarM);
