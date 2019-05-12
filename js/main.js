/*===========================================
                  JavaScript
============================================*/
function ToggleNav(el){
    hamburgerMenu = document.querySelector("#hamburger-menu");
    navMenu = document.querySelector("#nav-menu");

    // Icon will go from hamburger to X
    hamburgerMenu.classList.toggle("active");

    if(hamburgerMenu.classList.contains("active")){
        navMenu.style.display = "flex";
    } else {
        navMenu.style.display = "none";
    }
}

function ImageModal(currentImage){
    modal = document.querySelector("#myModal");
    modalImage = document.querySelector("#modal-image");

    ToggleModal("open");
    modalImage.src = currentImage.src;
}

function ToggleModal(status){
    if(status == "open"){
        modal.style.display = "block";
    }

    else if(status == "close"){
        modal.style.display = "none";
    }
}


/*===========================================
                 ScrollReveal
============================================*/
var ItemReveal = {
    delay: 300,
    easing: 'ease-in-out',
    // reset: true
}

var ItemReveal2 = {
    delay: 600,
    easing: 'ease-in-out',
    // reset: true
}

window.sr = ScrollReveal();
sr.reveal('.itemReveal', ItemReveal);
sr.reveal('.itemReveal2', ItemReveal2);

sr.reveal('.project', ItemReveal2); // Home + Work Page
sr.reveal('.info-box', ItemReveal2); // About Page
sr.reveal('.detail', ItemReveal2); // Project Page
sr.reveal('#PROJECT_PAGE .project-image', ItemReveal2); // Project Page