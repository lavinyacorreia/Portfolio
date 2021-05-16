const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);


//Show active menu when scrolling
const highlightMenu = () => {
    const element = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const experiencesMenu = document.querySelector('#experiences-page');
    const contactMenu = document.querySelector('#contact-page');
    let scrollPos = window.scrollY

    // adds ''highlight class
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } 
    else if (window.innerWidth > 900 && scrollPos <1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        experiencesMenu.classList.remove('highlight')
        return
    }
    else if (window.innerWidth > 900 && scrollPos <2350) {
        experiencesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        contactMenu.classList.remove('highlight')
        return
    }
    else if (window.innerWidth > 900 && scrollPos <3350) {
        contactMenu.classList.add('highlight')
        experiencesMenu.classList.remove('highlight')
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight')
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);