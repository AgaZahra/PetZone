import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import icon from '../../assets/media/image/pati-icon.png';
import dogOne from '../../assets/media/image/appstore-bg.png';
import dogTwo from '../../assets/media/image/tab-dog.png';
import dogThree from '../../assets/media/image/dog-01.png';
import dogFour from '../../assets/media/image/dog-02.png';
import dogFive from '../../assets/media/image/dog-5.png';
import birdOne from '../../assets/media/image/bird01.png';
import birdTwo from '../../assets/media/image/bird02.png';
import birdThree from '../../assets/media/image/bird03.png';
import catOne from '../../assets/media/image/cat-002.png';
import catTwo from '../../assets/media/image/cat-003.png';
import { Col, Row } from 'react-bootstrap';
import { darken } from 'polished';

const Faqs = () => {
    const { t } = useTranslation();
    const contact = t('contact', { returnObjects: true });

    // Şəkil obyektlərini burada bir yerə toplayırıq
    const images = {
        dogOne,
        dogTwo,
        dogThree,
        dogFour,
        dogFive,
        catOne,
        catTwo,
        birdOne,
        birdTwo,
        birdThree
    };

    return (
        <section className="faqs">
            <div className="title">
                <img src={icon} width={40} alt="icon" className='icon-pati' />
                <span>{t('contact.faqs.span')}</span>
                <h3>{t('contact.faqs.title')}</h3>
                <p>{t('contact.faqs.desc')}</p>
            </div>

            <Row className='my-2'>
                {contact.faqs.box.map((box, index) => (
                    <Col key={index} sm={12} md={6} lg={3} className='my-2'>
                        <div className="flip-box" >
                            <div className="flip-box-inner">
                                <div className="flip-box-front" style={{ backgroundColor: darken(0.10, box.btnColor) }}>
                                    <img src={images[box.imgOne]} alt={box.title} />
                                    <h6>{box.title}</h6>
                                </div>
                                <div className="flip-box-back" style={{ backgroundColor: darken(0.10, box.btnColor) }}>
                                    <img src={images[box.imgTwo]} alt={box.title} />
                                    <p>{box.desc}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </section>
    );
}

export default Faqs;
