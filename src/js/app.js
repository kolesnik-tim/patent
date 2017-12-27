$(function() {


// Слайдер trust
  var swiper = new Swiper('#container', {
  	slidesPerView: 5,
    slidesPerColumn: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
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
  // Слайдер command
  var swiper = new Swiper('#command', {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: '#next',
      prevEl: '#prev',
    },
    breakpoints: {
      900: {
        slidesPerView: 1,
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





  //Карта
  google.maps.event.addDomListener(window, 'load', init);
        
  function init() {
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(55.739067, 37.586697), // New York
      styles: [{'featureType':'water','elementType':'geometry','stylers':[{'color':'#e9e9e9'},{'lightness':17}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'color':'#f5f5f5'},{'lightness':20}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#ffffff'},{'lightness':17}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#ffffff'},{'lightness':29},{'weight':0.2}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#ffffff'},{'lightness':18}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#ffffff'},{'lightness':16}]},{'featureType':'poi','elementType':'geometry','stylers':[{'color':'#f5f5f5'},{'lightness':21}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#dedede'},{'lightness':21}]},{'elementType':'labels.text.stroke','stylers':[{'visibility':'on'},{'color':'#ffffff'},{'lightness':16}]},{'elementType':'labels.text.fill','stylers':[{'saturation':36},{'color':'#333333'},{'lightness':40}]},{'elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'geometry','stylers':[{'color':'#f2f2f2'},{'lightness':19}]},{'featureType':'administrative','elementType':'geometry.fill','stylers':[{'color':'#fefefe'},{'lightness':20}]},{'featureType':'administrative','elementType':'geometry.stroke','stylers':[{'color':'#fefefe'},{'lightness':17},{'weight':1.2}]}]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    // var marker = new google.maps.Marker({
    //   position: new google.maps.LatLng(55.739067, 37.586697),
    //   map: map,
    //   title: 'Snazzy!'
    // });
    var image = 'img/pin.png';
    var beachMarker = new google.maps.Marker({
      position: ({lat: 55.739067, lng: 37.586697}),
      map: map,
      icon: image
    });
  }




});








