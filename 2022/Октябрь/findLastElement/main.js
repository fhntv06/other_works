let containerItems = null,
arrayItems = null,
lastIndexElement = 0,
borderLastElement = null,
borderNewElement = null;

window.addEventListener('load', () => {
    containerItems = document.querySelector('.list__items');
    arrayItems = document.querySelectorAll('.item');
    event();
    findLastElement(lastIndexElement)
});

function event() {
    for (let index = 0; index < arrayItems.length; index++) {
        arrayItems[index].addEventListener('click', (event) => {
            containerItems.style.transform = `translateX(${-event.target.getAttribute('data-count') * event.target.offsetWidth}px)`
            document.querySelector('.container p').style.transform = `translateX(${-event.target.getAttribute('data-count') * event.target.offsetWidth}px)`

            resetBlur();
            event.target.classList.add('active');
            findLastElement(+event.target.getAttribute('data-count'));
        })
    }
}

function resetBlur() {
    for (let index = 0; index < arrayItems.length; index++) {
        arrayItems[index].classList.remove('blur');
        arrayItems[index].classList.remove('active');
    }
}

function findLastElement(selectElement) {
    let delta = selectElement - lastIndexElement;

    // var 2
    const { left } = containerItems.getBoundingClientRect();
    let volumeElementsOnContainerIndex = Math.floor((window.screen.width - left) / arrayItems[selectElement].offsetWidth);
    
    for (let index = 0; index < arrayItems.length; index++) {
        // var 1 - work
        const { right } = arrayItems[index].getBoundingClientRect();
        const { left } = arrayItems[index].getBoundingClientRect();

        // if ((right - arrayItems[index].offsetWidth * delta) > window.screen.width) {
        //     // тут надо ограничение и более точное отслеживание
        //     arrayItems[index].classList.add('blur');
        //     break; 
        // }

        // var 2 - work
        arrayItems[volumeElementsOnContainerIndex + delta].classList.add('blur');
    }

    lastIndexElement = selectElement;
}
