import React from 'react';
import { Col, Row } from 'react-bootstrap';
import icon from '../../assets/media/image/pati-icon.png';
import dog from '../../assets/media/image/Coupon-img-01.jpg';
import cat from '../../assets/media/image/Coupon-img-02.jpg';
import bird from '../../assets/media/image/Coupon-img-03.jpg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';



const OffersSection = () => {
  const { t } = useTranslation();
  const offers = t('home.offers', { returnObjects: true });
  // Şəkil obyektlərini burada bir yerə toplayiriq
  const images = {
    dog: dog,
    cat: cat,
    bird: bird
  }

  return (
    <section className="offers">
      <div className="title">
        <img src={icon} width={40} alt="icon" className='icon-pati' />
        <span>{t('home.offers.span')}</span>
        <h3>{t('home.offers.title')}</h3>
      </div>
      <Row className=' my-5 '>
        {offers.cards.map((card, index) => (
          <Col sm={12} md={12} lg={4} key={index} >
            <div className="card " >
              <div className="img-box">
                <img src={images[card.img]} alt={card.title} />
              </div>
              <div className="content">
                <p>{card.title}</p>
                <span>{card.cupon}</span>
                <Link to='/shop' className={`offers-btn btn`} style={{ backgroundColor:`${card.btnColor}`}}>{card.code}</Link>
              </div>
              <div className="svg-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 455 229" style={{ enableBackground: 'new 0 0 455 229', fill: '#F2DFD1' }} xmlSpace="preserve">
                  <path d="M2.7,222.6l7.8-10.5c5.5-7.4,5.2-17.6-0.6-24.7l-5-6.1c-4.1-5-4.6-12-1.2-17.5l8.3-13.3c3.1-4.9,3-11.1-0.1-16l-8.6-13.4 c-3.3-5.2-3.1-11.8,0.5-16.8l7.3-10.2c3.5-4.9,3.8-11.4,0.7-16.5L3.3,63.3c-3.2-5.3-2.8-12.1,1-17l5.2-6.7 c5.6-7.2,5.6-17.2,0.1-24.4l-9.2-12C-0.6,1.9,0.4,0,2,0H0v229h5.9C2.7,229,0.8,225.3,2.7,222.6z" />
                </svg>
              </div>
            </div>
          </Col>
        ))}
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

  )
}

export default OffersSection