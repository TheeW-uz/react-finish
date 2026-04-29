import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import './HomeSlider.css';

import { Navigation } from 'swiper/modules';

export default function HomeSlider() {
  return (
    <div className="homeSlider">
      <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        className="homeSwiper"
        loop={true}
        lazy="true"
      >
        <SwiperSlide>
          <img 
            src="/swiper-home-1.png" 
            alt="Special Offer 1" 
            width="1440" 
            height="350" 
            fetchpriority="high" 
            style={{ objectFit: 'cover', aspectRatio: '1440/350' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/swiper-home-2.png" 
            alt="Special Offer 2" 
            width="1440" 
            height="350" 
            loading="lazy"
            style={{ objectFit: 'cover', aspectRatio: '1440/350' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/swiper-home-3.png" 
            alt="Special Offer 3" 
            width="1440" 
            height="350" 
            loading="lazy"
            style={{ objectFit: 'cover', aspectRatio: '1440/350' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/swiper-home-4.png" 
            alt="Special Offer 4" 
            width="1440" 
            height="350" 
            loading="lazy"
            style={{ objectFit: 'cover', aspectRatio: '1440/350' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/swiper-home-5.png" 
            alt="Special Offer 5" 
            width="1440" 
            height="350" 
            loading="lazy"
            style={{ objectFit: 'cover', aspectRatio: '1440/350' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="/swiper-home-6.png" 
            alt="Special Offer 6" 
            width="1440" 
            height="350" 
            loading="lazy"
            style={{ objectFit: 'cover', aspectRatio: '1440/350' }}
          />
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

