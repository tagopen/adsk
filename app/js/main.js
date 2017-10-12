(function($) {
  "use strict"; // Start of use strict

  $(document).ready(function(){
    $(".navbar-nav").on("click",".nav__link", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - $('.navbar').outerHeight() +1}, 1500);
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

  var firstModalOpen = $("body").hasClass("modal-open");

  $("#modal__confident").on('hidden.bs.modal', function()
  {
    if (!firstModalOpen)
      $("body").addClass("modal-open");
  });

    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

  // Build Btn show all
  $('.build__btn').on('click', function () {
    $('.build__col').removeClass('build__col--hidden');
    $('.build__btn').hide();
  }); 

  // Masked phone
  $(function($){
    $(".form__input--phone").mask("+38 (999) 999-99-99");
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
});

 
  $('.slider__fancybox').fancybox({
    loop : false,
    fullScreen : {
      autoStart : false,
    },
    thumbs : {
      autoStart : true,
      showOnStart : true
    },
    margin : [ 44, 0, 90, 0 ]
  });

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

    $('.partner__image').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });

  }


  $('.partner__slider').slick({
    slidesToShow: 3,
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
          slidesToShow: 3,
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
  /*$(function () {
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
  });*/

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
          scrollHeight = qualityHeight + 2 * qualityIconHeight + windowHeight,
          scrollWidth = 3 * qualityIconWidth + qualityWidth,
          carPosLeft = 0,
          carPosBottom = 0;

      $('.quality__icon').addClass('quality__icon--rotate');

      clearTimeout($.data(this, 'scrollTimer'));
      $.data(this, 'scrollTimer', setTimeout(function() {
        $('.quality__icon').removeClass('quality__icon--rotate');
      }, 50));

      if (windowScrollTop > windowScrollTopPrev) {
        $qualityIcon.removeClass('quality__box--right');
      } else {
        $qualityIcon.addClass('quality__box--right');
      }

      if ((windowScrollTop > (qualityTop - windowHeight - qualityIconHeight)) && 
          (windowScrollTop < (qualityTop + qualityHeight + windowHeight - qualityIconHeight))) {
        carPosLeft = (windowScrollTop + windowHeight - qualityTop) * scrollWidth / scrollHeight;
        carPosBottom = (windowScrollTop + windowHeight - qualityTop) * (windowHeight - navbarHeight) / scrollHeight ;
        $qualityIcon.css({"margin-left":  + carPosLeft + 'px'});
        $qualityIcon.css({"margin-bottom":  + carPosBottom + 'px'});
      } else {
        if (windowScrollTop > windowScrollTopPrev) {
          $qualityIcon.css({"margin-left": qualityIconWidth + qualityWidth});
        } else {
          $qualityIcon.css({"margin-left": "0"});
        }
      }

      windowScrollTopPrev = windowScrollTop;
    });
  });
  if ($(".js-example-basic-hide-search").length) {
    $(".js-example-basic-hide-search").select2({
      minimumResultsForSearch: Infinity,
      dropdownCssClass: "drop"
    });
  }

  $(function() {
    $(".js-fancybox").on('click', function() {
      $(this).closest('.slider__thumb').siblings('.slider__link').eq(0).click();
    });
  });

  $(function() {
    $("[data-tabs-control]").on('click', function(e) {
      var control = $(this).data('tabs-control'),
          target = $(this).data('tabs-toggle'),
          $tabs = $("[data-tabs=" + target + "]");

      $tabs.each(function() {
        var  $item = $(this).find('.tabs__item'),
             $currentItem = $item.filter('.tabs__item--active').closest('.tabs__item'),
             activeItem = $currentItem.index(),
             $progressbar = $('#progressbar-1'),
             $progressbarStatus = $progressbar.find('.progressbar__status'),
             $progressbarNumber = $progressbar.find('.progressbar__value'),
             progressValue = 0;

        // Tabs control button
        if (control === 'prev') {
          activeItem = activeItem - 1;
        } else if (control === 'next') {
          activeItem = activeItem + 1;
        }

        progressValue = (~~(100 / ($item.length - 2) * (activeItem))) + "%";

        $progressbarStatus.css({
          width: progressValue
        });

        $item.removeClass('tabs__item--active').eq(activeItem).addClass('tabs__item--active');

        if ($item.length - 1 <= activeItem)  {
          $progressbar.slideUp('10');
        }
        

        $progressbarNumber.html(progressValue);
      });
    e.preventDefault();
    });
  });

  $(function() {
    $('[data-dependence]').on('change, click', function() {
      var $input = $(this),
      target = $input.data('dependence'),
      $checkboxes = $('[data-slave=' + target + ']'),
      hiddenClass = 'hidden-md-up hidden-md-down';

      $('[data-slave]').closest('.radio__box').addClass(hiddenClass);

      var $group = $checkboxes.closest('.radio__box');
      $group.removeClass(hiddenClass);
    });
    $('[data-dependence]:checked').triggerHandler('click');
  });

  // range nouislider
  $(function() {
    var ranges = ["control-range1","control-range2","control-range3","control-range4","control-range5","control-range6","control-range7","control-range8","control-range9"],
        options = {
          start: 150,
          step: 10,
          tooltips: wNumb({ decimals: 0, suffix: 'м²' }),
          range: {
            'min': 10,
            'max': 1000
          },
          pips: {
            mode: 'values',
            values: [10, 1000],
            density: -1,
            format: wNumb({ decimals: 0, suffix: 'м²' })
          }
        },
        options6 = {
          start: 3,
          step: 1,
          tooltips: wNumb({ decimals: 0, suffix: 'м' }),
          range: {
            'min': 1,
            'max': 10
          },
          pips: {
            mode: 'values',
            values: [1, 10],
            density: -1,
            format: wNumb({ decimals: 0, suffix: 'м' })
          }
        };

    for (var i = 0; i < ranges.length; i++) {

      var range = document.getElementById(ranges[i]);
      var target = $(range).data('slides');
      $("#" + target).hide();
      if (i == 5) {
        noUiSlider.create(range, options6);
      } else { 
        noUiSlider.create(range, options);
      }

      range.noUiSlider.on('update', function( values, handle ) {
        var value = values[handle],
            target = range.getAttribute('data-slides');

        $("#" + target).val(value);
      });
    }


  });
  
})(jQuery); // End of use strict
