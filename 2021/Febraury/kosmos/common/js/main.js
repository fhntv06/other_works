
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const container = document.querySelector("#container");

const sectionCardRightArr = document.querySelectorAll(".section_card-right");

let mainOffsetTop = main.offsetTop;

window.addEventListener("scroll", function checkHeight(){
    let scrollWindow = window.pageYOffset;

    // движение main и nav
    if( scrollWindow > mainOffsetTop ){
        let widthWindow = window.outerWidth;
        if( widthWindow >= 500 ){
            container.style.marginLeft = sidebar.offsetWidth + "px";
        }
        // движение sidebar

        sidebar.style.top = (scrollWindow - mainOffsetTop) + "px";
        sidebar.style.left = "0px";

       

        if( widthWindow <= 1068 ){
            for( i = 0; i < sectionCardRightArr.length; i++){
                sectionCardRightArr[i].style.height = "350px";
            }  
            
            if( widthWindow <= 768 ){
                for( i = 0; i < sectionCardRightArr.length; i++){
                    sectionCardRightArr[i].style.height = "260px";
                }  
            }
        }
       
    }else{
        container.style.marginLeft = "";
        sidebar.style.left = -1 * sidebar.offsetWidth + "px";
        
        for( i = 0; i < sectionCardRightArr.length; i++){
            sectionCardRightArr[i].style.height = "";
        }

    }
});



// Работа слайдера "Удивительные факты"
const arrowUpOne = document.querySelector(".arrow__up-one");
const arrowDownOne = document.querySelector(".arrow__down-one");

const sectionFactsMove = document.querySelector(".section-facts__move");

const overflowNav = document.querySelectorAll(".overflow-nav");

let count = 1;

const heightSectionFacts = document.querySelector('.section-facts__fact').clientHeight;

function moveFacts(){

    
    let translate = this.getAttribute("data-translate");

    if(translate == "up"){
        count--;
        if(count < 0 || count == 0){
            count = overflowNav.length;
            sectionFactsMove.style.top = `${ ( count * (-heightSectionFacts) ) + heightSectionFacts }px`;
        }else{
            sectionFactsMove.style.top = `${ ( count * (-heightSectionFacts) ) + heightSectionFacts }px`;
        }
        for(let j = 0; j <= overflowNav.length - 1; j++){
            overflowNav[j].classList.remove("active");
        }
        overflowNav[count-1].classList.add("active");
    }
        
    if( translate == "down" ){
        count++;
        if( count > overflowNav.length ){
            count = 1;
            sectionFactsMove.style.top = `${ ( count * (-heightSectionFacts) ) + heightSectionFacts }px`;
        }else{
            sectionFactsMove.style.top = `${ ( count * (-heightSectionFacts) ) + heightSectionFacts }px`;
        }
        for(let j = 0; j <= overflowNav.length - 1; j++){
            overflowNav[j].classList.remove("active");
        }
        overflowNav[count-1].classList.add("active");
    }
}

arrowUpOne.addEventListener("click", moveFacts);
arrowDownOne.addEventListener("click", moveFacts);

for(let i = 0; i < overflowNav.length; i++){

    overflowNav[i].addEventListener("click", function(){
        count = i+1;

        let countnav = this.getAttribute("data-countnav");

        sectionFactsMove.style.top = `${ ( countnav * (-heightSectionFacts) ) + heightSectionFacts }px`;

        if(!this.classList.contains("active")){
            for(let j = 0; j <= overflowNav.length - 1; j++){
                overflowNav[j].classList.remove("active");
            }
            this.classList.add("active");
        }
    });
}



