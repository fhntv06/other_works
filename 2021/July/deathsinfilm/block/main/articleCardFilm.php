<?php 

    // вывод для каждого фильма

?>

<main class="main">

    <section class="section__img" style="background-image:url(<?= $films[0][5] ?>);">
        <div class="container-shadow"></div>
        <div class="container-title">
            <p class="content__title"><?= $films[0][1] ?></p>
        </div>
        <div class="container__content">

            <div class="container__content-desc">
                <p><?= $films[0][3] ?></p>
            </div>
            <div class="container__content-data">
                <p> <span>Премьера в России: </span><?= $films[0][12] ?></p>
            </div>
        </div>
    </section>

    <section class="section__desc">
        <div class="section__desc-film">
            <h1 class="section__desc-film-title film-title">Описание</h1>
            <div class="section__desc-content">
                <div class="section__desc-film-img">
                    <img class="film-img" src="<?= $films[0][4] ?>" alt="<?= $films[0][1] ?>">
                </div>
                <p class="section__desc-film-content"><?= $films[0][2] ?></p>
            </div>
        </div>
    </section>
    
    <?php 

        // массив со ссылками на изображения
        $textSource = explode( ", ", $films[0][7] ); 

        if( $films[0][7] ){ 
                        
    ?>

        <section class="section__gallery">
            <h1 class="section__gallery-film-title film-title">Галлерея</h1>
            
            <div class="carousel-3d">
                
                <nav>
                    <button class="nav prev">Назад</button>
                </nav>

                <figure>
                    
                    <?php 

                        foreach( $textSource as $source ){

                    ?>

                        <div><a data-fancybox="gallery" href="<?= $source ?>"><img src="<?= $source ?>" alt="<?= $films[0][1] ?>" title="<?= $films[0][1] ?>"/></a></div>
                    

                    <?php

                            }
                    
                    ?>

                </figure>

                <nav>
                    <button class="nav next">Вперед</button>
                </nav>
            </div>    

        </section> 
    <?php

        } 

    ?>

    <section class="section__grafs">

            <!-- Секция графиков смертей от времени -->

    </section>

    <section class="section__flaers">

            <h1 class="section__flaers-film-title film-title">Новинки</h1>


            <?php 
            
            foreach($filmsAll as $cardFilm){

            ?>
                    <div class="list__item">
                        <img class="item__img" src="<?= $cardFilm[4] ?>" title="<?= $cardFilm[1] ?>" alt="<?= $cardFilm[1] ?>">
                        <div class="item__text text-title">
                            <a href="article.php?simbol_code=<?= $cardFilm[8] ?>"><h3><?= $cardFilm[1] ?></h3></a>
                            <p class="text-raiting-and-age">
                                <span><b>Рейтинг</b>: <?= $cardFilm[10] ?>
                                <br></span>
                            </p>
                        </div>
                    </div>

            <?php 
            
            }

            ?>



    </section>
</main>