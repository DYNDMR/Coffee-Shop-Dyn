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

/*
pegar as fotos da api
criar efeito carroussel
*/