let initialPath = 'M 10 300 Q 750 300 1520 300'
let str = document.querySelector("#string svg")


str.addEventListener("mousemove", function (dets) {
    gsap.to("path", {
        attr: {
            d: `M 10 300 Q ${dets.x} ${dets.y} 1520 300`
        },
        duration: 1,
        ease: "power2.out"
    })
})
str.addEventListener("mouseleave", function () {
    gsap.to("path", {
        attr: {
            d: initialPath
        },
        duration: 5,
        ease: "elastic.out(1.2,0.1)",
    })
})