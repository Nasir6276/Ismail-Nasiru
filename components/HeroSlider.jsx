"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { slides, heroCategories, socialLinks } from "@/data/slides";
import Typewriter from "./Typewriter";
import { FaArrowRight } from "react-icons/fa6";

export default function HeroSlider() {
  // Loop needs more slides than are visible at once.
  // With fade effect, 3+ slides is the safe minimum.
  const canLoop = slides.length > 2;

  return (
    <div className="tf-slideshow tf-btn-swiper-main">
      <Swiper
        className="tf-swiper sw-slide-show slider_animate"
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={canLoop}
        autoplay={canLoop ? { delay: 3000 } : false}
        speed={800}
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
