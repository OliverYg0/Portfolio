function pauseScrolling() {
    document.body.classList.toggle('scrolling-paused')
}

const navToggle = document.querySelector('.nav-toggle')
const navItems = document.querySelector('.nav-items')
const navLinks = document.querySelectorAll('.navLinks')

function toggleNav() {
    navItems.classList.toggle('nav-active')
    navToggle.classList.toggle('nav-active')
}

navToggle.addEventListener('click', () => {
    pauseScrolling()
    toggleNav()
})

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        toggleNav()
        navLink.classList.add('active')
    })
})