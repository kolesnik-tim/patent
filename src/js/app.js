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
  //Мобильная менюшка (Затемнение)
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

  // Якорь
  $(document).ready(function() {
    $('.menu').on('click','a', function(event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
    });
  });
  // форма
  $('.btn').on('click', function() {
    $('.slideout-panel').addClass('is-active');
  });

  $('.form__close').on('click', function() {
    $('.slideout-panel').removeClass('is-active');
  });
  // input[typu='file']
  var wrapper = $( '.form__block__file' ),
    inp = wrapper.find( 'input' ),
    lbl = wrapper.find( 'label' ),
    file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;
  inp.change(function() {
    var file_name;
    if( file_api && inp[ 0 ].files[ 0 ] )
      file_name = inp[ 0 ].files[ 0 ].name;
    else
      file_name = inp.val().replace( 'C:\\fakepath\\', '' );

    if( ! file_name.length )
      return;

    if( lbl.is( ':visible' ) ) {
      lbl.text( file_name );
    }
  }).change();



  
});







