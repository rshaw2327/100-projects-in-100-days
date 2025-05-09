let nums = [10,5,3,48,45,15,12,20]
let k = 5;
for( let i = 0; i < nums.length; i++) {
    if( nums[i] % k == 0) {
        console.log(nums[i])
    } 
}

let i = 0;
while(i < nums.length) {
    if(nums[i] % k == 0) {
        console.log(nums[i])
    }
    i++
}