
<?php 

    // вывод для главной страницы 
    if(!$simbol_code && !$rubric){
        
        require_once "main/listCardFilm.php";

    } 

    // вывод для article.php
    if( $simbol_code ){ 

        require_once "main/articleCardFilm.php";

    }

    // вывод карточек по выбранной категории 
    if( $rubric ){ 

        require_once "main/rubric.php";

    }

     // вывод контента для 404
     if( $url == $protocol."deathsinfilm/404.php" ){ 

        require_once "error.php";

    }
  
?>