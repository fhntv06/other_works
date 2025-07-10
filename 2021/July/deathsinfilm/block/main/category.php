
<?php // вывод категорий на главную ?>

<section class="category">

    <h3>По жанрам:</h3>

    <nav class="category__nav">
        <ul class="category__nav_list">

        <?php 
        
        foreach($rubrics as $cardRubric){

        ?>

            <li class="category__list__item"><p><a href="<?= $cardRubric[1] ?>"><?= $cardRubric[0] ?></a></p></li>

        <?php 
        
        }

        ?>

        </ul>
    </nav>
</section>

