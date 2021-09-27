// fix Aos scroll
let scrollRef = 0;

window.addEventListener('scroll', function() {
  scrollRef <= 10 ? scrollRef++ : AOS.refresh();
});
// end fix Aos scroll

let draw = document.getElementById('draw')
lottie.loadAnimation({
  container: draw, // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'lapiz.json' // the path to the animation json
});

$(document).ready(function(){

  
  AOS.init();

// start slickider
    $('.one-time').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: false,
              arrows: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true
            }
          }
        ]
      });
// end slickslider




});



