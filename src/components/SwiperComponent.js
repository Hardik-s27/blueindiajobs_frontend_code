// src/components/SwiperComponent.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import image1 from '../images/dem.jpeg';
import image2 from '../images/demopic.jpg';
import image3 from '../images/site1.png';

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="mySwiper position-absolute w-100 h-100"
      style={{ zIndex: 1 }}
    >
      <SwiperSlide>
        <img src={image1} alt="Nature 1" className="w-100 h-100 object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="Nature 2" className="w-100 h-100 object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} alt="Nature 3" className="w-100 h-100 object-cover" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
