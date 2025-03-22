let navbar = document.querySelector('.res-nav')
let menuBtn = document.querySelector('.menu-btn')
let closeBtn = document.querySelector('.closebtn')

menuBtn.addEventListener('click', () => {
    // navbar.style.display = 'flex'
    gsap.fromTo(navbar, {
        display: 'none',
        x: 800,
        duration: 1.3,
    }, {
        x: 0,
        display: 'flex'
    })
})
closeBtn.addEventListener('click', () => {
    gsap.to(navbar, {
        x: 800,
        duration: 1,
    })
    gsap.to(navbar, {
        display: 'none',
        delay: 1,
    })

})

window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        navbar.style.display = 'none'
    }
})


// ScrollTriggers
gsap.registerPlugin('ScrollTrigger')
let divs = document.querySelectorAll('.sub-sec')
let text = document.querySelectorAll('.text-ani')
let hero = document.querySelector('.hero-section')
let footer = document.querySelector('footer').children
let next = document.querySelector('.journey')

let heros = gsap.utils.toArray(hero.children)
gsap.set(heros[0].children, {
    y: 50,
    filter: 'blur(20px)',
    opacity: 0,
})
gsap.to(heros[0].children, {
    scrollTrigger: {
        trigger: heros[0],
        start: 'top 60%',
        // scrub: 1
    },
    y: 0,
    filter: 'blur(0px)',
    opacity: 1,
    duration: 1,
    stagger: {
        each: 0.2
    }
})
gsap.from(heros[1], {
    scrollTrigger: {
        trigger: hero[1],
        start: 'top 20%',
    },
    x: 100,
    filter: 'blur(20px)',
    opacity: 0,
    duration: 1,
})

gsap.from(heros[2], {
    filter: 'blur(20px)',
    opacity: 0,
    duration: 1
})
gsap.from(heros[2], {
    scrollTrigger: {
        trigger: hero,
        start: 'top 20%',
        end: 'bottom 60%',
        scrub: 1,
    },
    y: -130,
    duration: 3,
})

gsap.utils.toArray(divs).forEach(element => {
    gsap.from(element.children, {
        scrollTrigger: {
            trigger: element.children,
            start: 'top 70%',
        },
        y: 100,
        filter: 'blur(20px)',
        opacity: 0,
        duration: 1,
        stagger: {
            each: 0.3
        }
    })
    for (let i = 0; i < element.children.length; i++) {
        gsap.from(element.children[i].children, {
            scrollTrigger: {
                trigger: element.children[i].children,
                start: 'top 80%',
            },
            y: 100,
            filter: 'blur(20px)',
            opacity: 0,
            duration: 1,
            stagger: {
                each: 0.3
            }
        })
    }
    
})

gsap.utils.toArray(text).forEach(element => {
    gsap.from(element.children, {
        scrollTrigger: {
            trigger: element.children,
            start: 'top 70%',
        },
        y: 100,
        filter: 'blur(20px)',
        opacity: 0,
        duration: 1,
        stagger: {
            each: 0.3
        }
    })
})

gsap.utils.toArray(footer).forEach(element => {
    gsap.from(element.children, {
        scrollTrigger: {
            trigger: element.children,
            start: 'top bottom',
        },
        y: -50,
        filter: 'blur(20px)',
        opacity: 0,
        duration: 1,
        stagger: {
            each: 0.3
        }
    })
})

gsap.from(next, {
    scrollTrigger: {
        trigger: next,
        start: 'top 70%',
    },
    y: 100,
    filter: 'blur(20px)',
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.3
    }
})
gsap.set(next.children, {
    y: 100,
    filter: 'blur(20px)',
    opacity: 0,
})
gsap.to(next.children, {
    scrollTrigger: {
        trigger: next.children,
        start: 'top 70%',
    },
    y: 0,
    filter: 'blur(0px)',
    opacity: 1,
    duration: 1,
    stagger: {
        each: 0.3
    }
})



// Slider
let slide = document.querySelector('.slider')
let slidelength = slide.children[0].clientWidth
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

slide.scrollBy(slidelength / 1.4, 0)

let slideAnimation = () => {
    slide.scrollBy(slidelength + 10, 0)
}
let slideAnimation2 = () => {
    slide.scrollBy(-slidelength + 10, 0)
}
slide.addEventListener('keydown', event => {
    if (event.key == 'ArrowRight') {
        event.preventDefault()
        slideAnimation()
    } else if (event.key == 'ArrowLeft') {
        event.preventDefault()
        slideAnimation2()
    } else{
        null
    }
})

nextBtn.addEventListener('click', slideAnimation)
prevBtn.addEventListener('click', slideAnimation2)