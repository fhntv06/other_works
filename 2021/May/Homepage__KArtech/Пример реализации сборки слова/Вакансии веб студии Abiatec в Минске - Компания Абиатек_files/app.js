$(document).foundation();

$(window).on('load', function(){
	if($('#collective').find('img').attr('src') != ''){
		
	} else {
		$('#collective').remove();
	}
})

$(window).on("load",function(){
	$(".scrool__content").mCustomScrollbar();
});


$(window).on('load', function(){
	if($('.grid-item').length){
		$('.grid-item').each(function(){
			var text = $(this).find('.grid-text');
			if($(text).text() == ''){
				$(text).remove();
			}
		})
	}
})

$(window).scroll(function(){
    if($(window).scrollTop()>300){
        $('.go-top').css('display', 'flex');
    } else {
        $('.go-top').css('display', 'none');
    }
})

$(document).ready(function() {
	if ($('.portfolio-carousel').length) {
		$('.portfolio-carousel').owlCarousel({
			animateOut: 'fadeOut',
	    	animateIn: 'fadeIn',
		    loop:true,
		    margin:0,
		    nav:false,
		    dots: false,
		    mouseDrag: false,
		    touchDrag: false,
		    pullDrag: false,
		    autoplay: true,
		    autoplayTimeout: 4000,
		    items:1
		});

		$('.portfolio-carousel').on('changed.owl.carousel', function() {
			var color = $(this).find('.owl-item.active').next('.owl-item').find('.portfolio-carousel-title').data('white');
			if(color == true){
				$('#header').addClass('header-white');
			} else {
				$('#header').removeClass('header-white');
			}
		})
	}

    if ($('.post-last-title').length) {
    	$('.post-last-title').each(function() {
	        var title = $(this).height(); // высота заголовка 
	            textSelect = $(this).siblings('.post-last-text'); //выбираем эл-нт
	            textBlock = $(textSelect).text(); //берём текст элемента
	            text = textBlock; 

	        text = text.substr(0, 240);
	        $(textSelect).html( text);
	    });
    }

    if ($('.portfolio-carousel-title').length) {
    	$('.portfolio-carousel-title').each(function() {
	        var title = $(this).height(); // высота заголовка 
	            textSelect = $(this).siblings('.portfolio-carousel-text'); //выбираем эл-нт
	            textBlock = $(textSelect).text(); //берём текст элемента
	            text = textBlock; 

	        text = text.substr(0, 240);
	        $(textSelect).html( text);
	    });
    }

    if ($('.post-title').length) {
    	$('.post-title').each(function() {
	        var title = $(this).height(); // высота заголовка 
	            textSelect = $(this).siblings('.post-text'); //выбираем эл-нт
	            textBlock = $(textSelect).text(); //берём текст элемента
	            text = textBlock; 

	        text = text.substr(0, 420);
	        $(textSelect).html( text + '...');
	    });
    }

	if ($('.grid').length) {

		var $grid = $('.grid').masonry({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  columnWidth: '.grid-sizer'
		});

		$grid.imagesLoaded().progress( function() {
		  $grid.masonry();
		});
	};

	if($('.carousel__wordpress').length) {
		$('.carousel__wordpress').owlCarousel({
			loop:false,
			margin:0,
			dots: false,
			items:1,
			navText: ["<img src='/media/services/development/wordpress/wordpress-left.svg'>", "<img src='/media/services/development/wordpress/wordpress-right.svg'>"],
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			responsive:{
				0:{
					nav:false
				},
				640:{
					nav:false
				},
				1640:{
					nav:true
				}
			}
		})
	}
});

$(window).on('load', function(){
	$('.carousel__wordpress .owl-next').on('click', function(){
		var count = $('.carousel__wordpress .owl-item.active').index();
		$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(count - 1).addClass('is-active');
	})

	$('.carousel__wordpress .owl-prev').on('click', function(){
		var count = $('.carousel__wordpress .owl-item.active').index();
		$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(count).removeClass('is-active');
	})

	var owl = $('.carousel__wordpress');
		owl.owlCarousel();

	owl.on('dragged.owl.carousel', function(event) {
		
		var count = $('.carousel__wordpress .owl-item.active').index();
		console.log(count)
		switch (count) {
			case 1:
				$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(0).addClass('is-active');
				$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(1).removeClass('is-active');
				$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(2).removeClass('is-active');
				$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(3).removeClass('is-active');
			  	break;
			case 2:
				$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(0).addClass('is-active');
				$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(1).addClass('is-active');
				$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(2).removeClass('is-active');
				$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(3).removeClass('is-active');
			  	break;
			case 3:
				$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(0).addClass('is-active');
				$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(1).addClass('is-active');
				$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(2).addClass('is-active');
				$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(3).removeClass('is-active');
				break;
			case 4:
				$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(0).addClass('is-active');
				$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(1).addClass('is-active');
				$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(2).addClass('is-active');
				$('.carousel__wordpress__step .carousel__wordpress__step__item').eq(3).addClass('is-active');
				break;
			default:
				$('.carousel__wordpress__step .carousel__wordpress__step__item').removeClass('is-active');
		}
	})
})

