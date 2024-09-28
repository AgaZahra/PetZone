import React from 'react'
import img from '../../assets/media/image/about-img.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import BannerPages from '../../components/BannerPages';
import { useTranslation } from 'react-i18next';
import best1 from '../../../src/assets/media/image/best-app-1.png';
import icon from '../../assets/media/image/pati-icon.png';
import {  PiStethoscopeThin } from "react-icons/pi";
import { GiBelt } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { SiDatadog } from "react-icons/si";
import { GiDogBowl } from "react-icons/gi";
import { GiDogHouse } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';
import FeedbackSection from '../Home/FeedbackSection';
import { AwardsSection, BrandsSection } from '../Home/BrandsSection';





const About = () => {
    const { t } = useTranslation();
    return (
        <>
        <section className="about">
            <BannerPages itemOne={t('about.header')} itemTwo={t('header.home')} />
            <Container>
                <Row className='my-5'>
                    <Col sm={12} md={12} lg={6}>
                        <div className="title">
                            <img src={icon} width={40} alt="icon" className='icon-pati' />
                            <span>{t('about.span')}</span>
                            <h3>{t('about.title')}</h3>
                            <p>{t('about.p')}</p>
                        </div>
                        <div className="left">
                            <ul>
                                <li> <GiBelt className='about-icon' />
                                {t('about.ul.belt')}</li>
                                <li> <PiStethoscopeThin className='about-icon'/>
                                {t('about.ul.care')}</li>
                                <li><GiDogHouse className='about-icon' />
                                {t('about.ul.hygiene')}</li>
                            </ul>
                            <ul>
                                <li><GiDogBowl className='about-icon'/>
                                {t('about.ul.food')}</li>
                                <li><GrCertificate className='about-icon'/>
                                {t('about.ul.product')}</li>
                                <li><SiDatadog className='about-icon'/>
                                {t('about.ul.salon')}</li>
                            </ul>

                        </div>
                            <Link to='/contactus'><p><FiPhoneCall className='call-icon' />
                            {t('about.call')}</p> </Link>

                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <div className="right">
                            <div className="img-box">
                                <img src={img} alt="image-error" />
                            </div>
                            <img src={best1} alt="error" className='best-one' />

                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
        <Container fluid >
            <Row >
                <Col sm={12} md={12} lg={6} style={{margin:"0",padding:"0"}}>
                    <BrandsSection />
                    <AwardsSection />
                </Col>
                <Col sm={12} md={12} lg={6} style={{margin:"0",padding:"0"}}>
                    <FeedbackSection />
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default About