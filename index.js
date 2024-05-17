const header = document.querySelector('header');
let lastScrollY = window.scrollY;
let ticking = false;

function onScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 120) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }

    lastScrollY = currentScrollY;
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
    }
});
