function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../img/nav_footer/icon-bars.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../img/nav_footer/icon-close.svg";
    }
}
