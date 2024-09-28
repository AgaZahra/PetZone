import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import slugify from 'slugify';
import { useSelector } from 'react-redux';
import { useCart } from 'react-use-cart';
import { useToast } from '@chakra-ui/react';
import { WishlistBtn } from './Wishlist';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const ProductDetails = () => {
    const { t } = useTranslation();
    const { slug } = useParams();
    const productData = useSelector((state) => state.product);
    const { addItem, items, updateItemQuantity } = useCart();
    const toast = useToast();
    
    const [quantity, setQuantity] = useState(1);
    const normalizedSlug = slug.toLowerCase();
    const productDetails = productData.find((p) => slugify(p.title, { lower: true }) === normalizedSlug);

    if (!productDetails) {
        return <h2>Loading...</h2>;
    }

    const handleAddToCart = () => {
        // Check if the user is logged in
        const username = localStorage.getItem('username'); // Adjust this key based on how you store username

        if (!username) {
            toast({
                title: "Login Required",
                description: "Please log in to add items to your cart.",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "top-right",
            });
            return;
        }

        if (quantity <= 0 || productDetails.stock <= 0) {
            toast({
                title: "Sorry",
                description: "Product is out of stock!",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top-right",
            });
            return;
        }

        const existingItem = items.find(item => item.id === productDetails.id);
        const totalQuantity = existingItem ? existingItem.quantity + quantity : quantity;

        if (totalQuantity <= productDetails.stock) {
            if (existingItem) {
                updateItemQuantity(productDetails.id, totalQuantity);
            } else {
                addItem({ ...productDetails, quantity });
            }

            toast({
                title: "Product added to cart!",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "top-right",
            });

            // Reset quantity
            setQuantity(1);
        } else {
            toast({
                title: "Sorry",
                description: "Not enough stock to add more!",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top-right",
            });
        }
    };

    return (
        <div className="container my-5 text-align-center product-details">
            <Row>
                <Col sm={12} md={12} lg={6}>  
                    <img src={productDetails.imgOne} alt="image"  />
                    <img src={productDetails.imgTwo} alt="image"  />
                </Col>
                <Col sm={12} md={12} lg={6}>
                    <div className="card my-card p-4">
                        <div className="card-body">
                            <h2 className="card-title">{productDetails.title}</h2>
                            <p className="card-text"><b>Price:</b> ${productDetails.price}</p>
                            <p className="card-text" id='desc'><b>Description:</b> {productDetails.desc}</p>
                            
                            <div className="basket-details">
                                <div className="quantity-controls">
                                    <button onClick={() => setQuantity(q => Math.max(q - 1, 1))}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => setQuantity(q => Math.min(q + 1, productDetails.stock))}>+</button>
                                </div>
                                <button onClick={handleAddToCart} className='btn btn-warning m-3'>
                                    {t('singleCard.modal.addBtn')}
                                </button>
                                
                                <button onClick={() => window.history.back()} type='button' className="btn btn-warning me-3">Back</button>
                                <WishlistBtn wishlistData={productDetails} />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};
