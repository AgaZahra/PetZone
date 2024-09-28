import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import BannerPages from '../components/BannerPages';
import Cards from 'react-credit-cards-2';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { t } = useTranslation();
  const { items, cartTotal, isEmpty } = useCart();
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    number: '',
    expiry: '',
    cvc: '',
  });
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty) {
      Swal.fire({
        title: t('checkout.alert.empty'),
        icon: 'warning',
      });
      return;
    }

    Swal.fire({
      title: t('checkout.alert.payment'),
      icon: 'info',
      didOpen: () => {
        Swal.showLoading();
      },
    });

    setTimeout(() => {
      Swal.fire({
        title: t('checkout.alert.success'),
        text: t('checkout.alert.successText'),
        icon: 'success',
      }).then(() => {
        navigate('/checkoutsuccess'); // İstədiyiniz səhifəyə yönləndirir
      });
      // Clear form
      setFormData({
        name: '',
        email: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
        number: '',
        expiry: '',
        cvc: '',
      });
    }, 2000);
  };

  return (
    <div className="checkout">
      <BannerPages itemOne={t('checkout.title')} itemTwo={t('header.home')} />
      <h2>{t('checkout.header')}</h2>
      <p>{t('checkout.p')}</p>
      <div className="container">
        <Form onSubmit={handleSubmit} className='checkout-form'>
          <Form.Group controlId="formName" >
            <Form.Label>{t('checkout.name')}</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>{t('checkout.email')}</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formAddress">
            <Form.Label>{t('checkout.address')}</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formCity">
            <Form.Label>{t('checkout.city')}</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formCountry">
            <Form.Label>{t('checkout.country')}</Form.Label>
            <Form.Control
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPostalCode">
            <Form.Label>{t('checkout.postalCode')}</Form.Label>
            <Form.Control
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </Form.Group>
          
          <h3>{t('checkout.cardDetails')}</h3>
          <Cards
            number={formData.number}
            name={formData.name}
            expiry={formData.expiry}
            cvc={formData.cvc}
            focused={focused}
          />
          <Form.Group controlId="formCardNumber">
            <Form.Label>{t('checkout.cardNumber')}</Form.Label>
            <Form.Control
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              onFocus={(e) => setFocused(e.target.name)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formExpiry">
            <Form.Label>{t('checkout.expiry')}</Form.Label>
            <Form.Control
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              onFocus={(e) => setFocused(e.target.name)}
              placeholder="MM/YY"
              required
            />
          </Form.Group>
          <Form.Group controlId="formCVC">
            <Form.Label>{t('checkout.cvc')}</Form.Label>
            <Form.Control
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              onFocus={(e) => setFocused(e.target.name)}
              required
            />
          </Form.Group>
          <Button className='btn-checkout m-3' type="submit">
            {t('checkout.btn')}
          </Button>
        </Form>
        <div className="total p-2 ">
          <h4>{t('checkout.total')}:<br /> ${cartTotal.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
