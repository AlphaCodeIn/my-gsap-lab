let tl = gsap.timeline(); 


tl.to(".box1",{
    x:1000,
    duration:2,
    rotation: 360
},1)
tl.to(".box2",{
    x:1000,
    duration:2,
    rotation: 360
},"+=0.5")
tl.to(".box3",{
    x:1000,
    duration:2,
    rotation: 360
},"+=0.5")