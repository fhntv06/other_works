
const rollIcon = document.querySelector(".roll");
const expandIcon = document.querySelector(".expand");
const closeIcon = document.querySelector(".close");
const tab = document.querySelector(".tab");
const modal = document.querySelector(".modal");


rollIcon.addEventListener("click", () =>{
    alert("Click on roll!");

    // должна быть анимация сварачивания
});

expandIcon.addEventListener("click", () =>{
    modal.classList.toggle("modal_expand");

});

closeIcon.addEventListener("click", () =>{
    modal.classList.toggle("active__modal");
    tab.classList.add("active__tab");
    tab.classList.toggle("active__tab-open");

    tab.querySelector("h3").innerText = "OPEN";


});

tab.addEventListener("click", () =>{
    if( tab.classList.contains("active__tab-open") ){

        tab.querySelector("h3").innerText = "CLOSE";

    }else{
        
        tab.querySelector("h3").innerText = "OPEN";

    }
    tab.classList.toggle("active__tab-open");
    modal.classList.toggle("active__modal");
});