const modal = document.querySelector('.modal');
const modalMask = document.querySelector('.modal-mask')

function showModal(){
    modal.style.left = "50%";
    modalMask.style.visibility = "visible";
}

function closeModal(){
    modal.style.left = "-30%";
    modalMask.style.visibility = "hidden";
}


function scrollToAboutSection() {
    const aboutSection = document.querySelector('.about-section');
    aboutSection.scrollIntoView({ behavior: "smooth" });
}
