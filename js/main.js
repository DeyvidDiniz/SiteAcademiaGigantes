$('.fotos').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  customPaging : function(slider, i) {
    var title = $(slider.$slides[i]).data('title');
    return '<a class="pager__item " style="color:rgba(75, 75, 75, 0.3);" > ● </a>';
  },
  //customPaging : function(slider, i) {
   //  return '<a href="#"><img src="dot3.png" /></a>';
//},

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});