var main = document.querySelector(".main")
var cursor = document.querySelector(".cursor")
var imageDiv = document.querySelector(".image")

main.addEventListener("mousemove",function(e){
  gsap.to(cursor,{
    x:e.x,
    y:e.y,
    duration:0.5,
    ease: "back.Out(2)",
  })

  // console.log(event.x)
})

imageDiv.addEventListener("mouseenter",()=>{
  cursor.innerHTML = "View More"
  gsap.to(cursor,{
    scale:3,
    backgroundColor:"#ffffff8a",
  })
})

imageDiv.addEventListener("mouseleave",()=>{
  cursor.innerHTML = ""
  gsap.to(cursor,{
    scale:1,
    backgroundColor:"#fff"
  })
})