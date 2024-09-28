import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation} from 'swiper/modules';

import brand1 from '../../assets/media/image/brand-png-01.png';
import brandIcon1 from '../../assets/media/image/brand-img-1.png';
import brand2 from '../../assets/media/image/brand-png-02.png';
import brandIcon2 from '../../assets/media/image/brand-img-2.png';
import brand3 from '../../assets/media/image/brand-png-03.png';
import brandIcon3 from '../../assets/media/image/brand-img-3.jpg';
import brand4 from '../../assets/media/image/brand-png-04.png';
import brandIcon4 from '../../assets/media/image/brand-img-4.png';
import brand5 from '../../assets/media/image/brand-png-05.png';
import brandIcon5 from '../../assets/media/image/brand-img-5.png';
import brand6 from '../../assets/media/image/brand-png-06.png';
import brandIcon6 from '../../assets/media/image/brand-img-6.png';
import brand7 from '../../assets/media/image/brand-png-07.png';
import brandIcon7 from '../../assets/media/image/brand-img-7.png';
//awards
import award1 from '../../assets/media/image/awards-01.png';
import award2 from '../../assets/media/image/awards-02.png';
import award3 from '../../assets/media/image/awards-03.png';
import award4 from '../../assets/media/image/awards-04.png';
import award5 from '../../assets/media/image/awards-05.png';
import award6 from '../../assets/media/image/awards-06.png';


 export const BrandsSection = () => {
    const { t } = useTranslation();
    const brands = t('home.brands', { returnObjects: true });

    const brand = {
        brand1,
        brand2,
        brand3,
        brand4,
        brand5,
        brand6,
        brand7
    };

    const brandsIcon = {
        brandIcon1,
        brandIcon2,
        brandIcon3,
        brandIcon4,
        brandIcon5,
        brandIcon6,
        brandIcon7
    };

    return (
        <section className="brands">
            <h2>{t("home.brands.title")}</h2>
            <Swiper
                spaceBetween={15}
                centeredSlides={true}
                slidesPerView={4}  // Ekranda eyni anda 4 slide göstərir
                loop={true}
                autoplay={{
                    delay: 2800,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        // Ekran ölçüsü 576px (sm) və ya daha böyük
                        slidesPerView: 1, // 2 kart göstər
                        spaceBetween: 5, // Kartlar arası 20px boşluq olsun
                      },
                    428: {
                      // Ekran ölçüsü 576px (sm) və ya daha böyük
                      slidesPerView: 2, // 2 kart göstər
                      spaceBetween: 5, // Kartlar arası 20px boşluq olsun
                    },
                    768: {
                      // Ekran ölçüsü 768px (md) və ya daha böyük
                      slidesPerView: 3, // 2 kart göstər
                      spaceBetween: 10, // Kartlar arası 20px boşluq olsun
                    },
                    1200: {
                      // Ekran ölçüsü 1200px (lg) və ya daha böyük
                      slidesPerView: 4, // 4 kart göstər
                      spaceBetween: 20, // Kartlar arası 20px boşluq olsun
                    },
                  }}
            >

                {brands.box.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="box my-5 " style={{ backgroundColor:`${item.bg}`}}>
                            <div className="icon-box">
                                <img src={brandsIcon[item.icon]} alt={item.icon} />
                            </div>
                            <img src={brand[item.brand]} alt={item.brand} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

    );
};




export const AwardsSection = () => {
    const { t } = useTranslation();
    const awards = t('home.awards', { returnObjects: true });

    const awardsIcon = {
        award1,
        award2,
        award3,
        award4,
        award5,
        award6,
    }

    return (
        <section className="awards">
            <h2>{t("home.awards.title")}</h2>
            <Swiper style={{ direction: 'rtl' }}
                spaceBetween={15}
                centeredSlides={true}
                slidesPerView={4}  // Ekranda eyni anda 4 slide göstərir
                loop={true}
                autoplay={{
                    delay: 2800,
                    disableOnInteraction: false,
                }}
                direction="horizontal"
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        // Ekran ölçüsü 576px (sm) və ya daha böyük
                        slidesPerView: 1, // 2 kart göstər
                        spaceBetween: 5, // Kartlar arası 20px boşluq olsun
                      },
                    428: {
                      // Ekran ölçüsü 576px (sm) və ya daha böyük
                      slidesPerView: 2, // 2 kart göstər
                      spaceBetween: 5, // Kartlar arası 20px boşluq olsun
                    },
                    768: {
                      // Ekran ölçüsü 768px (md) və ya daha böyük
                      slidesPerView: 3, // 2 kart göstər
                      spaceBetween: 10, // Kartlar arası 20px boşluq olsun
                    },
                    1200: {
                      // Ekran ölçüsü 1200px (lg) və ya daha böyük
                      slidesPerView: 4, // 4 kart göstər
                      spaceBetween: 20, // Kartlar arası 20px boşluq olsun
                    },
                  }}
                >

                {awards.box.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="box my-5 ">
                            <div className="icon-box">
                                <img src={awardsIcon[item.icon]} alt={item.icon} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

    );
};



