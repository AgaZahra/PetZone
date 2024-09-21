import React from 'react';
import { useTranslation } from 'react-i18next';
import icon from '../../assets/media/image/pati-icon.png';
import videoDog from '../../assets/media/video/video-for-service.mp4';


const PricingPlan = () => {
    const { t } = useTranslation();
    const plans = t('home.plans', { returnObjects: true })
    return (
        <>
        <section className="pricing-plan">
            <div className="title">
                <img src={icon} width={40} alt="icon" className='icon-pati' />
                <span>{t('home.plans.span')}</span>
                <h3>{t('home.plans.title')}</h3>
            </div>
                <div  className="box-container">
                {plans.box.map((item, index) => (
                        <div key={index} className='box'>
                            <div  className="content">
                                <p>${item.price}</p>
                                <h6>{item.plan}</h6>
                            </div>
                        </div>
                ))}            
                </div>
        </section>
        <section className='video'>
        <video src={videoDog}  autoPlay  loop muted></video>
             
        </section>
        </>
    )
}

export default PricingPlan