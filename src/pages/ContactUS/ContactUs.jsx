import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { Address, ContactForm } from './ContactForm';
import Faqs from './Faqs';
import appstore from '../../assets/media/image/app-store-1.png';
import playstore from '../../assets/media/image/playstore-1.png';
import appBg from '../../assets/media/image/appstore-bg.png';
import { FaStarOfLife } from 'react-icons/fa';


const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hero-container">
        <div className="hero">
          <h2>{t('header.contactus')}</h2>
          <h5> <Link to='/'>{t('header.home')}</Link> - {t('header.contactus')} </h5>
        </div>
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
      </div>
      {/* Hero-End */}


      <section className="contact">
        <Faqs />

        <Row className='my-5 d-flex align-items-center' >
          <div className="title">
            <span>{t('contact.form.span')}</span>
            <h3>{t('contact.form.title')}</h3>
            <p>{t('contact.form.desc')}</p>
          </div>
          <Col sm={12} md={12} lg={7} className='my-4'>
            <ContactForm />
          </Col>
          <Col sm={12} md={12} lg={5} className='my-4'>
            <Address />
          </Col>
        </Row>

        {/* Contact-Form-End */}

        <Row >
          <Col>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30246.858983283105!2d-73.9822235!3d40.6605048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDBDNTAgNjcwLjUiTiA3M1o0MDAwMDA!5e0!3m2!1sen!2sus!4v1688224986697!5m2!1sen!2sus&layer=c"
                height="700"
                width="100%"
                title="Satellite Map"
                style={{ border: 0, padding: 0 }}
              ></iframe>
            </div>
          </Col>
        </Row>
        {/* Map-End */}

        <div className="app ">
          <Row>
            <Col sm={12} md={6} lg={3}>
              <div className="content">
                <span>{t('contact.app.span')}</span>
                <h4>{t('contact.app.title')}</h4>
                <p>{t('contact.app.desc')}</p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={8}>
            <img src={appBg} alt="error" />
            </Col>
            <Col sm={12} md={6} lg={3}>
            <FaStarOfLife className='icon-one' />
            <FaStarOfLife className='icon-two' />
              <div className="app-box">
                <Link to='https://play.google.com/store/games?device=windows' target='_blank'><img src={playstore} alt="Playstore" /></Link>
                <Link to='https://www.apple.com/in/app-store/' target='_blank'><img src={appstore} alt="AppStore" /></Link>
              </div>
            </Col>

          </Row>

        </div>



      </section>



    </>
  )
}

export default ContactUs