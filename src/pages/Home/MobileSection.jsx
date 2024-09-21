import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import icon from '../../assets/media/image/pati-icon.png';
import best1 from '../../assets/media/image/best-app-1.png';
import best2 from '../../assets/media/image/best-app-2.png';
import rabbitImg from '../../assets/media/image/home-banner-2.png';
import phoneImg from '../../assets/media/image/home1-banner-01.png';
import appstore from '../../assets/media/image/app-store-1.png';
import playstore from '../../assets/media/image/playstore-1.png';
import { Link } from 'react-router-dom';



const MobileSection = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="mobile">
                <Container fluid>
                    <Row>
                        <Col sm={12} md={12} lg={5}>
                        <div className="image-container">
                        <img src={phoneImg} alt="phone-image" className='phone-img' />
                        <img src={best1} alt="error" className='best-one' />
                        <img src={best2} alt="error" className='best-two' />
                        </div>
                        </Col>
                        <Col sm={12} md={12} lg={4}>
                            <div className="title">
                            <img src={icon} width={40} alt="icon" className='icon-pati' />
                            <span>{t('home.mobile.span')}</span>
                            <h3>{t('home.mobile.title')}</h3>
                            <b>{t('home.mobile.dowland')}</b>
                            <p>{t('home.mobile.p')}</p>
                            </div>
                            <div className="app-box">
                                <Link to='https://play.google.com/store/games?device=windows' target='_blank'><img src={playstore} alt="Playstore" /></Link>
                                <Link to='https://www.apple.com/in/app-store/' target='_blank'><img src={appstore} alt="AppStore" /></Link>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={3}>
                        <div className="img-box">
                        <img src={rabbitImg} alt=" rabbit-image" className='rabbit-img' />
                        </div>
                        </Col>

                    </Row>

                </Container>

            </section>
        </>
    )
}

export default MobileSection