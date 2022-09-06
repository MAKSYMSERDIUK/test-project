$(function(){
  $('.header_burger').click(function(event){
    document.body.classList.toggle('lock')
$('.header_burger, .menu_body_top').toggleClass('active');
  });
});
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android()
      || isMobile.BlackBerry()
      || isMobile.iOS()
      || isMobile.Opera()
      || isMobile.Windows()
    );
  }
};
if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}

var owl = $('.owl-sliders');
$('.custom-owl-prev').click(function () {
  owl.trigger('prev.owl.carousel');
});

$('.custom-owl-next').click(function () {
  owl.trigger('next.owl.carousel');
});

$(".owl-sliders_2").owlCarousel({
  items: 3,
  margin: 30,
  dotsEach: true,
  autoplay: false,
  smartSpeed: 900,
  nav: true,
  rewind: true,
  autoplayHoverPause: true,
  loop: true,
  responsiveClass: true,
  responsive:{
    0:{
        items:1,
        nav:true
    },
    1000:{
        items:2,
        nav:false
    },
    1730:{
        items:3,
        nav:true,
        loop:false
    }
}
});

$(".owl-sliders").owlCarousel({
  items: 1,
  dotsEach: true,
  autoplay: false,
  smartSpeed: 900,
  rewind: true,
  autoplayHoverPause: true,
  loop: true,
  responsiveClass: true,
  


});
$('.owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function (e) {
  if (!e.namespace) {
    return;
  }
  var carousel = e.relatedTarget;
  $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + ' /  ' + carousel.items().length);

})
    $(function () {

      $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });

    });
   