$('#filtPro').on('change', function(){
	
	setTimeout(function(){ 
		var $grid = $('.grid').masonry({
			itemSelector: '.grid-item',
			percentPosition: true,
			columnWidth: '.grid-sizer'
		  });
	
		$grid.imagesLoaded().progress( function() {
			$grid.masonry();
		});
	 }, 100);
});

// Scroll top
$(document).ready(function() {
    var previousScroll = 0,
        navBarOrgOffset = $('.go-top').offset().top;
 
    $('#navigation').height($('#navbar').height());
 
    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();

        if (currentScroll > navBarOrgOffset) {
            if (currentScroll > previousScroll) {
                $('.go-top').css('display', 'none');
            } else {
                $('.go-top').css('display', 'flex');
            }
        } else if(currentScroll < 300){
            $('.go-top').css('display', 'none');
        } else {
            $('.go-top').css('display', 'none');
        }
        previousScroll = currentScroll;
    });
 
});

$(window).on('load', function() {

	if ($('.carousel-main').length) {
		$('.carousel-main').owlCarousel({
			animateOut: 'fadeOut',
	    	animateIn: 'fadeIn',
		    loop:true,
		    margin:0,
		    nav:false,
		    dots: false,
		    mouseDrag: false,
		    touchDrag: false,
		    pullDrag: false,
		    autoplay: true,
		    autoplayTimeout: 4000,
		    autoplayHoverPause: true,
		    items:1
		});
	}

	if ($('.clients-carousel').length) {
		$('.clients-carousel').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:false,
		    autoplay: true,
		    autoplayTimeout: 4000,
		    autoplayHoverPause: true,
			responsive:{
		        0:{
					items:1,
					dots: false
		        },
		        640:{
		            items:3,
					dots: false
		        },
		        1280:{
					items:5,
					dots: false
		        }
		    }
		});
	}
});

$(window).on('load', function() {
	$('.how-item').click(function(event) {
		$('.how-item').removeClass('active');
		$(this).addClass('active');
		$('.how-accardion-item').removeClass('active');
	});

	$('.how-item-1').click(function(event) {
		$('.how-accardion-item-1').addClass('active');
	});

	$('.how-item-2').click(function(event) {
		$('.how-accardion-item-2').addClass('active');
	});

	$('.how-item-3').click(function(event) {
		$('.how-accardion-item-3').addClass('active');
	});
	$('.how-item-4').click(function(event) {
		$('.how-accardion-item-4').addClass('active');
	});
	$('.how-item-5').click(function(event) {
		$('.how-accardion-item-5').addClass('active');
	});
	$('.how-item-6').click(function(event) {
		$('.how-accardion-item-6').addClass('active');
	});

	$('.how-mobile-item').click(function(event) {
		$('.how-mobile-item').removeClass('active');
		$(this).addClass('active')
	});

	if ($('.how-content, .rewards').length) {
		// $('.content').css('padding', '2.75rem 0 0 0');
	}
});

