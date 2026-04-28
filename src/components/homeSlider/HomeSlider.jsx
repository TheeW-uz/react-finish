import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperImg1 from '../../../public/swiper-home-1.png'
import SwiperImg2 from '../../../public/swiper-home-2.png'
import SwiperImg3 from '../../../public/swiper-home-3.png'
import SwiperImg4 from '../../../public/swiper-home-4.png'
import SwiperImg5 from '../../../public/swiper-home-5.png'
import SwiperImg6 from '../../../public/swiper-home-6.png'

import 'swiper/css';
import 'swiper/css/navigation';
import './HomeSlider.css';

import { Navigation } from 'swiper/modules';

export default function HomeSlider() {
  return (
    <div className="homeSlider">
      <Swiper navigation={true} modules={[Navigation]} className="homeSwiper">
        <SwiperSlide><img src={SwiperImg2} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src={SwiperImg3} alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src={SwiperImg4} alt="Slide 4" /></SwiperSlide>
        <SwiperSlide><img src={SwiperImg5} alt="Slide 5" /></SwiperSlide>
        <SwiperSlide><img src={SwiperImg6} alt="Slide 6" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
