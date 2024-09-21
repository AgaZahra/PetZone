import React from 'react'
import { useTranslation } from 'react-i18next';
import catfood from "../../assets/media/image/catfood-img.png";
import grooming from "../../assets/media/image/grooming-img.png";
import petcare from "../../assets/media/image/petcare-img.png";
import training from "../../assets/media/image/training-img.png";
import { Col, Container, Row } from 'react-bootstrap';


const AnimalCareSection = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="animal-care">
                <Container fluid>
                    <Row>
                        <Col sm={6} md={6} lg={3}>
                            <div className="box">
                                <img src={grooming} alt="error" />
                                <div className="content">
                                    <h4>{t("home.animalcare.grooming")}</h4>
                                    <p>{t("home.animalcare.p")}</p>
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} md={6} lg={3}>
                            <div className="box">
                                <img src={petcare} alt="error" />
                                <div className="content">
                                    <h4>{t("home.animalcare.care")}</h4>
                                    <p>{t("home.animalcare.p")}</p>
                                </div>
                            </div>
                        </Col>



                        <Col sm={6} md={6} lg={3}>
                            <div className="box">
                                <img src={catfood} alt="error" />
                                <div className="content">
                                    <h4>{t("home.animalcare.food")}</h4>
                                    <p>{t("home.animalcare.p")}</p>
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} md={6} lg={3}>
                            <div className="box">
                                <img src={training} alt="error" />
                                <div className="content">
                                    <h4>{t("home.animalcare.training")}</h4>
                                    <p>{t("home.animalcare.p")}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>

            </section>
        </>
    )
}

export default AnimalCareSection
