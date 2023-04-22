function MySliderBox1__init() {
  var swiper = new Swiper('.my-slider-box-1 .swiper-container', {
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".my-slider-box-1 .swiper-pagination",
      clickable:true,
      renderBullet: function (index, className) {
        let img = "";

        if ( index == 0 ) {
          img = '<img src="/assets/gallery/meat1.png">';
        }
        else if ( index == 1 ) {
          img = '<img src="/assets/gallery/meat2.jpg">';
        }
        else if ( index == 2 ) {
          img = '<img src="/assets/gallery/meat3.PNG">';
        }
        else if ( index == 3 ) {
          img = '<img src="/assets/gallery/meat4.png">';
        }
        else if ( index == 4 ) {
          img = '<img src="/assets/gallery/meat5.jpg">';
        }
        else if ( index == 5 ) {
          img = '<img src="/assets/gallery/meat6.jpg">';
        }
        else if ( index == 6 ) {
          img = '<img src="/assets/gallery/meat7.png">';
        }
        else if ( index == 7 ) {
          img = '<img src="/assets/gallery/meat8.png">';
        }
        else if ( index == 8 ) {
          img = '<img src="/assets/gallery/meat9.jpg">';
        }

        const bullet = '<span class="' + className + '">' + img + '</span>';

        return bullet;
      },
    },
    slidesPerView:1,
    spaceBetween:0,
    loop: false,
    navigation: {
      nextEl: '.my-slider-box-1 .my-slider-box-1__btn-right',
      prevEl: '.my-slider-box-1 .my-slider-box-1__btn-left',
    },
  });
}

MySliderBox1__init();

function MySliderBox2__init() {
  var swiper = new Swiper('.my-slider-box-2 .swiper-container');
}

MySliderBox2__init();

