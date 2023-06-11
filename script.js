function ham() {
    let hamburg = document.getElementById("hamburg")
    let cross = document.getElementById("cross")
    let navBar = document.getElementById("nav-bar")

    hamburg.classList.toggle("not-active")
    cross.classList.toggle("active")
    navBar.classList.toggle("nav-active")
}



function dark() {
    let moon = document.getElementById("moon")
    let sun = document.getElementById("sun")

    moon.classList.toggle("not-active")
    sun.classList.toggle("active")

    document.body.classList.toggle("dark-mode")
}



$('.owl-carousel').owlCarousel({
    autoplayHoverPause: true,
    loop: true,

    autoplay: true,
    autoplayTimeout: 2000,
    stagePadding: 18,

    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        768: {
            items: 3
        },
        1024: {
            items: 4
        }
    }
})

