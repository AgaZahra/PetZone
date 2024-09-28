import React from 'react';
import Logo from '../../src/assets/media/image/PetShop_Logo.svg';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import slugify from 'slugify';


const CheckoutSuccess = () => {
  const {t} =useTranslation();
  const products = useSelector((state) => state.product);
  const productLang=products.filter(item=>item.lang==t('productLang'))
  return (
    < section className='checkout-success'>
    <Container>
        <Row>
            
            <Col sm={12} md={12} lg={12}>
            <div className="content">
            <Navbar.Brand as={NavLink} to="/" className='logo'>
            <img src={Logo} alt="Logo" />
             </Navbar.Brand>
             <h2>{t('checkout.checkoutSuc.header')}</h2>
             <h5>{t('checkout.checkoutSuc.title')}</h5>
             <Link to='/' className='btn'>{t('header.home')}</Link>
            </div>
            </Col>
        </Row>
        <Row>
        <h5 className='p-4'>{t('checkout.checkoutSuc.favProduct')}</h5>
        <Swiper
                    modules={[Navigation]} // Include Navigation and Pagination modules
                    spaceBetween={20} // Space between slides
                    slidesPerView={4} // Number of slides to show at once
                    pagination={{ clickable: true }} // Enable pagination
                    navigation // Enable navigation buttons
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index} className='my-swiper'>
                            <div className="my-card m-3">
                                <Link to={`/products/${slugify(product.title)}`} >
                                    <div className="img-box">
                                        <img src={product.imgOne} className="img-one" alt={product.title} />
                                        <img src={product.imgTwo} className="img-two" alt={product.title} />
                                    </div>                               
                                    <p>{product.title}</p>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </Row>

    </Container>

    
    </section>
  )
}

export default CheckoutSuccess