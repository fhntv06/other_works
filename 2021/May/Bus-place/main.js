// кнопка
const itemBtn = document.querySelector(".item__btn");

// массивы мест левого, правого и заднего рядов 
const listItemLeftArr = document.querySelectorAll(".list_item-left");
const listItemRigthArr = document.querySelectorAll(".list_item-rigth");
const listItemLastArr = document.querySelectorAll(".list_item-last");

// массив всех мест
const listItem = document.querySelectorAll(".list_item");
// элементы для вывода цены и места
const itemPrice = document.querySelector(".item__price");
const itemPlace = document.querySelector(".item__place");

// номера мест в салоне
const numberLeft = [3,4,7,8,11,12,15,16,19,20,23,24,27,28,31,32,35,36,39,40,43,44];
const numberRigth = [1,2,5,6,9,10,13,14,17,18,21,22,25,26,29,30,33,34,37,38,41,42];
const numberLast = [45,46,47,48,49];

// предварительная цена билета
let priceTicket = 134;
// проверка на то, выбрано ли место
let checkThisTicket = false;

// функция задающая номера мест и добавляющая цену на рейс
function stateNumber(){
    // цена на рейс
    itemPrice.innerText = priceTicket;

    // циклы добавления мест
    // цикл добавления мест для левого ряда
    for( let i = 0; i < listItemLeftArr.length; i++ ){
        listItemLeftArr[i].setAttribute("place", numberLeft[i]);
        listItemLeftArr[i].querySelector("p").innerText = `${numberLeft[i]}`;
    }

    // цикл добавления мест для правого ряда
    for( let j = 0; j < listItemRigthArr.length; j++ ){
        listItemRigthArr[j].setAttribute("place", numberRigth[j]);
        listItemRigthArr[j].querySelector("p").innerText = `${numberRigth[j]}`;
    }

    // цикл добавления мест для заднего ряда
    for( let k = 0; k < listItemLastArr.length; k++ ){
        listItemLastArr[k].setAttribute("place", numberLast[k]);
        listItemLastArr[k].querySelector("p").innerText = `${numberLast[k]}`;
    }
}

// запуск функций
stateNumber();

// функция вывода места
function outInfo(place){
    itemPlace.innerText = place;

    // изменение значения подтверждения 
    checkThisTicket = true;
}

// цикл для отслеживания клика по выбору места
for (let i = 0; i < listItem.length; i++) {
    listItem[i].onclick = function(){
        let place = listItem[i].querySelector("p").textContent;
        outInfo(place);
    };
};

// вывод подтверждения о том, что билет куплен
itemBtn.addEventListener("click", () => {
    if( checkThisTicket ){
        alert(`Вы купили билет! \n Место: ${ document.querySelector(".item__place").textContent };\n Стоимость: ${ priceTicket };`);
    }else{
        alert(`Вы не выбрали место!`);
    }
});










