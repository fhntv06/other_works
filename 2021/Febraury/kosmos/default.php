<?php 
    require_once "common/database/database.php"; /* подключение базы данных */

    // код получающий url страницы
    $url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    $url = explode('?', $url);
    $url = $url[0];

    if( $url == "http://kosmos/" ){
        $title = "SPACE TODAY";
        require_once "index.php";

    }

    if( $url == "http://kosmos/404.php" ){
        $title = "Страница не найдена";
    }
    
