
	const panel = document.querySelector(".panel");
	const main = document.querySelector(".main");
	const body = document.querySelector(".body");
	const footer = document.querySelector(".footer");
	function display(){
		panel.style.display = "flex";
		main.style.display = "none";
		footer.style.display = "none";
		panel.classList.add('animated', 'fadeIn');
		
	}

	function exitPanel(){
		panel.style.display = "none";
		main.style.display = "flex";
		main.classList.add('animated', 'fadeIn');
		footer.style.display = "flex";
	}

