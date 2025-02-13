import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

export default function Slider({ hrefs }: { hrefs: string[] }) {
  return (
    <section className="relative w-full max-w-lg mx-auto">
      <Swiper
        effect="cards"
        grabCursor
        modules={[EffectCards]}
        className="mySwiper"
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {hrefs.map(href => (
          <SwiperSlide key={href}>
            <img src={href} className="w-full h-auto rounded-lg" key={href} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
