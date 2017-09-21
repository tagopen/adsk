(function($) {
  "use strict"; // Start of use strict

  $(document).ready(function(){
    $(".navbar-nav").on("click",".nav__link", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top -$('.navbar').outerHeight() +1}, 1500);
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


/*$('[data-fancybox="images"]').fancybox({
  thumbs : {
    autoStart : true
  }
})*/
$(document).ready(function() {
  $('.fancybox').fancybox();
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

$('.worth__size').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });

  if( $( window ).width() >= 992 ) {

    $('.exp__image').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });
  }


  $('.partner__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          infinite: false
        }
      }
    ]
  });

  // worth img switch
  $(function () {
    var $items = $('.worth__radio-input'),
        $images = $('.worth__img'),
        $info   = $('.worth__info');
    
    $items.on('click, change', function() {
      var $this = $(this),
          activeNum = '';

      $items.each(function() {
        if ($(this).prop('checked')) {
          activeNum += '1';
        } else {
          activeNum += '0';
        }
      });

      if ($images.filter($('[data-switch=' + activeNum + ']')).length) {
        $images
          .removeClass('worth__img--active')
          .filter($('[data-switch=' + activeNum + ']'))
          .addClass('worth__img--active');
        $info
          .removeClass('worth__info--active')
          .filter($('[data-switch=' + activeNum + ']'))
          .addClass('worth__info--active');
      }
      
    });
  });

  // ThubmbNail
  $(function () {
    $('.slider__preview').on('click', function(e) {
      var $this = $(this),
          $parent = $this.closest('.slider__image'),
          bigImageSrc = $this.data('thumbnail'),
          bigImageAlt = $this.data('thumbnail-alt'),
          $bigImage = $parent.find('.slider__img--big'),
          $controls = $parent.find('.slider__preview');
      
      $controls
        .removeClass('slider__preview--active')
        .filter($this)
        .addClass('slider__preview--active');

      $bigImage.attr('src', bigImageSrc);
      $bigImage.attr('alt', bigImageAlt);

      e.preventDefault();
    });
  });

  // sroll animate car
  $(function () {
    var windowScrollTopPrev = 0;
    $(document).on('scroll', function() {
      var windowHeight = $(window).height(),
          windowScrollTop = $(window).scrollTop(),
          navbarHeight = $('.navbar').height(),
          qualityTop = $('.quality').offset().top,
          qualityWidth = $('.quality').width(),
          qualityHeight = $('.quality').height(),
          $qualityIcon = $('.quality__box'),
          qualityIconHeight = $qualityIcon.height(),
          qualityIconWidth = $qualityIcon.width(),
          scrollHeight = qualityHeight + 2 * qualityIconHeight,
          scrollWidth = 2 * qualityIconWidth + qualityWidth,
          carPosTop = 0,
          carPosLeft = 0;

      if (windowScrollTop > windowScrollTopPrev) {
        $qualityIcon.removeClass('quality__box--right');
      } else {
        $qualityIcon.addClass('quality__box--right');
      }

      if ((windowScrollTop > (qualityTop - windowHeight - qualityIconHeight)) && (windowScrollTop < (qualityTop + qualityHeight + qualityIconHeight))) {
        carPosLeft = (windowScrollTop - (qualityTop - qualityIconHeight)) *  scrollWidth / scrollHeight;
        $qualityIcon.css({transform: 'translateX(' + carPosLeft + 'px)'});
        console.log((windowScrollTop - (qualityTop - windowHeight)), scrollWidth, scrollHeight, scrollWidth / scrollHeight);
      }

      windowScrollTopPrev = windowScrollTop;
    });
  });

  $(".js-example-basic-hide-search").select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: "drop"
  });

})(jQuery); // End of use strict