// 1- Given a string str, print true if the string contains at least one vowel else print false
// string="by your spirit help me to know what is right and to be eager in doing your will"
// vowels="aeiou"
// flag=true
// for(let i =0; i < string.length; i++) {
//     if(string[i] == "a"|| string[i] == "e"|| string[i] == "i"|| string[i] == "o"|| string[i] == "u"){
//         flag=true
//     } else {
//         flag=false

// }
// }console.log(flag)
// O(N)
// let i = 0;
// while(i < string.length){
//     if(string[i] == "a"|| string[i] == "e"|| string[i] == "i"|| string[i] == "o"|| string[i] == "u"){
//         flag=true
//     } else {
//         flag=false
// } i++
// }console.log(flag)
// O(N)

// 2- Given 2 numbers,stored in variables with the following names min , max
// To print all the numbers from min to max , excluding max.

// min=1;
// max=24;

// for (let min=1; min < max; min++){
//     console.log(min)
// }
// O(N)
// let min=1;
// while(min < max) {
//     console.log(min)
//     min++
// }
// 3- ,,Given  X(a number) and num(an array of numbers) ,to check if the value num is divisible by X
// let num = [2, 4, 5, 10, 15, 17, 20, 65, 15, 80, 25, 20];
// let x = 5;
// for (let i = 0; i < num.length; i++) {
//   if (num[i] % x == 0) {
//     console.log("The numbers divisible by x", num[i]);
//   } else {
//     console.log("The numbers not divisible by x ", num[i]);
//   }
// }

// let i=0;
// while(i < num.length){
//   if(num[i] % x == 0){
//     console.log("The numbers divisible by x", num[i]);
//   } else {
//     console.log("The numbers not divisible by x ", num[i]);

// }i++
// }
// 4- Find the sum of all even and odd numbers from 1 to 10.
// num=[2,4,5,10,15,17,20,65,15,80,25,20]
// sum_even=0;
// sum_odd=0;

// for(let i = 0; i < num.length ; i++) {
//     if(num[i] % 2){
//         sum_even=sum_even + num[i]
//     }else {
//         sum_odd=sum_odd + num[i]
//     }
// }console.log(sum_even)
// console.log(sum_odd)

// let i =0;
// while(i < num.length){
//     if(num[i] % 2){
//         sum_even=sum_even + num[i]
//     }else {
//         sum_odd=sum_odd + num[i]
//     }
//     i++
// }console.log(sum_even)
// console.log(sum_odd)

// 5- Given a number , stored in a variable with the name num
// To find the sum of all even numbers greater than 0, and less than or equal to the value stored in num.,
// num=10;
// sum_even=0;

// for(let i = 1; i <= num; i++ ){
//     if(i % 2 == 0){
//         sum_even=sum_even+1
//     }
// }console.log(sum_even)

// let i=1
// while(i <= num ){
//     if(i % 2 == 0){
//         sum_even=sum_even+1
//     }
//     i++
// }console.log(sum_even)

// 1-Convert Array to String
// Given an array A of n elements. Write a programme that processes the elements of the array and generates a string from the elements present in the array.
// For instance: If elements of the array are 3 5 0 9 8 => the output string should be "35098" (without quotes).

// let A = [10, 20, 40, 44, 50, 60, 70];
// let empty_string = " ";

// for (let i = 0; i < A.length; i++) {
//   if (A[i] > 0) {
//     empty_string = empty_string + A[i] + " ";
//   }
// }
// console.log(empty_string);

// let i = 0;
// while (i <= A.length) {
//   if (A[i] > 0) {
//     empty_string = empty_string + A[i] + " ";
//   }
//   i++;
// }
// console.log(empty_string);

// 2-You are given an array which has integer elements. Write a program to print the ceil average of elements (numbers) present in the array.Hint - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

