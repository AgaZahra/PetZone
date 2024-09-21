import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { BiMessageRoundedDots } from "react-icons/bi";
import payment from '../../assets/media/image/payment-icon.png';
import { Link } from 'react-router-dom';
import { IoLocation, IoMail } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    const { t } = useTranslation();

    // Səhifəni yuxarıya qaytarmaq üçün klik hadisəsi
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <footer>
                <Container fluid>
                    <Row>
                        <Col sm={12} md={12} lg={5}>
                            <h4>{t("footer.form.title")} <BiMessageRoundedDots /></h4>
                            <form action="#">
                                <input type="email" placeholder='Email' />
                                <button>Submit</button>
                            </form>
                            <p>{t("footer.form.p")}</p>
                        </Col>
                        <Col sm={12} md={4} lg={2}>
                            <h5>{t("footer.useful.title")}</h5>
                            <ul className='list-group'>
                                <li onClick={scrollToTop}>{t("footer.useful.search")}</li>
                                <li onClick={scrollToTop}>{t("footer.useful.press")}</li>
                                <li onClick={scrollToTop}>{t("footer.useful.cookies")}</li>
                                <li onClick={scrollToTop}>{t("footer.useful.privacy")}</li>
                                <li onClick={scrollToTop}>{t("footer.useful.details")}</li>
                                <li onClick={scrollToTop}>{t("footer.useful.map")}</li>
                            </ul>
                        </Col>
                        <Col sm={12} md={4} lg={2}>
                            <h5>{t("footer.services.title")}</h5>
                            <ul className='list-group'>
                                <li onClick={scrollToTop}>{t("footer.services.shopping")}</li>
                                <li onClick={scrollToTop}>{t("footer.services.search")}</li>
                                <li onClick={scrollToTop}>{t("footer.services.help")}</li>
                                <li onClick={scrollToTop}>{t("footer.services.location")}</li>
                                <li onClick={scrollToTop}>{t("footer.services.order")}</li>
                                <li onClick={scrollToTop}>{t("footer.services.app")}</li>
                            </ul>
                        </Col>
                        <Col sm={12} md={4} lg={3}>
                            <h5>{t("footer.contact.title")}</h5>
                            <ul className='list-group'>
                                <li onClick={scrollToTop}><IoLocation /> {t("footer.contact.location")}</li>
                                <li onClick={scrollToTop}><FaPhoneAlt /> {t("footer.contact.phone")}</li>
                                <li onClick={scrollToTop}><IoMail /> {t("footer.contact.email")}</li>
                            </ul>
                        </Col>
                    </Row>

                    <Row className='footer-bottom'>
                        <Col sm={12} md={12} lg={4}>
                            <img src={payment} alt="error" />
                        </Col>
                        <Col sm={12} md={12} lg={4}>
                            <p>{t("footer.p")}</p>
                        </Col>
                        <Col sm={12} md={12} lg={4}>
                            <div className="social">
                                <Link to='https://www.instagram.com' target='_blank' className='btn btn-footer'>Instagram</Link>
                                <Link to='https://www.facebook.com/' target='_blank' className='btn btn-footer'>Facebook</Link>
                                <Link to='https://www.threads.net/' target='_blank' className='btn btn-footer'>Threads</Link>
                                <Link to='https://x.com/' target='_blank' className='btn btn-footer'>X</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;
