import React from 'react'
import notFound from '../assets/media/image/404-image.png';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    const {t} =useTranslation();
  return (
    <>
      <section className="not-found-page">
        <Container>
            <Row>
                <Col sm={12} md={12} lg={12}>
                <img src={notFound} alt="error"/>
                <div className="content">
                <h4>{t("notfound.title")}</h4>
                <p>{t("notfound.p")}</p>
                <Link to='/' className='btn btn-not'>{t("notfound.btn")}</Link>
                </div>
                </Col>
            </Row>
        </Container>

      </section>

    </>
  )
}

export default NotFoundPage