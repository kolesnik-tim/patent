$(function() {



  var swiper = new Swiper('.swiper-container', {
  	slidesPerView: 5,
    slidesPerColumn: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
	    1024: {
	      slidesPerView: 4,
	      spaceBetween: 10
    	},
    	900: {
	      slidesPerView: 3,
	      spaceBetween: 10
    	},
    	767: {
	      slidesPerView: 2,
	      spaceBetween: 34,
	      slidesPerColumn: 2
    	},
  	}
  });









});

