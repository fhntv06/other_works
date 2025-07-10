<?php 



$countArticle = 1;
$countNav = $countArticle;
$maxCountArticle = 5; // максимальное число статей на странице

$top = 0; // смещение nav у статей
?>

<section id="favorite__facts" class="section section__three">
    <h2>Удивительные факты</h2>
    <div class="section-facts">

        <div class="arrow-one arrow__up-one" data-translate="up">
            <div class="arrow-2 arrow__up">
                <div class="arrow-2-top"></div>
                <div class="arrow-2-bottom"></div>
            </div>
        </div>
        <div class="overflow">
            <div class="nav">
        <?php 
            foreach($facts as $fact){   
                if($countNav <= $maxCountArticle){
            ?>  
                <div class="overflow-nav" data-countNav="<?= $countNav ?>"></div>
                
            <?php 
                }
                $countNav++;
            } 
            ?>
            </div>
            <div class="section-overflow">
                <div class="section-facts__move">
            
                <?php 
                foreach($facts as $fact){ 
                    if($countArticle <= $maxCountArticle){
                ?>
                    <div class="section-facts__fact">
                        <div class="section-facts__img" style="background-image: url(<?= $fact[4] ?>);">
                            <div class="section-facts__text">
                                <div class="text__title">
                                <?php if(!$fact[5]){?>
                                    <a href="<?= "#" ?>">
                                    <?php }else{ ?>
                                    <a href="article.php?simbol_code=<?= $fact[5] ?>">
                                <?php } ?>
                                        <h3><?= $fact[0] ?></h3>
                                    </a>
                                </div>
                                <div class="text__desc">
                                    <p><?= $fact[1] ?> ...</p>
                                    <p class="data"> Дата: <?= $fact[2] ?></p>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php 
                    } 
                    $countArticle++;
                }
                ?>

                </div>
            </div>
           
        </div>
        <div class="arrow-one arrow__down-one" data-translate="down">
            <div class="arrow-2 arrow__down">
                <div class="arrow-2-top"></div>
                <div class="arrow-2-bottom"></div>
            </div>
        </div>
    </div>
</section>
