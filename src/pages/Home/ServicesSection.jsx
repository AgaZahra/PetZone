import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { FaCircle } from 'react-icons/fa';
import { Col,  Row } from 'react-bootstrap';
import icon from '../../assets/media/image/pati-icon.png';
import img1 from '../../assets/media/image/interactive-img-1.png';
import imgOne from '../../assets/media/image/interactive-center-img-1.png';
import imgTwo from '../../assets/media/image/interactive-center-img-4.png';
import imgThree from '../../assets/media/image/interactive-center-img-2.png';
import imgFour from '../../assets/media/image/interactive-center-img-3.png';
import img4 from '../../assets/media/image/interactive-img-4.png';
import img5 from '../../assets/media/image/interactive-img-5.png';
import img6 from '../../assets/media/image/interactive-img-6.png';
import img7 from '../../assets/media/image/interactive-img-7.png';
import img8 from '../../assets/media/image/interactive-img-8.png';
import img9 from '../../assets/media/image/interactive-img-9.png';
import img10 from '../../assets/media/image/interactive-img-10.png';
import img11 from '../../assets/media/image/interactive-img-11.png';
import img12 from '../../assets/media/image/interactive-img-12.png';
import img13 from '../../assets/media/image/interactive-img-13.png';
import img14 from '../../assets/media/image/interactive-img-14.png';
import bg    from '../../assets/media/image/services-background-img.png'

const ServicesSection = () => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState('pet-boarding'); 

  const handleMouseEnter = (service) => {
    setActiveService(service);
  };

  // const handleMouseLeave = () => {
  //   // activeService-i boşaldırıq
  // };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animasiyanın müddəti
      once: true, // Animasiya yalnız bir dəfə
    });
  }, []);

  return (
    <>
      <section className="services  my-5 mx-2">
        <Row>
          <Col sm={12} md={12} lg={4} className='left' data-aos="fade-right">
            <img src={icon} width={40} alt="icon" className='icon-pati' />
            <span>{t('home.services.span')}</span>
            <h2>{t('home.services.title')}</h2>
            <p>{t('home.services.desc')}</p>
            <ul className='list'>
              
              <li
                onMouseEnter={() => handleMouseEnter('pet-boarding')}
              
                className={activeService === 'pet-boarding' ? 'active' : ''}>
                <FaCircle className='icon' />{t('home.services.ul.liOne.title')}
              </li>
              <li
                onMouseEnter={() => handleMouseEnter('pet-setting')}
              
                className={activeService === 'pet-setting' ? 'active' : ''}
              >
                <FaCircle className='icon' />{t('home.services.ul.liTwo.title')}
              </li>
              <li
                onMouseEnter={() => handleMouseEnter('pet-veterinary')}
              
                className={activeService === 'pet-veterinary' ? 'active' : ''}
              >
                <FaCircle className='icon' />{t('home.services.ul.liThree.title')}
              </li>
              <li
                onMouseEnter={() => handleMouseEnter('pet-care')}
              
                className={activeService === 'pet-care' ? 'active' : ''}
              >
                <FaCircle className='icon' />{t('home.services.ul.liFour.title')}
              </li>
            </ul>
          </Col>

          <Col sm={12} md={12} lg={8} className='right my-5' data-aos="fade-left">
            <div className={`pet-boarding ${activeService === 'pet-boarding' ? 'active' : ''}`}>
              <div className="box-container" >
                <div className="box m-5 " >
                  <h4>{t('home.services.ul.liOne.one')}</h4>
                  <p>{t('home.services.ul.p')}</p>
                  <img src={img1} alt="dog-image" className='img' />
                </div>
              </div>

              <div className="box-container">
                <img src={imgOne} alt="cat-image" />
                <div className="box m-4">
                  <h4>{t('home.services.ul.liOne.two')}</h4>
                  <p>{t('home.services.ul.p')}</p>
                  <img src={img4} alt="bird-image" className='img' />
                </div>
              </div>

              <div className="box-container my-5">
                <div className="box m-5">
                  <h4>{t('home.services.ul.liOne.three')}</h4>
                  <p>{t('home.services.ul.p')}</p>
                  <img src={img5} alt="cat-image" className='img' />
                </div>
              </div>
            </div>

            <div className={`pet-setting ${activeService === 'pet-setting' ? 'active' : ''}`}>
              <div className="box-container">
                <div className="box m-5">
                  <h4>{t('home.services.ul.liTwo.one')}</h4>
                  <p>{t('home.services.ul.p')}</p>
                  <img src={img6} alt="dog-image" className='img' />
                </div>
              </div>

              <div className="box-container">
                <img src={imgTwo} alt="cat-image" />
                <div className="box m-4">
                  <h4>{t('home.services.ul.liTwo.two')}</h4>
                  <p>{t('home.services.ul.p')}</p>
                  <img src={img7} alt="bird-image" className='img' />
                </div>
              </div>

              <div className="box-container my-5">
                <div className="box m-5">
                  <h4>{t('home.services.ul.liTwo.three')}</h4>
                  <p>{t('home.services.ul.p')}</p>
                  <img src={img8} alt="cat-image" className='img' />
                </div>
              </div>
            </div>

            <div className={`pet-veterinary ${activeService === 'pet-veterinary' ? 'active' : ''}`}>
              <div className="box-container">
                <div className="box m-5">
                  <h4>{t('home.services.ul.liThree.one')}</h4>
                  <p>{t('home.services.ul.p')}</p>
                  <img src={img9} alt="dog-image" className='img' />
                </div>
              </div>

              <div className="box-container">
                <img src={imgThree} alt="cat-image" />
                <div className="box m-4">
                  <h4>{t('home.services.ul.liThree.two')}</h4>
                  <p>{t('home.services.ul.p')}</p>
                  <img src={img10} alt="bird-image" className='img' />
                </div>
              </div>

              <div className="box-container my-5">
                <div className="box m-5">
                  <h4>{t('home.services.ul.liThree.three')}</h4>
                  <p>{t('home.services.ul.p')}</p>
                  <img src={img11} alt="cat-image" className='img' />
                </div>
              </div>
            </div>

            <div className={`pet-care ${activeService === 'pet-care' ? 'active' : ''}`}>
              <div className="box-container">
                <div className="box m-5">
                  <h4>{t('home.services.ul.liFour.one')}</h4>
                  <p>{t('home.services.ul.p')}</p>
                  <img src={img12} alt="dog-image" className='img' />
                </div>
              </div>

              <div className="box-container">
                <img src={imgFour} alt="cat-image" />
                <div className="box m-4">
                  <h4>{t('home.services.ul.liFour.two')}</h4>
                  <p>{t('home.services.ul.p')}</p>
                  <img src={img13} alt="bird-image" className='img' />
                </div>
              </div>

              <div className="box-container my-5">
                <div className="box m-5">
                  <h4>{t('home.services.ul.liFour.three')}</h4>
                  <p>{t('home.services.ul.p')}</p>
                  <img src={img14} alt="cat-image" className='img' />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ServicesSection;
