'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ProductCard } from './ProductCard';
import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const products = [
  {
    key: 'concentrator5',
    badgeColor: "bg-green-500",
    imagePath: "/img/1.jpg"
  },
  {
    key: 'concentrator8',
    badgeColor: "bg-sky-500",
    imagePath: "/img/2.jpg"
  },
  {
    key: 'concentrator10',
    badgeColor: "bg-cyan-600",
    imagePath: "/img/4.jpg"
  },
  {
    key: 'accessories',
    badgeColor: "bg-emerald-500",
    imagePath: "/img/3.jpg"
  }
];

export function ProductsCarousel() {
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
      spaceBetween={24}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
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
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
      className="products-swiper"
    >
      {products.map((product, idx) => (
        <SwiperSlide key={idx} className="pb-10" >
          <ProductCard
            productKey={product.key}
            badgeColor={product.badgeColor}
            imagePath={product.imagePath}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
