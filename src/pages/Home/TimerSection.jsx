import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import dogImg from '../../assets/media/image/home-1-timer-dog.png';
import dogsImg from '../../assets/media/image/Countdown-timer-04.png'; 
import catImg from '../../assets/media/image/timer-cat.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const TimerSection = () => {
    const { t } = useTranslation();
    const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 394);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        // Geri sayım bitdi
        setTimeLeft({
           days: 0,
           hours: 0, 
           minutes: 0, 
           seconds: 0 
          });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ 
        days, 
        hours, 
        minutes, 
        seconds 
      });
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer(); // İlk yeniləməni dərhal edin

    return () => clearInterval(interval); // Komponent silindiyi zaman intervalı təmizləyin
  }, []);
  return (
    <>
    <section className="timer">
    <Row >
        <Col sm={12} md={12} lg={4} className='left-content'>
        <h3>{t("home.timer.title")}</h3>
        <p>{t("home.timer.p")}</p>
        <div className="time ">
            <p><span>{timeLeft.days}</span><br />{t("home.timer.days")}</p><b>:</b>
            <p><span>{timeLeft.hours}</span><br />{t("home.timer.hrs")}</p><b>:</b>
            <p><span>{timeLeft.minutes}</span><br />{t("home.timer.mins")}</p><b>:</b>
            <p><span>{timeLeft.seconds}</span><br />{t("home.timer.secs")}</p>  
          </div>
          <Link to='/shop' className='btn'>{t('home.timer.btn')}</Link>  

        </Col>

        <Col sm={12} md={12} lg={8}>
        <img src={dogImg} alt="dog-image" className='dog-image-one' data-aos="zoom-in-up" />            
        <img src={dogsImg} alt="dogsImg" className='dog-image-two' />
        <img src={catImg} alt="dogsImg" className='cat-image-three' />
        </Col>
    </Row>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1920 58"
        style={{ enableBackground: 'new 0 0 1920 58' }}
        xmlSpace="preserve"
        className="sharp-svg"
      >
        <g>
          <path
            d="M1907.8,57.3l-189.2-43.5c-25.4-5.8-51.7-5.8-77,0.2l-150.9,35.5c-29.7,7-60.6,7.7-90.6,2.1l-211.3-39.3c-26.4-4.9-53.6-3.5-79.4,4.2l-88.8,26.3c-38,11.3-78.3,12.1-116.7,2.3l-118-29.9c-26.8-6.8-54.9-7-81.8-0.5L567.4,47.9c-33.1,8-67.7,8.2-100.9,0.6L312,13.1c-23.4-5.4-47.7-5.7-71.3-1L12,57.7C5.8,59,0,54.2,0,47.9V58h1920V47.6C1920,54,1914,58.8,1907.8,57.3z"
            fill="#" // Başlangıç rəngi
          ></path>
          <rect y="-672" width="1920" height="0.1"></rect>
        </g>
      </svg>
    </section>
    
    </>
  )
}

export default TimerSection