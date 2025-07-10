// Событие будет тогда, когда старница загружена
$(document).ready(function () {
    let tabsItem = $(".tabs-item");
    
    tabsItem.on("click", function(event){
        event.preventDefault();
        // через this обращаемся к нужному элементу "этому"
        let activeContent = $(this).attr("href");
        $(".visible").toggleClass("visible"); 
        $(activeContent).toggleClass("visible");
        $(".tabs-item-active").toggleClass("tabs-item-active");
        $(this).toggleClass("tabs-item-active");
    });
});