/* Calculator */
$(window).on('load', function() { // Ждём загрузки страницы
	var steps = $("form").children(".calculator-step"); // находим все шаги формы
		dots = $("form").children(".calculator-dots-item"); // находим все шаги формы

	$(steps[0]).css('display', 'flex'); // показываем первый шаг
	$(dots[0]).addClass('active'); // показываем первый шаг
	$('.calculator-dots-item').eq(0).addClass('active'); // скрываем ссылку "Назад"

	var current_step = 0; // задаем текущий шаг

	$("a.calculator-next").click(function(){	// Событие клика на ссылку "Следующий шаг"
		if (current_step == steps.length-1) { // проверяем, будет ли следующий шаг последним
			$(this).css('display', 'none'); // скрываем ссылку "Следующий шаг"
		}

		if (current_step == 0) { 
			$("a.calculator-back").css('display', 'flex');
		}

		if (current_step == 1) { 
			$(this).css('display', 'none');
		}

		$('.calculator-dots-item').removeClass('active');
		$('.calculator-dots-item').eq(current_step+1).addClass('active'); 

		current_step++; // увеличиваем счетчик текущего слайда
		changeStep(current_step); // меняем шаг
	});

	$("a.calculator-back").click(function(){	// Событие клика на маленькое изображение
		if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
			$(this).css('display', 'none'); // скрываем ссылку "Назад"
			$('.calculator-dots-item').eq(0).addClass('active'); // скрываем ссылку "Назад"
		}

		if (current_step == 2) { 
			$("a.calculator-next").css('display', 'flex');
		}

		$('.calculator-dots-item').removeClass('active');
		$('.calculator-dots-item').eq(current_step-1).addClass('active');

		current_step--; // уменьшаем счетчик текущего слайда
		changeStep(current_step);// меняем шаг
	});

	$("#go-to-result").click(function(){	// Событие клика на ссылку "Следующий шаг"
		$('.calculator-dots-item').removeClass('active');
		$('.calculator-dots-item').eq(current_step+1).addClass('active'); 

		var current = [];
		$('.calculator .is--price').each(function(index, el) {
			var price = $(this).data('price');
			current.push(price);
		});

		var selectOption = $('#selectType option:selected').data('price');

		current.push(selectOption);

		var total = current.reduce(function(a, b) {
		  return a + b;
		});

		if($('#tz').prop('checked') && $('#design').prop('checked')){
			var total = total * 0.9 * 0.7;
		} else if ($('#tz').prop('checked')){
			var total = total * 0.9;
		} else if ($('#design').prop('checked') ){
			var total = total * 0.7;
		}

		

		$('.total-price').text(total);
	
		current_step++; // увеличиваем счетчик текущего слайда
		changeStep(current_step); // меняем шаг
	});

	$('#go-to-form').click(function(event) {
		$('a.calculator-back').css('display', 'none'); // скрываем ссылку "Следующий шаг"
		$('a.calculator-next').css('display', 'none'); // скрываем ссылку "Следующий шаг"

		current_step++; // увеличиваем счетчик текущего слайда
		changeStep(current_step); // меняем шаг
	});

	$('#go-to-back').click(function(event) {
		current_step--; // уменьшаем счетчик текущего слайда
		changeStep(current_step);// меняем шаг
		$("a.calculator-back").css('display', 'flex');
		$('.calculator-dots-item').removeClass('active');
		$('.calculator-dots-item').eq(current_step-1).addClass('active');
	});
	
	function changeStep(i) { // функция смены шага
		$(steps).css('display', 'none'); // скрываем все шаги
		$(steps[i]).css('display', 'flex'); // показываем текущий

		$(dots).removeClass('active'); // скрываем все шаги
		$(dots[i]).addClass('active'); // показываем текущий
	}

	$('.calculator-btn').click(function(event) {
		$('.overlay').addClass('active');
		$('.calculator-modal').addClass('active');
	});

	$('.calculator .close').click(function(event) {
		$(this).parents('.calculator-modal').removeClass('active');
		$(this).parents('.overlay').removeClass('active');
	});

	$('.modal_btn').click(function(event) {
		$('.overlay').addClass('active');
		$('.modal').addClass('active');
	});

	$('.modal .close').click(function(event) {
		$(this).parents('.modal').removeClass('active');
		$(this).parents('.overlay').removeClass('active');
	});

	function addSpecialization() {
		$('.calculator-checkbox').each(function() {
			var iconSpec = $(this).data('specialization-icon');
				nameSpec = $(this).data('specialization');

			if ($(this).hasClass('active')) {
				$('#flex-left .specialization').append('<div class="calculator-flex-item"><i class="' + iconSpec + '" data-icon></i><div class="calculator-flex-title">' + nameSpec +'</div></div>')
			}
		});
	}

	function addDomain() {
		$('.calculator-tabs-item').each(function() {
			var iconDomain = $(this).data('icon');
				nameDomain = $(this).data('index');

			if ($(this).hasClass('active')) {
				$('#flex-left .specialization').append('<div class="calculator-flex-item domain"><i class="' + iconDomain + '" data-icon></i><div class="calculator-flex-title">' + nameDomain + ' (<span class="calculator-flex-list"></span>)</div></div>')
			}
		});

		$('.checkbox-toggle').each(function() {
			var nameCheck = $(this).children('.checkbox-text').text();
				nameSelect = $('.calculator-tabs-column .jq-selectbox__select-text').text();

			if ($(this).hasClass('active')) {
				$('#flex-left .domain .calculator-flex-list').append(nameSelect + ', ' + nameCheck + ', ')
			}
		});

		var text = $('.calculator-flex-list').text();
		text = text.slice(0, -2);

		$('.calculator-flex-list').text(text);
	}

	function addMore() {
		$('.calculator-switch-switcher.active').each(function() {
			var more = $(this).data('index');

			$('.calculator-flex-items.more').append('<li class="calculator-flex-more-item">' + more +'</li>')
		});
	}

	$('.calculator-checkbox input').click(function(event) {
		$(this).parents('.calculator-checkbox').toggleClass('active');
	});

	$('#go-to-result').click(function(event) {
		$('#flex-left .specialization').empty();
		$('.calculator-flex-items.more').empty();
		addSpecialization();
		addDomain();
		addMore();
	});

	$('.calculator-tabs-item').click(function() {
		$('.calculator-tabs-item').removeClass('active');
		$(this).addClass('active');

		var tab = $(this).data('index');

		$('.calculator-tabs-content').removeClass('active');
		$('.calculator-tabs-content').each(function() {
			if ($(this).data('index') == tab) {
				$(this).addClass('active');
			}
		});

		$('.checkbox-toggle').removeClass('active');
	});

	$('.checkbox-toggle').click(function(event) {
		$(this).toggleClass('active');
	});

	$('.calculator-tabs-area .checkbox-toggle').click(function(event) {
		$(this).toggleClass('is--price');
	});

	$('.calculator-switch input').click(function(event) {
		$(this).next('.calculator-switch-switcher').toggleClass('active');
	});

	$('#selectType').on('change', function(){
		var val = $(this).val();
		$('.checkbox .checkbox-toggle.active').find('input').trigger('click');
		$('.calculator-tabs-area').removeClass('is--active');

		$('.calculator-tabs-area').each(function(){
			var tab = $(this).data('type');

			if(tab == val){
				$(this).addClass('is--active')
			}
		})
	
	})
});

