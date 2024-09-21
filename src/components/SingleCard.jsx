import React, { useState } from 'react';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { updatestock } from '../tools/slices/productSlice';

const SingleCard = ({ allData }) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [stock, setStock] = useState(allData.stock);
  const { addItem, updateItemQuantity, items } = useCart();
  const dispatch = useDispatch();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const increaseQuantity = () => {
    if (quantity < allData.stock) {
      setQuantity(prev => prev + 1);
      setStock(prev => prev - 1);
    } else {
      Swal("Sorry", "Product is out of stock!", "error");
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
      setStock(prev => prev + 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity <= 0 || stock <= -1) {
      Swal("Sorry", "Product is out of stock!", "error");
      return;
    }

    const existingItem = items.find(item => item.id === allData.id);
    const totalQuantity = existingItem ? existingItem.quantity + quantity : quantity;

    if (totalQuantity <= allData.stock) {
      if (existingItem) {
        updateItemQuantity(allData.id, totalQuantity);
        Swal("Product quantity was updated", "", "success");
      } else {
        addItem({ ...allData, quantity });
        Swal("Product was added", "", "success");
      }

      const newStock =allData.stock - totalQuantity;
      dispatch(updatestock({ id: allData.id, newStock }));

      handleClose();
      setQuantity(0);
    } else {
      Swal("Sorry", "Not enough stock to add more!", "error");
    }
  };

  return (
    <>
      <Col sm={12} md={6} lg={4}>
        <div className="card my-card">
          <div className="img-box">
            <img src={allData.imgOne} className="img-one" alt={allData.title} />
            <img src={allData.imgTwo} className="img-two" alt={allData.title} />
            <div className="details">
              <Link to={`/products/${slugify(allData.title)}`} className="btn">
                SELECT OPTIONS
              </Link>
            </div>
          </div>
          <div className="context">
            <h3>{allData.title}</h3>
            <p>${allData.price}</p>
          </div>
          <div className="icon-items">
            <CiHeart className="card-icon" />
            <CiSearch className="card-icon" onClick={handleShow} />
          </div>
        </div>
      </Col>

      <Modal show={showModal} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="modal-content-wrapper">
            <div className="modal-img-box">
              <img src={allData.imgOne} alt={allData.title} />
              {allData.sale && <span className="sale-tag">Sale</span>}
            </div>
            <div className="modal-details">
              <h3>{allData.title}</h3>
              <p id='price'>${allData.price}</p>
              <p>{allData.desc}</p>
              <p><b>Size:</b> {allData.size}</p>
              <p id='stock'><b>{stock}</b> in stock</p>
              {stock <= 5 && stock > 0 && (
                <p style={{ color: 'red' }}>
                  Only <b>{stock}</b> left in stock! Order soon!
                </p>
              )}
              {stock === 0 && <p style={{ color: 'red' }}>Out of stock!</p>}
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
                Add to Cart
              </button>
              <br />
              <p id='cat'><b>Category:</b> {allData.category}</p>
              <p id='tag'><b>Tag:</b> {allData.tag}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleCard;
