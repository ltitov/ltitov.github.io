$(function () {

  $(document).ready(function () {
    $("#header__menu, #about__content").on("click", "a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор бока с атрибута href
      var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top - 160;

      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({
        scrollTop: top
      }, 1500);
    });
  });


  var swiper = new Swiper('.slider__work-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: '.slider__work-pagination',
      clickable: true,
    },
  });

  var newSwiper = new Swiper('.services-slider__container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.services-slider__pagination',
      clickable: true,
    },
  });



});