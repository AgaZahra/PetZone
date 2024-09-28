import React, { useState } from 'react';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { useCart } from 'react-use-cart';
import { useToast } from '@chakra-ui/react';  // Chakra UI toast hook
import { useDispatch } from 'react-redux';
import { updatestock } from '../tools/slices/productSlice';
import { WishlistBtn } from '../pages/Wishlist';
import { t } from 'i18next';

const SingleCard = ({ allData }) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [stock, setStock] = useState(allData.stock);
  const { addItem, updateItemQuantity, items } = useCart();
  const dispatch = useDispatch();
  const toast = useToast();  // Toast for alerts
  const isLoggedIn = localStorage.getItem('username');


  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const increaseQuantity = () => {
    if (quantity < allData.stock) {
      setQuantity(prev => prev + 1);
      setStock(prev => prev - 1);
    } else {
      toast({
        title: t('singleCard.alert.sorry'),
        description: t('singleCard.alert.errorStock'),
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
      setStock(prev => prev + 1);
    }
  };

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      toast({
        title: t('singleCard.alert.sorry'),
        description: t('singleCard.alert.errorLogIn'),
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    if (quantity <= 0 || stock <= -1) {
      toast({
        title: t('singleCard.alert.sorry'),
        description: t('singleCard.alert.errorStock'),
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
  
    const existingItem = items.find(item => item.id === allData.id);
    const totalQuantity = existingItem ? existingItem.quantity + quantity : quantity;
  
    if (totalQuantity <= allData.stock) {
      if (existingItem) {
        updateItemQuantity(allData.id, totalQuantity);
      } else {
        addItem({ ...allData, quantity });
      }
  
      toast({
        title: t('singleCard.alert.successAdd'),
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
  
      const newStock = allData.stock - quantity;
      dispatch(updatestock({ id: allData.id, newStock }));
  
      handleClose();
      setQuantity(0);
    } else {
      toast({
        title: t('singleCard.alert.sorry'),
        description: t('singleCard.alert.errorStock'),
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <>
      <Col sm={12} md={6} lg={6}>
        <div className="card my-card">
          <div className="img-box">
            <img src={allData.imgOne} className="img-one" alt={allData.title} />
            <img src={allData.imgTwo} className="img-two" alt={allData.title} />
            <div className="details">
              <Link to={`/products/${slugify(allData.title)}`} className="btn">
                {t('singleCard.modal.select')}
              </Link>
            </div>
          </div>
          <div className="context">
            <h3>{allData.title}</h3>
            <p>${allData.price}</p>
          </div>
          <div className="icon-items">
            <WishlistBtn wishlistData={allData}/>
            <CiSearch className="card-icon" onClick={handleShow} />
          </div>
        </div>
      </Col>

      <Modal show={showModal} onHide={handleClose} className="custom-modal">
        <Modal.Body>
          <Modal.Header closeButton />
          <div className="modal-content-wrapper">
            <div className="modal-img-box">
              <img src={allData.imgOne} alt={allData.title} />
              {allData.sale && <span className="sale-tag">Sale</span>}
              <div className="modal-details-responsive">
              <h3>{allData.title}</h3>
              <p id='price'>${allData.price}</p>
              <p>{allData.desc}</p>
              <p><b>{t('singleCard.modal.size')}:</b> {allData.size}</p>
              <p id='stock'><b>{stock}</b> {t('singleCard.modal.stock')}</p>
              {stock <= 5 && stock > 0 && (
                <p style={{ color: 'red' }}>
                 {t('singleCard.modal.only')} <b>{stock}</b> {t('singleCard.modal.alertStock')}
                </p>
              )}
              {stock === 0 && <p style={{ color: 'red' }}>{t('singleCard.modal.ofStock')}</p>}
              <div className="quantity-controls">
                <button onClick={decreaseQuantity} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity} disabled={stock <= 0}>+</button>
              </div>
              <button
                className="btn add-to-cart"
                onClick={handleAddToCart}
                disabled={stock <= -1 || quantity<=0}
              >
                {t('singleCard.modal.addBtn')}
                </button>
              <br />
              <p id='cat'><b>{t('singleCard.modal.category')}
              :</b> {allData.category}</p>
              <p id='tag'><b>{t('singleCard.modal.tag')}
              :</b> {allData.tag}</p>
            </div>

            </div>
            <div className="modal-details">
              <h3>{allData.title}</h3>
              <p id='price'>${allData.price}</p>
              <p>{allData.desc}</p>
              <p><b>{t('singleCard.modal.size')}:</b> {allData.size}</p>
              <p id='stock'><b>{stock}</b> {t('singleCard.modal.stock')}</p>
              {stock <= 5 && stock > 0 && (
                <p style={{ color: 'red' }}>
                 {t('singleCard.modal.only')} <b>{stock}</b> {t('singleCard.modal.alertStock')}
                </p>
              )}
              {stock === 0 && <p style={{ color: 'red' }}>{t('singleCard.modal.ofStock')}</p>}
              <div className="quantity-controls">
                <button onClick={decreaseQuantity} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity} disabled={stock <= 0}>+</button>
              </div>
              <button
                className="btn add-to-cart"
                onClick={handleAddToCart}
                disabled={stock <= -1 || quantity<=0}
              >
                {t('singleCard.modal.addBtn')}
                </button>
              <br />
              <p id='cat'><b>{t('singleCard.modal.category')}
              :</b> {allData.category}</p>
              <p id='tag'><b>{t('singleCard.modal.tag')}
              :</b> {allData.tag}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleCard;
