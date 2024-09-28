import React from 'react';
import HeroSection from './HeroSection';
import { useTranslation } from 'react-i18next';
import ServicesSection from './ServicesSection';
import TimerSection from './TimerSection';
import OffersSection from './OffersSection';
import PricingPlan from './PricingPlan';
import{ AwardsSection, BrandsSection }from './BrandsSection';
import { Col, Container, Row } from 'react-bootstrap';
import FeedbackSection from './FeedbackSection';
import MobileSection from './MobileSection';
import AnimalCareSection from './AnimalCareSection';
import CategoryFilter from './CategoryFilter';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
    <HeroSection/>
    <CategoryFilter/>
    <ServicesSection/>
    <TimerSection/>
    <OffersSection/>
    <PricingPlan/>
    <Container fluid>
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
   <MobileSection/>
   <AnimalCareSection/>

    
    </>
  )
}

export default Home