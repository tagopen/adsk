(function($) {
  "use strict"; // Start of use strict

  $(document).ready(function(){
    $(".navbar-nav").on("click",".nav__link", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top -$('.navbar').outerHeight()}, 1500);
    });
  });

  // Old browser notification
  $(function() {
    $.reject({
      reject: {
        msie: 9
      },
      imagePath: 'img/icons/jReject/',
      display: [ 'chrome','firefox','safari','opera' ],
      closeCookie: true,
      cookieSettings: {
        expires: 60*60*24*365
      },
      header: 'Ваш браузер устарел!',
      paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
      paragraph2: 'Пожалуйста, установите современный браузер:',
      closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
      closeLink: 'Закрыть это уведомление',
    });
  });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
      
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar--shrink");
        } else {
            $("#mainNav").removeClass("navbar--shrink");
        }
    });

    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

  // Build Btn show all
    $('.build__btn').on('click', function () {
      $('.build__col').removeClass('build__col--hidden');
      $('.build__btn').hide();
    }); 

  // Fancy Box
   $("[data-fancybox]").fancybox({
    // Options will go here
  });

  // Today date
  $(function () {
    Date.prototype.addDays = function(days) {
      this.setDate(this.getDate() + parseInt(days));
      return this;
    };

    Date.prototype.format = function(format) {
      // set default format if function argument not provided
      format = format || 'YYYY-MM-DD hh:mm';

      var zeropad = function(number, length) {
        number = number.toString();
        length = length || 2;
        while(number.length < length)
          number = '0' + number;
        return number;
      },
      // here you can define your formats
      formats = {
        YYYY: this.getFullYear(),
        MM: zeropad(this.getMonth() + 1),
        DD: zeropad(this.getDate()),
        hh: zeropad(this.getHours()),
        mm: zeropad(this.getMinutes())
      },
      pattern = '(' + Object.keys(formats).join(')|(') + ')';

      return format.replace(new RegExp(pattern, 'g'), function(match) {
        return formats[match];
      });
    };

    var currentDate    = new Date(),
        $dates         = $('[data-time]'),
        $currentDate   = $('.date__number');

    $currentDate.text(currentDate.format('DD.MM.YYYY'));

    $dates.each(function() {
      var $this = $(this),
          addDate = $this.data('time');

      currentDate.addDays(addDate);
      $this.text(currentDate.format('DD.MM.YYYY'));
    });
  });

$('.project__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  infinite: true,
  focusOnSelect: true,
  centerMode: true,
  centerPadding: '150px',
  prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>',
  nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></button>',
  responsive: [
  {
    breakpoint: 1600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      infinite: true,
      centerPadding: '150px'
    }
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      infinite: false,
      centerPadding: '100px'
    }
  },
  {
    breakpoint: 960,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      infinite: false,
      centerPadding: '0'
    }
  }
  ]
});


new Vue({
  el: '#example',
  data: {
    slides: 3
  },
  components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  }
})


  if( $( window ).width() >= 992 ) {

    $('.exp__image').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });
  }


})(jQuery); // End of use strict