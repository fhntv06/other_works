
// код для галлереи

window.addEventListener("load", () => {
	var carousels = document.querySelectorAll(".carousel-3d");
	for (var i = 0; i < carousels.length; i++) {
		carousel(carousels[i]);
	}
});

function carousel(root) {
	var figure = root.querySelector("figure"),
    images = figure.children,
	nav = root.querySelectorAll("nav");
    n = images.length,
    gap = root.dataset.gap || 0,
    bfc = "bfc" in root.dataset,
    theta = 2 * Math.PI / n,
    currImage = 0;
	setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	window.addEventListener("resize", () => {
		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	});
	setupNavigation();
	function setupCarousel(n, s) {
		var apothem = s / (2 * Math.tan(Math.PI / n));
		figure.style.transformOrigin = `50% 50% ${-apothem}px`;
		for (var i = 0; i < n; i++) images[i].style.padding = `0 ${gap}px`;
		for (i = 0; i < n; i++) {
			images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
			images[i].style.transform = `rotateY(${i * theta}rad)`;
		}
		if (bfc)
		for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
		rotateCarousel(currImage);
	}
	function setupNavigation() {
		function onClick(e) {
			e.stopPropagation();
			var t = e.target;
			if (t.tagName.toUpperCase() != "BUTTON") return;
			if (t.classList.contains("next")) {
				currImage++;
				} else {
				currImage--;
			}
			rotateCarousel(currImage);
		}

		for(let i = 0; i < nav.length; i++){

			nav[i].addEventListener("click", onClick, true);

		}
		
	}
	function rotateCarousel(imageIndex) {
		figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
		
	}

	// // автоматическое вращение
	let cur;
	function showcur() {
		cur = setInterval(function() {
			currImage++;
			rotateCarousel(currImage);
		}, 15000);
	}
	function clearcur() {
		clearInterval(cur);
	}
	root.onmouseover  = function() {
		clearcur();
	}  
	root.onmouseout  = function() {
		showcur();
	}     
	showcur();

}



// // Для fancybox
// $('[data-fancybox="gallery"]').fancybox({
//     loop: true, // Включает бесконечную навигацию по галерее.
// 	arrows: true, // Показывает навигационные стрелки по краям экрана (для галереи)
// 	infobar: true, // Показывает счетчик изображений в верхнем левом углу (для галереи)
// 	smallBtn: false, // Маленькая кнопка закрытия модального окна
// 	protect: true, // Отключает правую кнопку мыши и использует простую защиту изображений
// 	modal: true, // Делает контент "модальным" - отключает навигацию по клавиатуре, кнопки закрытия и т. д
// 	animationEffect: "zoom-in-out", // Анимационный эффект открытия и закрытия окон
// 	animationDuration: 500, // Продолжительность эффекта анимации
// 	transitionDuration: 700, // Продолжительность эффекта перехода между слайдами
// 	transitionEffect: "slide", // Эффект перехода между слайдами
// 	touch: {
// 		vertical: true,
// 		momentum: true
// 	 } // vertical - разрешает перетаскивание содержимого по вертикали, momentum - продолжает движение после освобождения мыши / касания

// });