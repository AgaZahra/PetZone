import React from 'react'
import { useTranslation } from 'react-i18next';
import icon from '../../assets/media/image/pati-icon.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import img1 from '../../assets/media/image/Home-Testimonial-01.png';
import img2 from '../../assets/media/image/Home-Testimonial-02.png';
import img3 from '../../assets/media/image/Home-Testimonial-03.png';

const FeedbackSection = () => {

    const { t } = useTranslation();
    const feedback = t('home.feedback', { returnObjects: true });
    const images = {
        img1,
        img2,
        img3
    };

    return (
        <>
            <section className="feedback">
                <div className="title">
                    <img src={icon} width={40} alt="icon" className='icon-pati' />
                    <span>{t('home.feedback.span')}</span>
                    <h3>{t('home.feedback.title')}</h3>
                </div>
                <Swiper 
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper">
                    {feedback.cards.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="my-card">
                                <img src={images[item.img]} alt={item.img} />
                                <div className="content">
                                    <p>{item.p}</p>
                                    <h5>{item.name}</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default FeedbackSection;
