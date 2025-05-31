import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carousal.scss';

const slides = [
  {
    image: 'https://picsum.photos/id/1015/1200/600',
    line1: 'Say goodbye to fast food',
    line2: 'and hello to family-style dinners,',
    line3: 'delivered straight to your door.',
  }
  ,
  {
    image: 'https://picsum.photos/id/1016/1200/600',
    line1: 'Farm to Table',
    line2: 'Fresh ingredients made with love,',
    line3: 'delivered to your doorstep.',
  },
  {
    image: 'https://picsum.photos/id/1018/1200/600',
    line1: 'Home-cooked meals',
    line2: 'crafted by passionate chefs,',
    line3: 'served warm at your home.',
  },
];

const SwiperCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <div className="swiper-container-custom">
      <div className="carousel-bg" />

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        loop={true}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.params.pagination.el = paginationRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
          el: paginationRef.current,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <div className="slide-image">
                <div className="image-wrapper">
                  <img src={slide.image} alt={`Slide ${index + 1}`} />
                </div>
              </div>
              <div className="slide-text">
                <h2 className="line1">{slide.line1}</h2>
                <span className="line2">{slide.line2}</span>
                <h2 className="line3">{slide.line3}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation + Pagination */}
        <div className="swiper-controls-wrapper">
        <div className="swiper-controls-box">
            <div ref={paginationRef} className="swiper-pagination swiper-custom-pagination" />
            <div ref={prevRef} className="swiper-button-prev swiper-custom-prev" />
            <div ref={nextRef} className="swiper-button-next swiper-custom-next" />
        </div>
        </div>

      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
