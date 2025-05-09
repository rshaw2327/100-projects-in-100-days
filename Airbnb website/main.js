const formEl=document.getElementById("form")

formEl.addEventListener("submit",async(e)=>{
    e.preventDefault()
    let formData={
        hostId:e.target.host_id.value,
        roomType:e.target.room_type.value,
        country:e.target.country.value,
        city:e.target.city.value,
        bedrooms:e.target.bedrooms.value,
        price:e.target.price.value,
    }
    try{
        const res= await fetch("http://127.0.0.1:9060/api/v1/airBnb",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)

        })
        const data=res.json()
        console.log("booking created")
    }
    catch(error){
        console.log("error",error)
    }
})


