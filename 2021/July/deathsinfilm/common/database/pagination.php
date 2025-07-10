<?php

// Разбиваем страницы на нужное количество
$page = 1; // текущая страница
$maxCountFilms = 3;  // количество записей для вывода
$maxCountAllFilms = 5; // количество фильмов в секции "новинки"
$countCard = 0;

// Определяем страницу, на которой находимся
if (isset($_GET['page'])){
    $page = $_GET['page'];
}else $page = 1;
 
$start = ($page * $maxCountFilms) - $maxCountFilms; // определяем, с какой записи нам выводить

// Формируем постраничную навигацию

// 1) Запрос для получения всех карточек
// 2) Проверка есть ли у них выбранная категория
// 3) Если есть, то запись номера карточки 
// 4) 

if($rubric){


    $rubricFilms = mysqli_query($connect, "SELECT * FROM `film`"); // делайм запрос
    $rubricFilms = mysqli_fetch_all($rubricFilms); // получаем все карточки
    $lengthFilms = count($rubricFilms); // считаем количество карточек

    $idCard = array();
    $field = '';

    // цикл для беребора всего массива с карточками
    for($k = 0; $k < $lengthFilms; $k++){

       // критерий вывода карточки только по выбранной категории
       // получение и разбиение на массив строки категорий
       $text = explode( ", ", $rubricFilms[$k][9] ); 
       $length = count($text);

       // цикл для перебора категорий
       // если категория есть, то выбрана, то выводится карточка
        for( $i = 0; $i < $length; $i++){
        
            if($rubric == $text[$i]){

                // для получения числа карточек
                $idCard [] = $rubricFilms[$k][0];

                // для формирования строки field
                // $field = $field.",".$rubricFilms[$k][0]; 

                // $field = $rubricFilms[$k][0].","; 

            } 
                    
        }

    }

// page = 1;
// start = 3;
// idCard = 8;
// idN = start;
// max = 3;

// page = 1: start + max - 1 = 2 (0 1 2) 8 - 6 (  )
// page = 2: start + max - 1 = 5 (3 4 5) 8 - 3 (  )

// перебор => от idN ( start (3) ) до idCard (8)  нужно от 3 до 5 (3,4,5) = max
// 0 1 2 - 3! 3/max = 1
// 3 4 5 - 6! 6/max = 2
// 6 7 8 - 9! 9/max = 3
// ---------!
        

    // перебор значений id для того чтобы убрать запятую в конце строки field
    for($idN = $start; $idN < count($idCard); $idN++){
        
        // если последний элемент
        if( $idN == (count($idCard) - 1) ){

            $field = $field.$idCard[$idN]; 


        // для всех остальных кроме последнего
        }else{

            $field = $field.$idCard[$idN].","; 

        }
        
    }

    // Запрос к базе нужен для получения количества для rubric
    $whereRubric =  "WHERE id IN (".$field.")";


    $total = count($idCard); // всего записей
        
}else{

    // Запрос к базе нужен для получения количества для главной страницы
    $selectFilms = mysqli_query($connect, "SELECT COUNT(*) FROM `film`"); 
    $row = mysqli_fetch_row($selectFilms);
    $total = $row[0]; // всего записей
}



// Cколько у нас будет страниц
$str_pag = ceil( $total / $maxCountFilms);

// echo "str_pag = ".$str_pag." <br> total = ".$total."<br> field = ".$field;

//Следующая запись
$next_page = $page + 1;

//Предыдущая запись
$previous_page = $page - 1;



