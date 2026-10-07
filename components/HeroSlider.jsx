"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import { slides, heroCategories, socialLinks } from "@/data/slides";
import Typewriter from "./Typewriter";
import { FaArrowRight } from "react-icons/fa6";

export default function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="tf-slideshow tf-btn-swiper-main">
      <Swiper
        className="tf-swiper sw-slide-show slider_animate"
        modules={[EffectFade, Autoplay, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        autoplay={{ delay: 3000 }}
        speed={800}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="slider-wrap">
              <div className="sld_image img-zoom">
                <img
                  loading="lazy"
                  width={1904}
                  height={1080}
                  src={slide.image}
                  alt="Slider"
                />
              </div>
              <div className="sld_content">
                <div className="container-4">
                  <ul className="cls-list">
                    {heroCategories.map((group, gi) => (
                      <li className="cls-group" key={gi}>
                        {group.map((label) => (
                          <a
                            href="#portfolio"
                            key={label}
                            className="tf-btn style-border btn-hover-animation-fill"
                          >
                            <span>
                              <i className="icon-ArrowRight arr-1" />
                              <span className="btn-text">{label}</span>
                              <FaArrowRight className="arr-2" />
                            </span>
                            <span className="bg-effect" />
                          </a>
                        ))}
                      </li>
                    ))}
                  </ul>
                  <div className="title-sld text_white ani-item ani-item_1">
                    {slide.title}
                  </div>
                  <div className="title-sld_2 text_white type-space-2 fade-item fade-item-1">
                    <Typewriter words={slide.subtitles} /> Developer
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <div className="group-btn-slider">
          <div className="container-4">
            <div className="wrap">
              <div className="tf-nav-sw nav-prev-swiper" ref={prevRef}>
                <i className="icon-ArrowLeft" />
              </div>
              <div className="tf-nav-sw nav-next-swiper" ref={nextRef}>
                <i className="icon-ArrowRight" />
              </div>
            </div>
          </div>
        </div> */}
      </Swiper>

      <ul className="tf-social-icon flex-column">
        {socialLinks.map((s) => (
          <li key={s.className}>
            <a href={s.href} className={s.className}>
              <s.Icon className="icon" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
