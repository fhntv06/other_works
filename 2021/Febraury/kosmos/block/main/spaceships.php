<?php 




$countShips = 1;
$maxCountShips = 3; // максимальное число статей на странице
?>


<section id="space__ships" class="section section__two">
    <h2>Космические аппараты</h2>
    <div class="section_two">
        <ul class="section_list">

        <?php 
        
        foreach($spaceships as $spaceship){
            if($countShips <= $maxCountShips){

        ?>
            <li class="list_item" style="background-image: url( <?= $spaceship[3] ?> );">
                <div class="item_text">
                    <a href="#1"><h3><?= $spaceship[1] ?></h3></a>
                    <p><?= $spaceship[2] ?></p>
                </div>
            </li>
           
        <?php  
            }
            $countShips++;
        } 

        ?>

        </ul>
    </div>
</section>