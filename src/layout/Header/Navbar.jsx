import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FiShoppingBag, FiUser } from 'react-icons/fi';
import { RiSearch2Line } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import Logo from '../../assets/media/image/PetShop_Logo.svg';
import { IoLogInOutline } from 'react-icons/io5';
import LanguageSwitcher from '../../i18n/LanguageSwitcher';
import ThemeToggle from '../../components/ThemeToggle';

const MyHeader = () => {
  const { t } = useTranslation();
  const { totalItems } = useCart();
  const { items } = useWishlist();
  const totalItemsWishlist = items.length;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <Navbar expand="lg" className="my-navbar p-3">
        <Navbar.Brand as={NavLink} to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">{t('header.home')}</Nav.Link>
            <Nav.Link as={NavLink} to="/shop">{t('header.shop')}</Nav.Link>
            <Nav.Link as={NavLink} to="/about">{t('about.header')}</Nav.Link>
            <Nav.Link as={NavLink} to="/contactus">{t('header.contactus')}</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <LanguageSwitcher />
            <ThemeToggle />
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FiUser className="icon user-icon" />
                {isLoggedIn ? `${t('authPage.hiUsers')}, ${username}` : t('authPage.btnIn')}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {!isLoggedIn ? (
                  <Dropdown.Item as={NavLink} to="/login">
                    {t('authPage.btnIn')}/{t('authPage.btnUp')}
                  </Dropdown.Item>
                ) : (
                  <Dropdown.Item onClick={handleLogout}>
                    {t('authPage.logout')} <IoLogInOutline className="icon" />
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link as={NavLink} to="/cart">
              <FiShoppingBag />
              <span>{totalItems}</span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/wishlist">
              <RiSearch2Line />
              <span>{totalItemsWishlist}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default MyHeader;
