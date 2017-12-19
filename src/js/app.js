$(function() {


// Слайдер
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
  	}
  });



  //Мобильная менюшка
  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70,
  });


  function close(eve) {
    eve.preventDefault();
    slideout.close();
  }
  $('.menu-close').on('click', function() {
    slideout.close();
  });
  slideout
    .on('beforeopen', function() {
      this.panel.classList.add('panel-open');
    })
    .on('open', function() {
      this.panel.addEventListener('click', close);
    })
    .on('beforeclose', function() {
      this.panel.classList.remove('panel-open');
      this.panel.removeEventListener('click', close);
    });





  
});







