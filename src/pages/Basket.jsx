import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from 'react-use-cart';
import { updatestock } from '../tools/slices/productSlice';
import { FaRegSadTear } from 'react-icons/fa';
import { RiDeleteBin5Line } from "react-icons/ri";
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import BannerPages from '../components/BannerPages';
import Swal from 'sweetalert2';
import slugify from 'slugify';

const Basket = () => {
  const { t } = useTranslation();
  const { isEmpty, items, updateItemQuantity, removeItem, cartTotal } = useCart();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stock, setStock] = useState({});
  
  // Assuming you have a login state in your Redux store
  const isLoggedIn = localStorage.getItem('username'); // Adjust this based on your state structure

  useEffect(() => {
    const newStock = {};
    items.forEach(item => {
      newStock[item.id] = item.stock;
    });
    setStock(newStock);
  }, [items]);

  if (isEmpty) {
    return (
      <>
        <BannerPages itemOne={t('singleCard.cart')} itemTwo={t('header.home')} />
        <div className="empty-cart">
          <FaRegSadTear className='icon' />
          <h2>{t('singleCard.basket.empty')}</h2>
          <Link to='/shop' className='btn'>{t('singleCard.basket.back')} </Link>
        </div>
      </>
    );
  }

  const handleRemoveItem = (id) => {
    const itemToRemove = items.find(item => item.id === id);
    const newStock = itemToRemove.stock;

    Swal.fire({
      title: t('singleCard.basket.alert.sure'),
      text: t('singleCard.basket.alert.remove'),
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: t('singleCard.basket.alert.yesBtn'),
      cancelButtonText: t('singleCard.basket.alert.noBtn'),
      showClass: {
        popup: `animate__animated animate__fadeInUp animate__faster`,
    },
    hideClass: {
        popup: `animate__animated animate__fadeOutDown animate__faster`,
    },
    customClass: {
        popup: 'my-popup-class',
        title: 'my-title-class',
        confirmButton: 'my-confirm-button-class',
    },
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(id);
        dispatch(updatestock({ id, newStock }));
        Swal.fire({
          title: t('singleCard.basket.alert.successRem'),
          text: "",
          icon: "success",
          showClass: {
              popup: `animate__animated animate__fadeInUp animate__faster`,
          },
          hideClass: {
              popup: `animate__animated animate__fadeOutDown animate__faster`,
          },
          customClass: {
              popup: 'my-popup-class',
              title: 'my-title-class',
              confirmButton: 'my-confirm-button-class',
          },
      });
        
      }
    });
  };

  const handleQuantityChange = (id, newQuantity) => {
    const currentStock = items.find(item => item.id === id).stock;
    if (newQuantity > currentStock) {
      Swal.fire({
        title: t('singleCard.basket.alert.error'),
        text: "Sorry",
        icon: "error",
        showClass: {
            popup: `animate__animated animate__fadeInUp animate__faster`,
        },
        hideClass: {
            popup: `animate__animated animate__fadeOutDown animate__faster`,
        },
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            confirmButton: 'my-confirm-button-class',
        },
    });
      
      return;
    }
    updateItemQuantity(id, newQuantity);
    const newStock = currentStock - newQuantity;
    dispatch(updatestock({ id, newStock }));
  };

  const handleCheckout = () => {
    if (!isLoggedIn) {
      Swal.fire({
        title: "Login Required",
        text: "Please log in to proceed to checkout.",
        icon: "warning",
        showClass: {
            popup: `animate__animated animate__fadeInUp animate__faster`,
        },
        hideClass: {
            popup: `animate__animated animate__fadeOutDown animate__faster`,
        },
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            confirmButton: 'my-confirm-button-class',
        },
    });
      return;
    }
    navigate('/checkout'); // Redirect to checkout
  };

  return (
    <>
      <BannerPages itemOne={t('singleCard.cart')} itemTwo={t('header.home')} />
      <div className="basket p-5">
        <h2>{t('singleCard.basket.titleShop')}</h2>
        <div className="container">
          <Table bordered hover>
            <thead>
              <tr className=' head text-center'>
                <th></th>
                <th>{t('singleCard.basket.image')}</th>
                <th>{t('singleCard.basket.title')}</th>
                <th>{t('singleCard.basket.price')}</th>
                <th>{t('singleCard.basket.quantity')}</th>
                <th>{t('singleCard.basket.total')}</th>
              </tr>
            </thead>
            <tbody className=' body text-center'>
              {items.map(item => (
                <tr key={item.id}>
                  <td>
                    <RiDeleteBin5Line className='icon' onClick={() => handleRemoveItem(item.id)} />
                  </td>
                  <td><Link to={`/products/${slugify(item.title)}`}><img src={item.imgOne} alt={item.title} width={100} /></Link></td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <div className="quantity-controls">
                      <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                      {item.quantity}
                      <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} disabled={item.quantity >= item.stock}>+</button>
                    </div>
                  </td>
                  <td>${(item.quantity * item.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table >
          <Table bordered className="cart-total-table p-5">
            <thead>
              <tr>
                <th>{t('singleCard.basket.cartTotal')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${cartTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
          <Button onClick={handleCheckout} className='btn'>{t('checkout.title')}</Button>
        </div>
      </div>
    </>
  );
};

export default Basket;
