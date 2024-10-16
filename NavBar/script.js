var menu = document.querySelector(".nav i")
var cross = document.querySelector(".full i")

var tl = gsap.timeline()

// gsap.from(".nav h2",{
//   y:80,
//   delay:1,
//   duration:0.5
// })

tl.to(".full",{
  right:0
})

tl.from(".full h4",{
  x:120,
  duration:0.5,
  stagger:0.2,
  opacity:0
})

tl.from(".full i",{
  opacity:0
})

tl.pause()

menu.addEventListener("click",()=>{
  tl.play()
})

cross.addEventListener("click",()=>{
  tl.reverse()
})

function breakTheText(){
  var h1 = document.querySelector(".main h1")
  var h1Text = h1.textContent
  var splittedText = h1Text.split("")
  var halfValue = splittedText.length/2
  var clutter = ""

  splittedText.forEach((elem,index)=>{
    if(index < halfValue){
      clutter += `<span class="a">${elem}</span>`
    }
    else{
      clutter += `<span class="b">${elem}</span>`
    }
  })

  h1.innerHTML = clutter
}
breakTheText()

gsap.from("h1 .a",{
  y:80,
  delay:0.5,
  duration:0.6,
  stagger:0.15,
  opacity:0
})

gsap.from("h1 .b",{
  y:80,
  delay:0.5,
  duration:0.6,
  stagger:-0.15,
  opacity:0
})