import React from 'react';
import { useTranslation } from 'react-i18next';
import Cat from '../../assets/media/video/Cat-slide.webm';
import Dog from '../../assets/media/video/Dog-slide.webm';
import Bird from '../../assets/media/video/Bird-slide.webm';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import '../../../node_modules/swiper/swiper-bundle.min.js';

import { EffectFade, Navigation } from 'swiper/modules';


const HeroSection = () => {
  const { t } = useTranslation();

  return (

    <section className='hero-section'>
     <Swiper spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
      <div className='container-fluid slider-container'>
        <div className="  slider">
          <div className="slider-content">
            <div className="left">
              <span>{t('home.hero.spanOne')}</span>
              <h3>{t('home.hero.descOne')}</h3>
            </div>
            <div className="right">
              <p>{t('home.hero.p')}</p>
              <Link to='/shop' className='btn'>{t('home.hero.btn')}</Link>
            </div>
          </div>
          <h2>{t("home.hero.cat")} <span>{t("home.hero.foods")}  </span></h2>
          <video src={Cat} autoPlay loop muted playsInline></video>
        </div>
      </div>
        </SwiperSlide>

        <SwiperSlide>
      <div className='container-fluid slider-container'>
        <div className="  slider">
          <div className="slider-content">
            <div className="left">
              <span>{t('home.hero.spanTwo')}</span>
              <h3>{t('home.hero.descTwo')}</h3>
            </div>
            <div className="right">
              <p>{t('home.hero.p')}</p>
              <Link to='/shop' className='btn'>{t('home.hero.btn')}</Link>
            </div>
          </div>
          <h2>{t("home.hero.dog")} <span>{t("home.hero.foods")}  </span></h2>
          <video src={Dog} autoPlay loop muted playsInline></video>
        </div>
      </div>
        </SwiperSlide>

        <SwiperSlide>
      <div className='container-fluid slider-container'>
        <div className="  slider">
          <div className="slider-content">
            <div className="left">
              <span>{t('home.hero.spanThree')}</span>
              <h3>{t('home.hero.descThree')}</h3>
            </div>
            <div className="right">
              <p>{t('home.hero.p')}</p>
              <Link to='/shop' className='btn'>{t('home.hero.btn')}</Link>
            </div>
          </div>
          <h2>{t("home.hero.bird")} <span>{t("home.hero.foods")}  </span></h2>
          <video src={Bird} autoPlay loop muted playsInline></video>
        </div>
      </div>
        </SwiperSlide>
     </Swiper>
     <div className="svg-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1920 250"
        style={{ enableBackground: 'new 0 0 1920 250' }}
        xmlSpace="preserve"
      >
        <path d="M1920,250V70.5c-9.9,13.6-157.3-38.5-360.8-21.5c-264.4,22.1-412.9,143.5-721.5,62.1C325-24,186.4-18,0,35.1V250h960h480 H1920z"></path>
      </svg>
    </div>
    </section>
  )
}

export default HeroSection;