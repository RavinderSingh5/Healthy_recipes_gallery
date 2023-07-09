import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from './assets/images/Banana Honey Pancakes.jpg';
import slide_image_2 from './assets/images/Biryani.jpg';
import slide_image_3 from './assets/images/Fresh Berry Bowl.jpg';
import slide_image_4 from './assets/images/Garden Fresh Salad.jpg';
import slide_image_5 from './assets/images/Nutty Cranberry Oatmeal.jpg';
import slide_image_6 from './assets/images/Spinach-Stuffed Chicken.jpg';
import slide_image_7 from './assets/images/Avocado Egg delights.jpg';

function App() {
  return (
    <div className="container">
      <h1 className="heading">Healthy Recipes Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        spaceBetween={60}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
          <div className="slide-name">Banana Honey Pancakes</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
          <div className="slide-name">Biryani</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
          <div className="slide-name">Fresh Berry Bowl</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
          <div className="slide-name">Garden Fresh Salad</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
          <div className="slide-name">Nutty Cranberry Oatmeal</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
          <div className="slide-name">Spinach-Stuffed Chicken</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
          <div className="slide-name">Avocado Egg Delight</div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;



