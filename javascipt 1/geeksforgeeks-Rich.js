// Given an array arr[] representing the size of candles which is reduced by 1 unit each day. The room is illuminated using all the present candles. Find the maximum number of days the room will stay illuminated (at least one candle having a size greater than 0)
// Input: arr = [1, 1, 2]
// Output: 2
// Explanation: The candle's length is reduced by 1 in first day. So, at the end of day 1: Sizes would be [0 0 1], So, at end of second day: Sizes would be [0 0 0]. This means the room was illuminated for 2 days

// let arr = [3, 1, 1];
// let scalar = 1;
// let difference=[]
// let count=0

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]-scalar == 0){
//        count=count+1
//        console.log(arr[i])

        

//     }
    
  
  
// }


// Given an array arr of distinct integers. Rearrange the array in such a way that the first element is the largest and the second element is the smallest, the third element is the second largest and the fourth element is the second smallest, and so on.
// Input: arr = [7, 1, 2, 3, 4, 5, 6]
// Output: [7, 1, 6, 2, 5, 3, 4]
// Explanation: The first element is first maximum and second element is first minimum and so on.
// let arra = [111, 222, 333, 444, 555]

// for(let i =0; i < arra.length; i++){
//     if(arra[i].reverse()==arr[i]){
//         console.log("this is a palindrone")
//     }
// }

// let arraq = [90, 100, 78, 89, 67]

// let sorted=arraq.sort(function(a, b){return a-b})
// for(let i = 0; i < sorted.length;i++){
//     if(sorted.length % 2==0){

//     }
// }
// console.log(sorted)
txt = "GeeksForGeeks", pat = "Fr"

    for(let i = 0; i < txt.length; i++){
      for(let j=i; j < txt.length; j++){
           let temp=""
          for(let k=i; k <=j ;k++){
              temp=temp+txt[j]
          }
          if(temp==pat){
        console.log("it is a substring0")
    }else{
        return -1
    }
}
}

let count=0;
    countOfElements(x, arr){
        for(let i =0 ; i < arr.length; i++){
            if(arr[i] <= x){
                count=count+1
            }
        }console.log(count)
    

    } 
        

    

