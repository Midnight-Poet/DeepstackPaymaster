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

