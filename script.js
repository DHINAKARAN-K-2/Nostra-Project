const offer = document.getElementById("offer")
const closebtn = document.getElementById("closebtn")
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');
closebtn.addEventListener("click", function () {
    offer.classList.add("hidden")
})


menuBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('-translate-x-full');
});

closeBtn.addEventListener('click', function() {
    mobileMenu.classList.add('-translate-x-full');
});
