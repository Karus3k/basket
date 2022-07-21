const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        console.log("sssssss");
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }))

    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    });