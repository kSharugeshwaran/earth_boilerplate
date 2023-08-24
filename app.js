var bodyvar=document.body

//consumption
var consumptionvar=document.getElementById("consumption")

//resource
var resourcesvar=document.getElementById("resources")

//climate
var climatevar=document.getElementById("climate")

//people
var peoplevar=document.getElementById("people")

//save
var savevar=document.getElementById("save")
//frame
var framevar=document.getElementById("frame")

consumptionvar.onclick=()=>{

    //background
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"

    //frame
    frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    savevar.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the leftovers."

    consumptionvar.style.background="green"
    climatevar.style.background=""
    resourcesvar.style.background=""
    peoplevar.style.background=""

}

resourcesvar.onclick=()=>{

    //background
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"

    //frame
    frame.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    savevar.innerHTML="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"

    resourcesvar.style.backgroundColor="orange"
    peoplevar.style.background=""
    climatevar.style.background=""
    consumptionvar.style.background=""
}

climatevar.onclick=()=>{

    //background
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"

    //frame
    frame.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    savevar.innerHTML="Do your bit! Save trees, use renewable energy sources and prefer to travel green."

    climatevar.style.background="blue"
    consumptionvar.style.background=""
    resourcesvar.style.background=""
    peoplevar.style.background=""

}

peoplevar.onclick=()=>{

    //background
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"

    //frame
    frame.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    savevar.innerHTML=" Do your bit! Never waste  food.Rather offer it to people or animals who are in need."

    peoplevar.style.background="red"
    consumptionvar.style.background=""
    resourcesvar.style.background=""
    climatevar.style.background=""
}