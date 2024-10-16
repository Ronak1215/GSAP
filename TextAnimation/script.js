function breakTheText(){
  var h1 = document.querySelector("h1")
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

gsap.from(".a",{
  y:80,
  delay:0.5,
  duration:0.6,
  stagger:0.15,
  opacity:0
})

gsap.from(".b",{
  y:80,
  delay:0.5,
  duration:0.6,
  stagger:-0.15,
  opacity:0
})