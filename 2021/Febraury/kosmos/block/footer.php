<?php 
        // код получающий url страницы
        $url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        $url = explode('?', $url);
        $url = $url[0];
?> 

<footer class="footer">

    <?php require_once "navigation/navigation-footer.php" ?> 

</footer>