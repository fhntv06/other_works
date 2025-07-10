	
	$(window).scroll( function Button(){
		var scroll = $(this).scrollTop()

		if(scroll > 500){
			 $(".up").show();	
		}else{
			 $(".up").hide();
		}

		if(scroll > 1500){
			$(".aside").show();
			
		}else{
			 $(".aside").hide();
		}

		if(scroll > 1800){
			$(".bigA").show();
			
		}else{
			$(".bigA").hide();
		}
	});

