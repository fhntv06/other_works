

<main class="main">

    <?php require_once "main/sidebar.php"; ?>
    
    <div id="container">
        <?php 
        
            if( $url == "http://kosmos/404.php" ){ 

                require_once "error.php";

            }else{

                // Логика для вывода статей по GET-параметрам   
                if( $simbol_code ){
        ?>
                
                    <section class="section"> 
                        
                        
                        <div class="wrapper">
                        <h2><?= $facts[0][0] ?></h2>
                            <div class="wrapper__content">
                               
                                    <?php
                                        $text = explode( ". ", $facts[0][3] ); 
                                        $length = count($text);
                                        for( $i = 0; $i < $length; $i++){
                                    ?>
                                        
                                        <p><?= $text[$i] ?>.</p>

                                    <?php 
                                        
                                        } 
                                    ?>
                                
                            </div>
                        </div>
                    </section>
                
        <?php
                }else{

                    require_once "main/news.php";
                    require_once "main/spaceships.php";
                    require_once "main/facts.php";

                }

            }
        
        ?>
    </div>
</main>