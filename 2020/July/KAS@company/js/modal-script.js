const body = document.querySelector("body");
const input = document.querySelector(".input");
const modalDialogBottomTextInnerHTML = document.querySelector(".modal-dialog-bottom-text-innerHTML");
const containerModal = document.querySelector(".container-modal");
const btn = document.querySelectorAll(".btn");
const formButton = document.querySelector(".form-button");

// закрытие modal
function modalNoActive(){
	containerModal.style.display = "";
	body.style.overflowY = "";
	input.value = "";
}
// открытие modal
function modalActive(){
	containerModal.style.display = "block";
	body.style.overflowY = "hidden ";
	formButton.addEventListener("click", modalNoActive);
	modalDialogBottomTextInnerHTML.value = "I'm happy! (￣▽￣)";
}

// для верхней кнопки
btn[0].addEventListener("click", modalActive);
// для нижней кнопки
btn[1].addEventListener("click", modalActive);
// работа с эмоджи
document.querySelectorAll('.feedback li').forEach(entry => entry.addEventListener('click', e => {
	const angry = document.querySelector("#angry");
    const sad = document.querySelector("#sad");
    const ok = document.querySelector("#ok");
    const good = document.querySelector("#good");
    const happy = document.querySelector("#happy");
    const modalDialogBottomTextInnerHTML = document.querySelector(".modal-dialog-bottom-text-innerHTML");
	let target = e.target;
    if(target === angry){
		modalDialogBottomTextInnerHTML.value = " I'm angry! (◣_◢)";
    }else if(target === sad){
		modalDialogBottomTextInnerHTML.value = " I'm sad! (╯_╰)";
    }else if(target === ok){
		modalDialogBottomTextInnerHTML.value = " I'm ok! (ー_ー )";
    }else if(target === good){
		modalDialogBottomTextInnerHTML.value = " I'm good! (◕‿◕)";
    }else if(target == happy){
		modalDialogBottomTextInnerHTML.value = " I'm happy! (￣▽￣)";
    }
    // отвечает за active эмоджи
    if(!entry.classList.contains('active')) {
        document.querySelector('.feedback li.active').classList.remove('active');
        entry.classList.add('active');
    }
    e.preventDefault();
}));
const modalDialog = document.querySelector(".modal-dialog");
// работа с background
containerModal.addEventListener("mousemove", function(e){
	let x0 = -((window.innerWidth - window.innerWidth / 2) - e.clientX);
	let y0 = (window.innerHeight - window.innerHeight / 2) - e.clientY;
	let w = window.innerWidth;
	let h = window.innerHeight;
  	modalDialog.style.background = `linear-gradient(90deg, rgb(30, 136, 229, 0.95) ${(x0 / w) * 200 + 30}%, rgba(63, 81, 181, 0.55) ${((x0 / w) + 0.1) * 200 + 30}%,  rgb(30, 136, 229, 0.95) ${(x0 / w) * 200 + 70}%`;
});
