function page1Animation(){
  var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
  y:-30,
  opacity:0,
  delay:0.5,
  duration:1,
  stagger:0.15
})

tl.from(".center-part1 h2",{
  x:-150,
  opacity:0,
  duration:0.7
},"-=0.3")

tl.from(".center-part1 p",{
  x:-80,
  opacity:0,
  duration:0.4
})

tl.from(".center-part1 button",{
  opacity:0,
  duration:0.4
})

tl.from(".center-part2 img",{
  opacity:0,
  duration:0.5,
  x:100
},"-=0.7")

tl.from(".section1bottom img",{
  opacity:0,
  y:30,
  stagger:0.15,
  duration:0.5
})
}
function page2Animation(){
      var tl2 = gsap.timeline({
        scrollTrigger:{
          trigger:".section-2",
          scroller:"body",
          // markers:true,
          start:"top 50%",
          scrub:2,
          end:"top 0%"
        }
      })
      
      tl2.from(".services",{
        y:30,
        opacity:0,
        duration:0.5
      })
      
      
      //line 1
      tl2.from(".elem.line1.left",{
        x:-200,
        opacity:0,
        duration:1
      },"anim1")
      
      tl2.from(".elem.line1.right",{
        x:200,
        opacity:0,
        duration:1
      },"anim1")
      
      
      //line2
      tl2.from(".elem.line2.left",{
        x:-200,
        opacity:0,
        duration:1
      },"anim2")
      
      tl2.from(".elem.line2.right",{
        x:200,
        opacity:0,
        duration:1
      },"anim2")
}
function page3Animation(){
  var tl3 = gsap.timeline({
    scrollTrigger:{
      trigger:".section-3",
      scroller:"body",
      start:"top 80%",
      // markers:true,
      end:"top 0%",
      scrub:2
    }
  })
  
  tl3.from(".s3-left h2",{
    x:-200,
    opacity:0,
    duration:0.5
  })
  
  tl3.from(".s3-left p",{
    x:-200,
    opacity:0,
    duration:0.5
  })
  
  tl3.from(".s3-left button",{
    opacity:0,
    duration:0.6
  })
  
  tl3.from(".s3-right img",{
    x:200,
    opacity:0,
    duration:0.7
  },"-=1")
  
  // tl3.from(".section-3 .services",{
  //   y:30,
  //   opacity:0,
  //   duration:0.5
  // })
}
function footer(){
  var tl4 = gsap.timeline({
    scrollTrigger:{
      trigger:".footer",
      scroller:"body",
      start:"top 80%",
      end:"top 0%",
    }
  })
  
  tl4.from(".card p",{
    y:-200,
    duration:1,
    opacity:0
  })
  
  tl4.from(".card h4",{
    y:50,
    duration:1,
    opacity:0
  })
  
}

page1Animation()
page2Animation()
page3Animation()
footer()
    
    