/*Upload File*/
$(document).ready(function() {
    var wrapper = $( ".form-upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( "button" ),
        lbl = wrapper.find( "div" );

    lbl.focus(function(){
        inp.focus()
    });
    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
        }else
            lbl.text( file_name );
    }).change();
});

$(window).on("load",function(){
	$('select').styler();
	if ($('.jq-selectbox ul').length) {
		$('.jq-selectbox ul').mCustomScrollbar();
	}
	
	$('.burger').click(function() {
		$('.menu-burger').addClass('open');
	});

	$('.menu-close i').click(function() {
		$('.menu-burger').removeClass('open');
	});

	$('.search-icon i').click(function() {
		$('.search .form-item').css('width', '200px');
	});

	$('.menu-row-item a').click(function() {
		$(this).toggleClass('active');;
		$(this).next('.menu-accardion').slideToggle('fast')
	});

	$('a[href^="#"]').click(function(){
		var t=$(this).attr("href");
			return $("html, body").animate({scrollTop:$(t).offset().top
		},1250),
	!1})
});

$(document).ready(function(){
	setTimeout(function(){ 
		$('body').removeClass('preload');
		$('.preloader').fadeOut(200);
		if($('.wow').length){
			new WOW().init();
		}
	}, 1000);
})

$(window).on('load', function () {

	step1 = new Vivus('step-1', {type: 'scenario-sync', duration: 10, forceRender: false});
	step2 = new Vivus('step-2', {type: 'scenario-sync', duration: 10, forceRender: false});
	step3 = new Vivus('step-3', {type: 'scenario-sync', duration: 10, forceRender: false});
	step4 = new Vivus('step-4', {type: 'scenario-sync', duration: 10, forceRender: false});
	step5 = new Vivus('step-5', {type: 'scenario-sync', duration: 10, forceRender: false});
	
	$('.functions__item').on('click', function() {
		$('.functions__item').removeClass('is-active');
		$(this).addClass('is-active');

		var numItem = $(this).parents('.functions__item--col').index();
		$('.functions--text').children('.functions__item--text').removeClass('is-active');
		$('.functions--text').children('.functions__item--text').eq(numItem).addClass('is-active')
	})

	$('.tab__titles__item').on('click', function(){
		$('.tab__titles__item').removeClass('is-active');
		$(this).addClass('is-active')

		var idx = $(this).index();
			arrIdx = idx + 1;
		$('.tab__area').children('.tab__area__item').removeClass('is-active');
		$('.tab__area').children('.tab__area__item').eq(idx).addClass('is-active');
		
	})

	if($('#step-1').length){
		$('.content').addClass('commerce-post')
	}
});
