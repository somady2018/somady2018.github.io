---
layout: page
---
<!-- |이 코드는 Swiper 라이브러리를 사용하여 이미지 갤러리를 만드는 코드입니다.
|
|주석작성
|md 파일도 html 그대로 확장자만 바꿔서 인식이 가능함. 
|단, html 파일의 경우  assets 폴더 내에 있고, md 파일은 바깥에 있기 때문에
|각 사진 및 css, js 를 불러오는 확장자를 인식할 때에 슬러쉬 /assets/ 를 한번 더 넣어줘야함. 
|슬러쉬를 앞에도 빼먹을 경우 안되서 앞에도 꼭 넣어줘야함 
| -->

<html lang="ko">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
 도영이가 지어낸 첫번째 이야기, 욕심쟁이 동글이공 을 소개합니다.! <br>
  </head>

  <!-- 폰트어썸 불러오기 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.8.4/swiper-bundle.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.8.4/swiper-bundle.min.js"></script>

    <div class="section-1 con-min-width">
      <div class="con">
        <div class="my-slider-box-1">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="my-slider-box-1__prod-name">욕심쟁이 동글이공</div>
                <img src="/assets/gallery/1.png" alt="">
              </div>
              <div class="swiper-slide">
                <div class="my-slider-box-1__prod-name">1</div>
                <img src="/assets/gallery/2.png" alt="">
              </div>
              <div class="swiper-slide">
                <div class="my-slider-box-1__prod-name">2</div>
                <img src="/assets/gallery/3.png" alt="">
              </div>
              <div class="swiper-slide">
                <div class="my-slider-box-1__prod-name">3</div>
                <img src="/assets/gallery/4.png" alt="">
              </div>
              <div class="swiper-slide">
                <div class="my-slider-box-1__prod-name">4</div>
                <img src="/assets/gallery/5.png" alt="">
              </div>
              <div class="swiper-slide">
                <div class="my-slider-box-1__prod-name">5</div>
                <img src="/assets/gallery/6.png" alt="">
              </div>
              <div class="swiper-slide">
                <div class="my-slider-box-1__prod-name">6</div>
                <img src="/assets/gallery/7.png" alt="">
              </div>
              <div class="swiper-slide">
                <div class="my-slider-box-1__prod-name">7</div>
                <img src="/assets/gallery/8.png" alt="">
              </div>
            </div>
          </div>
          
          <div class="swiper-pagination"></div>

          <div class="my-slider-box-1__nav">
            <!-- Add Arrows -->
            <div class="my-slider-box-1__btn-left"><i class="fas fa-caret-left"></i></div>
            <div class="my-slider-box-1__btn-right"><i class="fas fa-caret-right"></i></div>
          </div>
        </div>
      </div>
    </div>
    <link rel="stylesheet" href="/assets/css/slide gallery.css" />
    <script src="/assets/js/slide gallery.js"></script>

</html>