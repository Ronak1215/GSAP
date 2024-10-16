gsap.from(".page1 .box",{
  rotate:360,
  opacity:0,
  duration:1,
  delay:1,
  scale:0
})

gsap.from(".page2 .box",{
  rotate:760,
  opacity:0,
  duration:2,
  scale:0,
  scrollTrigger:{
    trigger:".page2 .box",
    scroller:"body",
    markers:true,
    start:"top 60%",
    end:"top 30%",
    scrub:2,
  }
})