// let array = [4, 5, 67, 87, 41, 15, 12, 23];
// let average = 0;
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     if( array[i] > 0){
//         sum=sum+array[i]
//         average= sum/array.length
//     }
// }console.log(sum)
// console.log(average)
// let i = 0;
// while (i < array.length) {
//   if (array[i] > 0) {
//     sum = sum + array[i];

//   }i++
// }average = sum / array.length;
// console.log(sum)

// console.log(average)
// 3 -You are given an array arr of N integers. You need to printOdd, if the sum of all odd numbers present in the array is greater than sum of all the even numbers present in the array, or else printEven.

// let array = [4, 5, 67, 87, 41, 15, 12, 23];
// sum_odd = 0;
// sum_even = 0;

// for(let i =0; i < array.length ; i++) {
//     if(array[i] % 2 == 0){
//         sum_even=sum_even+array[i]
//     } else {
//         sum_odd=sum_odd+array[i]
//     }
// }console.log(sum_even)
// console.log(sum_odd)

// let i =0;
// while(i < array.length){
//     if(array[i] % 2 == 0){
//         sum_even=sum_even+array[i]
//     } else {
//         sum_odd= sum_odd+array[i]
//     }
//     i++
// }console.log(sum_even)
// console.log(sum_odd)

// 4 -Given a non-empty sequence of characters s, return true if sequence is Binary, else return false.
// Examples:

// Input: s = "101"
// Output: true
// Explanation: Since string contains only '0' and '1', output is true.
// Input: s = "75"
// Output: false
// Explanation: Since string contains digits other than '0' and '1', output is false.
// s = "102";
// flag = true;

// for (let i = 0; i < s.length; i++) {
//   if (s[i] == "0" || s[i] == "1") {
//     flag = true;
//   } else {
//     flag = false;
//   }
// }
// console.log(flag);

// let i=0;
// while(i < s.length){
//     if(s[i] == "0" || s[i] == "1"){
//         flag=true
//     }else {
//         flag=false
//     }i++
// }console.log(flag)

// 5- Given a string s , to write a program that count  the number of consonants (n-one vowel characters) present in the string.
// string =
//   "What’s your next move? Do you want help picking your first AI SaaS idea or setting up your agency";
// consonents = 0;
// vowels = 0;

// for(let i = 0; i <= string.length; i++){
//     if(string[i]=="a"|| string[i]=="e"|| string[i]=="i" || string[i]=="o" || string[i]=="u" ){
//         vowels=vowels+1
//     }else {
//         consonents=consonents+1
//     }
// }console.log(consonents)
// console.log(vowels)

// let i = 0;
// while(i <= string.length){
//     if(string[i]=="a"|| string[i]=="e"|| string[i]=="i" || string[i]=="o" || string[i]=="u" ){
//         vowels=vowels+1
//     }else {
//         consonents=consonents+1
//     }
//     i++
// }console.log(consonents)
// console.log(vowels)

// 6-Given an array A of N integers along with a target integer K.
// Task is to find out the number of pairs of integers present in the array whose sum is equal to the target value K.
// let a=[1,2,3,5,6,9];
// let K=12;
// let pair=0;

// for(let i = 0; i < a.length ; i++) {
//   for(let j =i+1; j < a.length; j++) {
//     if(a[i]+a[j] == K ){
//       console.log(a[i],a[j])
//     }
//   }
// }

// let i = 0;
// while(i < a.length){
//   let j = i+1;
//   while( j < a.length) {
//     if(a[i]+a[j]== K) {
//       console.log(a[i],a[j])
//     }
//     j++

//   }
//   i++

// }

// 7-You are given an array of N integers. Output "Yes" if 42 is present in array, else print "No".

// let n = [12, 5, 32, 14, 42, 15, 69, 68];
// let flag=false
// for (i = 0; i <= n.length; i++) {
//   if (n[i] == 42) {
//     flag=true;
//     break
//   }
// }console.log(flag)

// let i =0;
// while(i < n.length) {
//   if(n[i] == 42){
//     flag=true;
//     break
//   }
//   i++
// }console.log(flag)
//
// 8-Given an array arr[]. The task is to find the largest element and return it.

// Examples:

// Input: arr[] = [1, 8, 7, 56, 90]
// Output: 90
// Explanation: The largest element of the given array is 90.
// Input: arr[] = [5, 5, 5, 5]
// Output: 5
// Explanation: The largest element of the given array is 5.
// Input: arr[] = [10]
// Output: 10
// Explanation: There is only one element which is the largest.
//  let n = [12, 5, 32, 14, 42, 15, 69, 68];
//  let large=n[0]

//  for(let i =0; i < n.length;i++){
//   if(n[i] > large ){
//     large=n[i]
//   }
//  }console.log(large)

//  let i = 0;
//  while(i < n.length){
//   if(n[i] > large) {
//     large=n[i]
//   }i++
//  }console.log(large)

// 9-There is a long queue of people in front of ATMs. Due to withdrawal limit per person per day, people come in groups to withdraw money.
// Groups come one by one and line up behind the already present queue. The groups have a strange way of arranging themselves.
// In a particular group, the group members arrange themselves in increasing order of their height(not necessarily strictly increasing).
// You are given an array representing heights of persons in queue. Since groups are standing behind each other, one cannot differentiate between different groups and the exact count cannot be given.
// Can you find the minimum number of groups that can be observed in the queue?

// let q=[1,2,3,4,1,2,3,6,2,3,4]
// let count=0;

// // for(let i =1; i < q.length; i++){
// //   if(q[i] < q[i-1]){
// //     count=count+1
// //   }
// // }console.log(count)
// let i =1;
// while( i < q.length){
//   if(q[i] < q[i-1]){
//     count=count+1
//   }i++
// }console.log(count)

// 10 -You are given an array, stored in a variable with the name array
// The size of the array is stored in a variable with the name N
// You are also given another number stored in a variable with the name K
// Print the output according to the following conditions
// a. If the count of odd elements in the array is greater than the value stored in K, print "Nice Array", without quotes
// b. Else, print "Bad Array", without quotes
// let array=[2,3,4,5,9,78,45,49]
// let N = array.length;
// let K=7;
// let odd_el=0;
// let even_el=0;

// for(let i = 0; i < N; i++){
//   if(array[i] % 2 !==0) {
//     odd_el=odd_el + 1
//   } else {
//     even_el=even_el+1

//   }
// }
// if (odd_el > K){
//   console.log("nice array",K,odd_el)
// } else {
//   console.log("bad array",K)
// }

// let i=0;
// while(i < N){
//   if(array[i] % 2 ==0){
//     even_el=even_el+1
//   } else {
//     odd_el=odd_el+1
//   }
//   i++
// }if (odd_el > K){
//   console.log("nice array",K,odd_el)
// } else {
//   console.log("bad array",K)
// }

// You are given an array arr of size n - 1 that contains distinct integers in the range from 1 to n (inclusive). This array represents a permutation of the integers from 1 to n with one element missing. Your task is to identify and return the missing element.
// Input: arr[] = [1, 2, 3, 5]
// Output: 4
// Explanation: All the numbers from 1 to 5 are present except 4.

// let arr = [1, 2, 3, 5];
// let length = arr.length;
// let sum=0;
// let arr_sum = 0;

// for (let i = 0; i < length; i++) {
//   arr_sum = arr_sum + arr[i];
// }
// console.log("array sum =", arr_sum);

// for (let i = 1; i <= length + 1; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// let missing = sum - arr_sum;
// console.log(missing);

// 1. Given two numbers X and Y. Print "Broken" if Y is greater than X. If X is greater than Y print "Not Yet". Else print "Wao" for all other cases.

// let x = 50;
// let y = 50;

// if(x > y){
//     console.log("not yet")
// }else if( y > x) {
//     console.log("broken")
// }else {
//     console.log("Wao")
// }
//O(1)

// 2. ⁠Given a string str and its length N , print true if the string constains atleast one vowel else print false

// let str="when i was running paypal in late 1999 i was scared to my wits not because i did'nt believe in our company"
// let N = str.length
// let flag=false

// for(let i = 0 ; i <= N ; i++){
//     if(str[i] == "a" ||str[i] == "e" ||str[i] == "i" ||str[i] == "o" ||str[i] == "u" ){
//         flag=true
//         break
//     }
// }console.log(flag)
// let i = 0;
// while(i < N){
//     if(str[i] == "a" ||str[i] == "e" ||str[i] == "i" ||str[i] == "o" ||str[i] == "u" ){
//         flag=true
//         break
//     }i++
// }console.log(flag)

// 3. ⁠Given a string s , to write a program that count  the number of consonants (n-one vowel characters) present in the string.
// let str="when i was running paypal in late 1999 i was scared to my wits not because i did'nt believe in our company"
// let N = str.length
// let consonents=0
// let vowels=0
// // for(let i = 0 ; i <= N ; i++){
//         if(str[i] == "a" ||str[i] == "e" ||str[i] == "i" ||str[i] == "o" ||str[i] == "u" ){
//             vowels=vowels+1
//         } else {
//            consonents=consonents+1
//         }
//     }console.log(consonents)
//     console.log(vowels)
// let i =0;
// while(i <= N){
//     if(str[i] == "a" ||str[i] == "e" ||str[i] == "i" ||str[i] == "o" ||str[i] == "u" ){
//         vowels=vowels+1
//     } else {
//        consonents=consonents+1
//     }
//     i++
// }  console.log(consonents)
// console.log(vowels)

// 4. ⁠Given an integer num.
// Print yes if that integer is a palindrome or else print no
// let num=180
// num= num.toString()
// let n="";
// for(let i = num.length-1; i >= 0; i--){
//     n=n+num[i]
// } if(n == num){
//     console.log("yes")
// }else {
//     console.log("no")
// }console.log(num,n)

// let i = num.length-1;
// while(i >= 0){
//     n=n+num[i]
//     i--
// }
//  if(n == num){
//     console.log("yes")
// }else {
//     console.log("no")
// }
// console.log(num,n)

// let num=183;
// let reversed=0;
// let original=num
// while(original > 0){
//     let digit= original % 10
//     reversed=reversed*10 + digit
//     original=Math.floor(original/10)
// }
// if(num == reversed){
//     console.log("yes")
// }else {
//     console.log("no")
// }

// for(let orginal=num; orginal > 0; orginal=Math.floor(orginal/10)){
//     let digit =orginal % 10
//     reversed=reversed*10 + digit

// }console.log(reversed)

// 5. Given an array, A, of N integers, print the smallest and largest element present in the array YOU MUST NOT USE ANY BUILT-IN FUNCTION

// let A = [12,30,60,121,5,45,200]
// let large= A[0];
// let small= A[0]

// // for(let i = 0; i < A.length; i++){
// //     if(A[i] > large){
// //         large=A[i]
// //     } if ( A[i] < small){
// //         small=A[i]
// //     }
// let i =0;
// while(i < A.length){
//     if(A[i] > large){
//         large=A[i]
//     } if(A[i] < small){
//         small=A[i]
//     }i++
// }console.log(large)
// console.log(small)

// 6.Given two numbers X and Y. Print "Broken" if Y is greater than X. If X is greater than Y print "Not Yet". Else print "Wao" for all other cases.
// Swap 2 numbers
// let x="red";
// let y="blue";
// let z="";

// z=x
// x=y
// y=z

// console.log("z=",z)
// console.log("x=",x)
// console.log("y=",y)

// let x=23;
// let y=15;
// let z=0;

// z=x
// x=y
// y=z

// console.log("z=",z)
// console.log("x=",x)
// console.log("y=",y)

// Shop Soap
// Piyush goes to buy soap from a shop.The shop contains N soaps. The prices of soap are given in the form of an array A. The price of ith soap is A[i]. Now Piyush has q queries, in each query he wants to know the number of soaps that have price less than the given amount M.

// Input
// First line contains integer N total number of soaps available in the shop.
// Second line contains N space separated integers.
// Third line contains Q number of queries.
// Each of the next Q lines contain integer M.

// Constraints :
// 1 ≤ N ≤ 100000
// 1 ≤ A[i] ≤ 1000000000
// 1 ≤ Q ≤ 100000
// 1 ≤ M ≤ 100000

// Output
// For each query output number of soaps having price less than M for that query.

// Sample Input 1
// 5
// 1 4 10 5 6
// 4
// 2
// 3
// 5
// 11

// Sample Output 1
// 1
// 1
// 1
// 2
// 5

// let A=[1,2,3,6,4,5,7,8,9,]
// let N=A.length
// let M=4
// let num=7

// 2- Given an array arr of size N and a variable M, To find the count of pair of distinct elements in the array, whose product is equal to the value stored in M
// let count=0
// let product=0
// for(let i = 0; i < N; i++){
//     if(A[i]*A[i]==M){
//         count=count+1
//         product=product+A[i]
//     }
// }console.log(count)
// console.log(product)

// 3- Given a number , stored in a variable with the name num
// To print num lines , and on each line print all the numbers form 1 to the value stored in num

// for(let i = 0; i < N; i++) {
//     if(A[i] <= num ) {
//         console.log(A[i])
// }
// }

// 4- You have built your own social networking website. Now, since you wanted your website to be unique, you applied some rules on making friends according to the age of the people
// So, the distance within which people can make friends depends on their age. Therefore, you have to print the output, which is the distance within which people can make friends according to the following rules
// You are given the age of a person, stored in the variable with the name N
// 1. If the value stored in N is less than 13, print "1 Kms", without quotes
// 2. Else if the age of the person is greater than or equal to 13, but less than 18, print "5 Kms", without quotes
// 3. Else if the age of the person is greater than or equal to 18, but less than 30, print "10 Kms", without quotes
// 4. Else print "You can have friends from anywhere", without quotes

// N=15

// if(N < 13){
//     console.log("1 kms")
// }else if(N >= 13 && N < 18){
//     console.log("5 kms")
// }else if(N >= 18 && N < 30) {
//     console.log("10 kms")
// }else{
//     "you can have friends from anywhere"
// }

// 1 - You have to find the sum ofXandY, such that
// // 1. X = (a*5) + (b*3)
// 2. Y = (a*7) + (b*4)
// Find the value of sum, such that sum = X + Y
// Sample Input    Sample Output
// 2 3                 45

// let a=4;
// let b=5;

// let X = (a*5) + (b*3)
// let Y = (a*7) + (b*4)

// sum = X + Y;
// console.log(sum)

// 2. -You are given a number stored in a variable with the name,nums
// You have to find the value of the number raised to the power of X
// For example, if the value stored in num = 3 and X=4 . Therefore, the value of 3 raised to the power of 4, equals3 * 3 * 3 * 3 = 81, which is the required answer
// Therefore, the output is 81

// let nums=9
// let power=5

// ans=nums**power*5
// console.log(ans)

// 3- You are given two numbers, stored in the variable with the names left,right respectively
// You have to print all the numbers in the range of [left, right],(including the values stored in left and right) such that the current number is double of the previous number
// For example, consider the value stored in left = 2, and the value stored inright = 10, then the required output will be
// 2
// 4
// 8

// let left=2
// let right=40

// for (let i = left; i <= right; i=i*2){
//     console.log(i)
// }

// We, start from 2, and double the value so we get 4, and the value is further doubled, so the value becomes 8. The next value in the series will be 16, but since it is greater than the value stored atright = 10, we do not consider it

//

// - Reverse digits of an integer. For example: x = 123, return 321.

// let x=123
// let i=0
// num=0

// while(x > 0) {
//     ld=x%10
//     num=num*10+ld
//     x=Math.floor(x/10)
//     i++
// }
// console.log(num)

// let x="123"
// let num=""
// let i=0;
// while(x > 0) {
//     ld= x%10
//     num=num+ld
//     x=Math.floor(x/10)
//     i++
// }
// console.log(num)

// 4- Given an array arr of size N and a variable M, To find the count of pair of distinct elements in the array, whose product is equal to the value stored in M

// let m = [1, 2, 4, 7, 8, 9];
// let n = m.length;
// let p = 8;
// count = 0;

// for (let i=0; i<n; i++){
//     for(let j=i+1 ; j < n; j++){
//         if(m[i]*m[j]==p){
//             count=count+1
//         }
//     }
// } console.log(count)

// let i = 0;
// while (i < n) {
//   let j = i + 1;
//   while (j < n) {
//     if (m[i] * m[j] == p) {
//       count = count + 1;
//     }

//     j++;
//   }
//   i++;
// }
// console.log(count);

// 1. Given a number, return all its prime factors as an array.

// let num=15;

// let factor=[]
// for(let i =1 ; i <=num; i++ )
// if(num % i == 0  ) {
//     factor.push(i)

// }
// console.log(factor)

// 2. ⁠Write a function to check if a given number is a perfect square without using Math.sqrt().

// let flag=false
// function square(num) {
//     for(let i=1; i <= num; i++){
//         if(i**2 == num){
//             flag=true
//          break
//         }
//         else if(i**2 > num){
//             break
//         }

//     }
//     return flag
// }

// console.log(square(25))

// 3. ⁠Given an array of numbers in an arithmetic sequence with one missing number, find the missing number.
// let array = [1, 2, 4, 5, 6];
// let missing = 0;
// let sum = 0;
// let array_sum = 0;
// for (let j = 0; j < array.length ; j++) {
//   array_sum = array_sum + array[j];
// }

// for (let i = 0; i <= 6; i++) {
//   sum = sum + i;
// }

// missing=sum-array_sum

// console.log(sum);
// console.log(array_sum);
// console.log(missing)
// 4. ⁠Write a function that returns the maximum number from a given array.

// function maxNum(ray) {
//   let max = ray[0];
//   length = ray.length;

//   for (let i = 0; i < length; i++) {
//     if (ray[i] > max) {
//       max = ray[i];
//     }
//   }
//   return max;
// }
// console.log(maxNum([12, 45, 62, 14, 32, 14, 85]));

// 5. ⁠Write a function that returns the minimum number from a given array.
// function minNum(bray) {
//   let min = bray[0];
//   length = bray.length;

//   for (let i = 0; i < length; i++) {
//     if (bray[i] < min) {
//       min = bray[i];
//     }
//   }
//   return min;
// }
// console.log(minNum([12, 45, 62, 14, 32, 14, 85]));

// 6. ⁠Write a function that reverses a given array without using .reverse().

// function reverseNums(cray) {

//     let reverse=[]

//     for(let i = cray.length-1; i >= 0; i--){
//         reverse.push(cray[i])
//     }return reverse

// }console.log(reverseNums([12,45,62,14,32,14,85]))

// let double=cray.reverse()
// console.log(double)
// 7. ⁠Write a function that checks whether a given array is sorted in ascending order.

// function acsend(dray) {
// flag=true
// for(let i =0 ; i < dray.length ; i++) {
//     if(dray[i] > dray[i+1]){
//         flag=false
//         break
//     }
// }return flag

// }console.log(acsend([1,2,3,50,4,5,6]))

// 8. ⁠Write a function that removes duplicate elements from an array and returns the unique elements.

// function uniqueEl(array){

// let empty = [];

// for (let i = 0; i < array.length; i++) {
//     for(let j = i+1; j < array.length; j++){
//         if(array[i]==array[j]){
//             empty.push(array[i])
//         }
//     }

// }return empty

// }console.log(uniqueEl([1, 4, 5, 7, 8, 9, 8]))

// 9. ⁠Write a function that finds the second-largest number in an array.

// let array = [12, 45, 62, 14, 32, 14, 85,54,66];
// let large = array[0];

// for (let i = 0; i < array.length; i++) {
//   if (large < array[i]) {
//     large = array[i];
//   }
// }
// let second_large = array[0];
// for (let i = 0; i < array.length; i++) {
//   if (second_large < array[i]) {
//     if(second_large != large){
//         second_large=array[i]

//     }
//     // second_large = array[i];
//   }

// }
// console.log(large);
// console.log(second_large);

// let array_ascend= array.sort()
// let second_lar=array_ascend.at(-2)

// console.log(array_ascend)
// console.log(second_lar)

// 10. ⁠Write a function that counts how many times K element appears in an array.

// function countK(array,K) {
//     let count=0

// for(let i =0 ; i < array.length ; i++){
//     if(array[i]==K){
//         count=count+1

//     }
// }return count
// } console.log(countK([12,45,62,14,32,14,85,14],14))

// 1. Reverse a String
// Given "hello", return "olleh".
// let str="hello"
// let reverse=""
// for(let i = str.length-1 ; i >= 0 ; i-- ){
//     reverse=reverse+str[i]

// }console.log(reverse)

//   2. Check if a String is a Palindrome
// "racecar" → true, "hello" → false.

// let strP="racecar"
// let reverse=""
// function palindrome(strP){
//     for(let i = strP.length - 1; i >= 0; i--){
//         reverse=reverse+strP[i]
//     } if (reverse==strP){
//         return true
//     } else {
//         return false
//     }

// }
// console.log(palindrome(strP))

//   3. Remove Duplicates from an Array
// Input: [1, 2, 2, 3, 4, 4] → Output: [1, 2, 3, 4]
// let array = [1, 2, 2, 3, 4, 4];
// let array=[1,2,1,2,3,3,4,5]
// let arraydup = [];

// for(let i = 0; i < array.length ; i++){
//     if(array[i]!=array[i+1]){
//         arraydup.push(array[i])
//     }
// }console.log(arraydup)

// for (let i = 0; i < array.length; i++) {
//   let flag = false;
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] == array[j]) {
//       flag = true;
//       break;
//     }
//   }
//   if (!flag) {
//     arraydup.push(array[i]);
//   }
// }
// console.log(arraydup);

//    4. Find the Longest Word in a Sentence
// Input: "JavaScript is awesome" → Output: "JavaScript"

let input = "i am software developer";
// let arrayA=[]
// let str=""

// for(let i = 0; i <= input.length ; i++){
//     if(input[i] == " " || i == input.length){
//         arrayA.push(str)
//         str=" "

//     } else {
//         str=str+input[i]

//     }

// }
// console.log(arrayA)

// let blank= input.split(" ")
// console.log(blank)
// let longWord=0
// let count=null

// for(let i = 0; i < blank.length-1 ; i++){
//     if(longWord < blank[i].length ){
//         longWord = blank[i].length;
//         count=blank[i]
//     }

// }console.log(count)

// using for loop replicate the logic of split, join, slice and splice

// console.log(input.join("55 "))

// 5. Given an array, do the difference of each element by 1 (Scaler)and return the array.

// let arrays=[1, 2, 2, 3, 4, 4]
// let scalar = 1;
// let difference=[]

// for(let i =0; i < arrays.length; i++){
//     difference.push(arrays[i]-scalar)
// }console.log(difference)

// 2.	Remove Duplicates from Sorted Array
// 	•	Given a sorted array, remove duplicate elements in-place and return the new length of the array.
// let arr = [1, 1, 2, 2, 3, 4, 4, 5];
//  [1, 2, 3, 4, 5] (length = 5)
// let dup = [];

// for (let i = 0; i < arr.length; i++) {
//   flag = false;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] == arr[j]) {
//       flag = true;
//       break;
//     }
//   }
//   if (!flag) {
//     dup.push(arr[i]);
//   }
// }
// console.log(dup);

// 	arr=[1,2,3,4,5]

// function reverseArray(arr) {
//   let reverse=[];
//   for(let i =arr.length-1 ; i >=0;i--){
//       reverse.push(arr[i])

//   }return reverse
// }console.log(reverseArray(arr))

// console.log(charAt(97))

// function armstrongNumber(n){

//   let ld = 0;
// let sum = 0;
// while (n != 0) {
//   ld = n % 10;
//   sum = sum + ld * ld * ld;
//   n = parseInt(n / 10);
//   // console.log(n)
// }
// if(sum==n){
//   return true
// }
// else{
//   return false
// }


// }console.log(armstrongNumber(n));


// armstrongNumber(n) {
//   let ld=0;
//   let sum=0
//   while(n!=0){
//       ld=n%10
//       sum=sum+(ld*ld*ld)
//       n=Math.floor(n/10)
//   }return sum
 
// }
// }
