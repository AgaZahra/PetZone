import React from 'react';
import { useWishlist } from 'react-use-wishlist';
import { useCart } from 'react-use-cart'; // useCart hook-u əlavə edilir
import { useToast, Box } from "@chakra-ui/react"; // Chakra UI import
import { CiHeart } from 'react-icons/ci';
import { AiFillHeart } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import BannerPages from '../components/BannerPages';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TiDelete } from "react-icons/ti";
import slugify from 'slugify';

export const WishlistBtn = ({ wishlistData }) => {
  const { t } = useTranslation();
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();
  const toast = useToast(); // Toast funksiyasını əldə edirik

  const toggleWishlist = (product) => {
    if (inWishlist(product.id)) {
      removeWishlistItem(product.id);
    } else {
      addWishlistItem(product);
      // Wishlist-ə əlavə olunduqda toast göstəririk
      toast({
        title: t('singleCard.wishlist.alert'),
        status: "success",
        position: "top-right",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <span onClick={() => toggleWishlist(wishlistData)}>
      {inWishlist(wishlistData.id) ? (
        <AiFillHeart className="card-icon" />
      ) : (
        <CiHeart className="card-icon" />
      )}
    </span>
  );
};

export const Wishlist = () => {
  const { t } = useTranslation();
  const { items, isEmpty, removeWishlistItem } = useWishlist();
  const { addItem } = useCart(); // Sepətə məhsul əlavə etmək üçün useCart-dan addItem funksiyasını alırıq
  const toast = useToast();
  const isLoggedIn = localStorage.getItem('username');


  // Add to Cart funksiyası
  const handleAddToCart = (item) => {

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
    if (item.stock <= 0) {
      toast({
        title: t('singleCard.modal.alert.outOfStock'),
        status: "error",
        position: "top-right",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    addItem(item); // Məhsulu sepətə əlavə edir
    toast({
      title:t('singleCard.alert.successAdd'),
      status: "success",
      position: "top-right",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div className="wishlist">
      <BannerPages itemOne={t('singleCard.wishlist.name')} itemTwo={t('header.home')} />
      <h2>{t('singleCard.wishlist.titleWish')}</h2>
      <div className="container">
        {isEmpty ? (
          <div className="empty-wishlist">
            <h2>{t('singleCard.wishlist.empty')}</h2>
            <Link to='/shop' className='btn'>{t('singleCard.wishlist.back')} </Link>
          </div>
        ) : (
          <Table bordered hover responsive >
            <thead>
              <tr className='head text-center'>
                <th></th>
                <th>{t('singleCard.basket.image')}</th>
                <th>{t('singleCard.basket.title')}</th>
                <th>{t('singleCard.basket.price')}</th>
                <th>{t('singleCard.basket.stock')}</th>
                <th>{t('singleCard.modal.addBtn')}</th>
              </tr>
            </thead>
            <tbody className='body text-center'>
              {items.map(item => (
                <tr key={item.id}>
                  <td>
                    <span
                      onClick={() => removeWishlistItem(item.id)}
                      style={{ cursor: 'pointer', color: 'red' }} >
                      <TiDelete className='icon'/>
                    </span>
                  </td>
                  <td><Link to={`/products/${slugify(item.title)}`}><img src={item.imgOne} alt={item.title} width={100} /></Link></td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.stock}</td>
                  <td>
                    <button
                      className=" add-to-cart"
                      onClick={() => handleAddToCart(item)} // Add to Cart funksiyasını çağırırıq
                      disabled={item.stock <= 0} // Stok yoxlanışı
                    >
                      {t('singleCard.modal.addBtn')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};
