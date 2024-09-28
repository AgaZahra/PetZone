import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
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
import slugify from 'slugify';
import { useSelector } from 'react-redux';
import { CiHeart } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa';

const Header = () => {
  const { t } = useTranslation();
  const { totalItems } = useCart();
  const { items } = useWishlist();
  const totalItemsWishlist = items.length;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [keyword, setKeyword] = useState('');

  const products = useSelector((state) => state.product);

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
      <Navbar.Brand as={NavLink} to="/" className='logo'>
        <img src={Logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle onClick={()=>{
          document.body.classList.toggle('no-scroll');
      }} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto menu">
          <Nav.Link as={NavLink} to="/" className='menu-item'>
            {t('header.home')}
          </Nav.Link>
          <Nav.Link as={NavLink} to="/shop" className='menu-item'>
            {t('header.shop')}
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className='menu-item'>
            {t('about.header')}
          </Nav.Link>
          <Nav.Link as={NavLink} to="/faq" className='menu-item'>
            {t('faq.name')}
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contactus" className='menu-item'>
            {t('header.contactus')}
          </Nav.Link>
        </Nav>

        <Nav className='ms-auto icon'>
          <LanguageSwitcher />
          <ThemeToggle />
          
          <Dropdown>
            <Dropdown.Toggle className='menu-item'>
              <FiUser className='icon icon-item user-icon' />
              {isLoggedIn ? <span className='users-name'>{t('authPage.hiUsers')}, {username}</span> : null}
            </Dropdown.Toggle>
            <Dropdown.Menu className='dropdown-users'>
              {!isLoggedIn ? (
                <Dropdown.Item as={NavLink} to="/login" className='menu-item'>
                  {t('authPage.btnIn')}/{t('authPage.btnUp')}
                </Dropdown.Item>
              ) : (
                <Dropdown.Item onClick={handleLogout} className='menu-item'>
                  {t('authPage.logout')} <IoLogInOutline className='icon' />
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <div className='search'>
            <p data-bs-toggle="modal" data-bs-target="#exampleModal">
              <RiSearch2Line className='search-icon' />
            </p>
            <div className="modal" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{t('search.title')}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                    <div className="input-group mb-3">
                      <input onChange={e => setKeyword(e.target.value)} type="text" className="form-control" placeholder={t('search.input')} />
                      <button className="btn btn-warning" type="button">{t('search.searchBtn')}</button>
                    </div>
                    <ul className="list-group">
                      {!keyword ? " " :
                        products.filter(p => p.title.toLowerCase().includes(keyword.toLowerCase())).map(item => (
                          <Link className='a' to={`/products/${slugify(item.title)}`} key={item.id}>
                            <li data-bs-dismiss="modal" className="list-group-item">
                              <img src={item.imgOne} width={70} alt={item.title} />
                              <span className='ms-3'>{item.title}</span>
                            </li>
                          </Link>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Nav.Link as={NavLink} to="/cart" className='icon-item'>
            <FiShoppingBag />
            <span className='basket-icon'>{totalItems}</span>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/wishlist" className='icon-item'>
          <FaRegHeart />
            <span className='wishlist-icon'>{totalItemsWishlist}</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
