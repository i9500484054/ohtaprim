$(function () {

	let bodyWidth = $('body').width() // Значение ширины экрана

	$("head").append('<link rel="stylesheet" href="css/main-test.css"/>')

	$('.header__navigation a').on('click', function (event) {
		event.preventDefault();// ????

		let sectionId = $(this).attr('href') // id активной секции 

		// анимированное сворачивание хедера 
		if (bodyWidth >= 1024) {
			$('.header').animate({
				width: "30%"
			}, 1000)
		} else if (bodyWidth >= 768) {
			$('.header').animate({
				height: "180px"
			}, 1000);			
			$('.header__wrapper').animate({
				height: "180px"
			}, 1000);			
			$('.header__navigation').animate({
				bottom: "0",
				left: "0",
				width: "100%"
			}, 1000).css('position', 'absolute')
		} else {
			$('.header').animate({
				height: "150px"
			}, 1000);			
			$('.header__wrapper').animate({
				height: "150px"
			}, 1000);			
			$('.header__navigation').animate({
				bottom: "5px",
				left: "0",
				width: "100%"
			}, 1000).css('position', 'absolute')
		}




		// анимированное сворачивание хедера 
		// if (bodyWidth >= 768) {
		// 	$('.header').animate({
		// 		width: "30%"
		// 	}, 1000).css({
		// 		height: "100vh"
		// 	})
		// } else {
		// 	$('.main-conteiner__navigation-services').hide()
		// 	$('.header').animate({
		// 		height: "200px"
		// 	}, 1000)
			
		// 	$('.main-conteiner__logo').css({
		// 		"width": "100px",
		// 		"height": "100px",
		// 		"margin-top": "10px"
		// 	});
		// 	$('.header__navigation').animate({
		// 		bottom: "5px",
		// 		left: "0",
		// 		width: "100%"
		// 	}).css({
		// 		"position": "absolute",
		// 	});

		// 	$('.main').css({
		// 		"padding-top": "200px"
		// 	});
		// }

		// Читска body от ранее открытых секций 
		hideContentSection(); 
		// Добавления активной секции
		addContentSection(sectionId);
		// Удаляем стили анимации
		setTimeout(removeStyle, 2000)
		setTimeout(removeLink, 100)

	});
	
	// Читска body от ранее открытых секций 
	function hideContentSection() {
		$('#main section').css('display', 'none')
	};
	// Добавления активной секции
	function addContentSection(block) {
		$(block).css('display', 'block')
	};
	function removeStyle() {
		$('.header').attr('style', '');
		$('.header__wrapper').attr('style', '');
		$('.header__navigation').attr('style', '');
	};
	function removeLink() {
		$("link[href='css/main-test.css']").remove()
	}
});


// Настраиваем слайдер SWIBER

const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 20,
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
    // breakpoints: {
    //     1024: {
    //         slidesPerView: 2,
    //     },
    // }
});