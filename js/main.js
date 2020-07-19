  $(function () {

    $('.slider-top').slick({
      asNavFor: '.slider-bottom',
      prevArrow: '<button class="slick-arrow slick-prev"><img src="./images/_slider/prev-arrow.png" alt=""></button>',
      nextArrow: '<button class="slick-arrow slick-next"><img src="./images/_slider/next-arrow.png" alt=""></button>',
      responsive: [{
        breakpoint: 991,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3500,
          dots: true
        }
      }, ]
    });

    $('.slider-bottom').slick({
      arrow: false,
      slidesToShow: 6,
      slidesToScroll: 6,
      asNavFor: '.slider-top',
      focusOnSelect: true,
      variableWidth: true,

    });

    $('.nav__burger').on('click', function () {
      $('.nav__list').slideToggle();
    });



  });