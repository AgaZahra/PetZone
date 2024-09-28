import React from 'react'
import catfaq from '../../assets/media/image/faq-img-cat.png';
import faq from '../../assets/media/image/faq-01.jpg'
import { Col, Row } from 'react-bootstrap';
import BannerPages from '../../components/BannerPages';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';
import { FaPhoneVolume } from 'react-icons/fa6';
import AnimalCareSection from '../Home/AnimalCareSection';
import icon from '../../assets/media/image/pati-icon.png';


const Faq = () => {

    const { t } = useTranslation();
    return (
        <>
            <section className="faq">
                <BannerPages itemOne={t('faq.name')} itemTwo={t('header.home')} />
                <Row className='p-5'>
                    <div className="title">
                        <img src={icon} width={40} alt="icon" className='icon-pati' />
                        <h3>{t('faq.name')}</h3>
                    </div>
                    <Col sm={12} md={12} lg={6}>
                        <Accordion>
                            <AccordionItem className='accardion-item'>
                                <h2>
                                    <AccordionButton >
                                        <Box as='span' flex='1' textAlign='left' className='title' >
                                            {t('faq.accOne.title')}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='content'>
                                    {t('faq.accOne.desc')}
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem className='accardion-item'>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' className='title'>
                                            {t('faq.accTwo.title')}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='content'>
                                    {t('faq.accTwo.desc')}

                                </AccordionPanel>
                            </AccordionItem >
                            <AccordionItem className='accardion-item'>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' className='title'>
                                            {t('faq.accThree.title')}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='content'>
                                    {t('faq.accThree.desc')}

                                </AccordionPanel>
                            </AccordionItem >
                            <AccordionItem className='accardion-item'>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' className='title'>
                                            {t('faq.accFour.title')}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='content'>
                                    {t('faq.accFour.desc')}

                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem className='accardion-item'>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' className='title'>
                                            {t('faq.accFive.title')}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='content'>
                                    {t('faq.accFive.desc')}

                                </AccordionPanel>
                            </AccordionItem>

                        </Accordion>
                    </Col>

                    <Col sm={12} md={12} lg={6}>
                        <div className="content">
                            <img src={faq} alt="image-faq" />
                            <div className="reachUs">
                                <FaPhoneVolume className='icon' />
                                <p>{t('faq.reach')} <br /> <span>+994 123 456 78 98</span></p>
                                <img src={catfaq} alt="image" />
                            </div>
                        </div>

                    </Col>
                </Row>
            </section>
            <AnimalCareSection />
        </>
    )
}

export default Faq