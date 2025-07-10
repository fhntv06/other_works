<?php 



$i = 0;
$maxCountNews = 2; // максимальное число статей на странице
?>

<section id="news" class="section section_one">
    <h2>космос будущего</h2>
    <div class="section_news">
        
<?php 
    foreach($news as $new){ 
        if($i <= $maxCountNews){

        
            if( $i == 0 ){
?>
            <div class="section_one-left">
                <div class="section_card">
                    <div class="section_img section_card-one section_card-filter" style="background-image: url(<?= $new[4] ?>);"></div>
                    <div class="card_text">
                    <a href="<?= $new[5] ?>"><h3><?= $new[1] ?></h3></a>
                        <p><?= $new[3] ?></p>
                    </div>
                </div>
            </div>
<?php  
            }
        
            if( $i == 1 ){
?>
            <div class="section_one-right">
                <div class="section_card">
                    <div class="section_img section_card-two section_card-right section_card-filter" style="background-image: url(<?= $new[4] ?>);"></div>
                    <div class="card_text">
                    <a href="<?= $new[5] ?>"><h3><?= $new[1] ?></h3></a>
                        <p><?= $new[3] ?></p>
                    </div>
                </div>
<?php  
            }
            if( $i == 2 ){
?>
                <div class="section_card">
                    <div class="section_img section_card-three section_card-right section_card-filter" style="background-image: url(<?= $new[4] ?>);"></div>
                    <div class="card_text">
                    <a href="<?= $new[5] ?>"><h3><?= $new[1] ?></h3></a>
                        <p><?= $new[3] ?></p>
                    </div>
                </div>
            </div>

<?php  
            }
        }
        $i++;
    }
?>

    </div>
</section>