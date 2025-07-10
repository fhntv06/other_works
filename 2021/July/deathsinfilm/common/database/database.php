<?php 

$servername = "localhost";
$username = "root";
$password = "root";
$database = "deadinfilm";

$connect = mysqli_connect($servername, $username, $password, $database);

/* получение simbol_code параметра */
$simbol_code = $_GET["simbol_code"];

/* получение rubric параметра */
$rubric = $_GET["rubric"];

// подключение пагинации
require_once "pagination.php";

// возникает проблема с отправкой запроса в базу данных для получения данных по GET-параметру ( simbol_code )  
$whereSimbol_code =  "WHERE `simbol_code` LIKE '".$simbol_code."'";
if( $simbol_code ) {

    // если перешел на статью
    // Выбираем $maxCountFilms сообщений начиная с номера $start  
    $queryFilms = "SELECT * FROM `film` $whereSimbol_code";

    // запрос для секции "новинки"

    $queryFilmsAll = "SELECT * FROM `film` ORDER BY id DESC LIMIT $maxCountAllFilms";
    $filmsAll = mysqli_query($connect, $queryFilmsAll);  
    $filmsAll = mysqli_fetch_all($filmsAll);
    
}else if($rubric){

    $queryFilms = "SELECT * FROM `film` $whereRubric";

}else{

    // если не перешел на статью
    // основной запрос
    $queryFilms = "SELECT * FROM `film` ORDER BY data DESC LIMIT $start, $maxCountFilms";
    
}

$films = mysqli_query($connect, $queryFilms); 



// подключение к таблице для блока "films"
// этот код нужен для вывода карточек на страницу
$films = mysqli_fetch_all($films);



// title на выбранной странице 
$title = $films[0][1];




// подключение к таблице для блока "rubrics"
$queryRubrics = "SELECT * FROM `rubrics`";
$rubrics = mysqli_query($connect, $queryRubrics);
$rubrics = mysqli_fetch_all($rubrics);