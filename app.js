var bodyvar = document.body
var consumptionVar = document.getElementById("consumption")
var resourcesvar=document.getElementById("resources")
var climatevar=document.getElementById("climate")
var peoplevar=document.getElementById("people")
var savetest=document.getElementById("save")
var frame=document.getElementById("frame")

consumptionVar.onclick=()=>{
    //background
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"
    frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetest.textContent=" Do your bit! Shop only what you need,eat only what you need and always save the leftovers"
    consumptionVar.style.background="#27ae70"
    climatevar.style.background=""
    resourcesvar.style.background=""
    peoplevar.style.background=""

}
resourcesvar.onclick=()=>{
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
    bodyvar.style.backgroundsize=" 100% 100% "
    frame.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetest.textContent="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"
    resourcesvar.style.background="orange"
    climatevar.style.background=""
    consumptionVar.style.background=""
    peoplevar.style.background="" 

}
climatevar.onclick=()=>{
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
    bodyvar.style.backgroundsize="100% 100%"
    frame.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetest.textContent="Do your bit! Save trees, use renewable energy sources and prefer to travel green"
    climate.style.background="blue"
    resourcesvar.style.background=""
    peoplevar.style.background=""
    consumptionVar.style.background=""
}
peoplevar.onclick=()=>{
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
    bodyvar.style.backgroundsize=" 100% 100% "
    frame.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetest.textContent="Do your bit! Never waste  food.Rather offer it to people or animals who are in need."
    people.style.background="red"
    consumptionVar.style.background=""
    climatevar.style.background=""
    resourcesvar.style.background=""

}

