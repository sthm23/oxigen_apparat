'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const products = [
  {
    key: 'concentrator5',
    badgeColor: "bg-green-500",
    images: ["/img/4.jpg", "/img/5.jpg"] // массив картинок
  },
  {
    key: 'concentrator8',
    badgeColor: "bg-sky-500",
    images: ["/img/7.jpg", "/img/2.jpg"]
  },
  {
    key: 'concentrator10',
    badgeColor: "bg-cyan-600",
    images: ["/img/6.jpg", "/img/8.jpg"]
  },
  {
    key: 'accessories',
    badgeColor: "bg-emerald-500",
    images: ["/img/3.jpg"]
  }
];
export function ProductsCarousel() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    productKey: string | null;
    images: string[];
  }>({
    isOpen: false,
    productKey: null,
    images: [],
  });

  useEffect(() => {
    if (swiperInstance) {
      const timer = setTimeout(() => {
        swiperInstance.update();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [swiperInstance]);

  const openModal = (productKey: string, images: string[]) => {
    setModalState({ isOpen: true, productKey, images });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, productKey: null, images: [] });
  };

  return (
    <>
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
          <SwiperSlide key={idx} className="pb-10">
            <ProductCard
              productKey={product.key}
              badgeColor={product.badgeColor}
              images={product.images}
              onOpenModal={openModal}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {modalState.productKey && modalState.images && (
        <ProductModal
          productKey={modalState.productKey}
          images={modalState.images}
          isOpen={modalState.isOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
}
