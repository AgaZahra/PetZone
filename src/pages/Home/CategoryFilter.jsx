import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import slugify from 'slugify';
import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import icon from '../../assets/media/image/pati-icon.png';



const CategoryFilter = () => {
    const { t } = useTranslation();
    const products = useSelector((state) => state.product);
    const category = useSelector((state) => state.category);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categoryLang=category.filter(item=>item.lang==t('categoryLang'));


    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
    };

    const filteredProducts = selectedCategory
        ? products.filter(item => item.category === selectedCategory)
        : products; // Show all products if no category is selected

    return (
        <section className='category-filtered'>
            <div className="title">
        <img src={icon} width={40} alt="icon" className='icon-pati' />
        <span>{t('home.category.span')}</span>
        <h3>{t('home.category.title')}</h3>
      </div>
            <Container>
                <Row>
                    {categoryLang.map((item, index) => (
                        <Col sm={12} md={4} lg={2} className='m-3 my-box' key={index}>
                            <div
                                className="box "
                                onClick={() => handleCategoryClick(item.title)} // Handle category click
                            >
                                <div className="img-border">
                                    <div className="img-box">
                                        <img src={item.icon} alt={item.title} />
                                    </div>
                                </div>
                                <p>{item.title}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                <Swiper
                    modules={[Navigation]} 
                    spaceBetween={20} 
                    slidesPerView={4} 
                    pagination={{ clickable: true }} 
                    navigation 
                    breakpoints={{
                        320: {
                            // Ekran ölçüsü 576px (sm) və ya daha böyük
                            slidesPerView: 1, // 2 kart göstər
                            spaceBetween: 5, // Kartlar arası 20px boşluq olsun
                          },
                        428: {
                          // Ekran ölçüsü 576px (sm) və ya daha böyük
                          slidesPerView: 2, // 2 kart göstər
                          spaceBetween: 5, // Kartlar arası 20px boşluq olsun
                        },
                        768: {
                          // Ekran ölçüsü 768px (md) və ya daha böyük
                          slidesPerView: 3, // 2 kart göstər
                          spaceBetween: 10, // Kartlar arası 20px boşluq olsun
                        },
                        1200: {
                          // Ekran ölçüsü 1200px (lg) və ya daha böyük
                          slidesPerView: 4, // 4 kart göstər
                          spaceBetween: 20, // Kartlar arası 20px boşluq olsun
                        },
                      }}
                >
                    {filteredProducts.map((product, index) => (
                        <SwiperSlide key={index} className='my-swiper'>
                            <div className="my-card">
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
            </Container>
        </section>
    );
};

export default CategoryFilter;
