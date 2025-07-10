<?php 

$servername = "localhost";
$username = "root";
$password = "root";
$database = "article_kosmos";

$connect = mysqli_connect($servername, $username, $password, $database);

/* получение id параметра */
$simbol_code = $_GET["simbol_code"];


// возникает проблема с отправкой запроса в базу данных для получения данных по GET-параметру ( id )  
$where =  "WHERE `simbol_code` LIKE '".$simbol_code."'";
if( $simbol_code ){
    $queryFacts = "SELECT * FROM `article` $where ORDER BY data DESC";
}else{
    $queryFacts = "SELECT * FROM `article` ORDER BY data DESC";
}


$queryNews = "SELECT * FROM `news` $database";
$querySpaceShips = "SELECT * FROM `spaceships` $database";

// подключение к таблице для блока "favorite__facts"
$facts = mysqli_query($connect, $queryFacts);
$facts = mysqli_fetch_all($facts);
$title = $facts[0][0];

// // подключение к таблице для "news"
$news = mysqli_query($connect, $queryNews);
$news = mysqli_fetch_all($news);

// // подключение к таблице для "space__ships"
$spaceships = mysqli_query($connect, $querySpaceShips);
$spaceships = mysqli_fetch_all($spaceships);