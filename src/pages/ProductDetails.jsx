import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import slugify from 'slugify';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';

export const ProductDetails = () => {
    const { slug } = useParams();
    const productData = useSelector((state) => state.product); 
    console.log("Redux product data:", productData);
    console.log("URL slug:", slug);

    
    const productDetails = productData.find(p => slugify(p.title,{ lower: true }) === slug);
    console.log(productDetails);
    
  
    
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800
    };

    if (!productDetails) {
        return (
             <>
             <h2>Error</h2>
             </>
        );
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6">
                    <Slider {...settings}>
                        {productDetails.img.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Slide ${index}`} className="img-fluid" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="col-lg-6">
                    <div className="card p-4">
                        <div className="card-body">
                            <h2 className="card-title">{productDetails.title}</h2>
                            <p className="card-text"><b>Price:</b> ${productDetails.price}</p>
                            <p className="card-text"><b>Description:</b> {productDetails.desc}</p>
                            <button 
                                onClick={() => window.history.back()} 
                                type='button' 
                                className="btn btn-warning me-3"
                            >
                                Back
                            </button>
                            <button 
                                className='btn btn-warning'
                                onClick={() => addItem(productDetails)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
