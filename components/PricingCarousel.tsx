'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { PricingCard } from './PricingCard';
import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const concentrators = ['concentrator5', 'concentrator8', 'concentrator10'];

export function PricingCarousel() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (swiperInstance) {
      const timer = setTimeout(() => {
        swiperInstance.update();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [swiperInstance]);

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={32}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      observer={true}
      observeParents={true}
      watchSlidesProgress={true}
      onSwiper={setSwiperInstance}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 28,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      }}
      className="pricing-swiper"
    >
      {concentrators.map((concentratorKey, idx) => (
        <SwiperSlide key={idx} className="pb-10">
          <PricingCard concentratorKey={concentratorKey} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
