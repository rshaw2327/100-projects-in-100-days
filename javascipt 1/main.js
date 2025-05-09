let nums= [10,20,30,40,50,60]

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
}
let i = 0;
while(i < nums.length) {
    console.log(nums[i])
    i++
}
nums.map((item,index)=>{
    return (
        console.log(item)
    )
})

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>displayData(json))
function displayData(data){
    data.map((item,index)=>{
    console.log(item.price)
    })
} 