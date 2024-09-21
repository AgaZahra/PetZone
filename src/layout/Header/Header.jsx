import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/media/image/PetShop_Logo.svg';
import { LuHeart, LuSearch } from "react-icons/lu";
import { FiShoppingBag, FiUser } from 'react-icons/fi';
import { FaRegCircleUser } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../i18n/LanguageSwitcher';
import { Menu, MenuButton, MenuList, MenuItem, useDisclosure, Box } from '@chakra-ui/react';
import { useCart } from 'react-use-cart';
import { useSelector } from 'react-redux';
import { CiSearch } from 'react-icons/ci';
import slugify from 'slugify';


const Header = () => {
  const { t } = useTranslation();
  const {totalItems}=useCart();
  const products = useSelector((state) => state.product);
  console.log(products);
  
  const[keyword,setKeyword]=useState("");


// Menyu 1 üçün useDisclosure
const { isOpen: isOpenShop, onOpen: onOpenShop, onClose: onCloseShop } = useDisclosure();
// Menyu 2 üçün useDisclosure
const { isOpen: isOpenPages, onOpen: onOpenPages, onClose: onClosePages } = useDisclosure();
const { isOpen: isOpenUsers, onOpen: onOpenUsers, onClose: onCloseUsers } = useDisclosure();

  return (
    <>
      <Navbar bg="light" expand="lg" className='my-navbar'>

        <Navbar.Brand as={NavLink} to="/" className='logo'>
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menu">
            <Nav.Link as={NavLink} to="/" className='menu-item'>
              {t("header.home")}
            </Nav.Link>

            <Menu isOpen={isOpenShop}  >
              <Box onMouseEnter={onOpenShop} onMouseLeave={onCloseShop} >
                <MenuButton as={NavLink} to="/shop" className='menu-item'>
                  {t("header.shop")}
                </MenuButton>
                <MenuList className='dropdown' sx={{ zIndex: 99999 }}>
                  <MenuItem as={NavLink} to="/shop/category1" className='menu-item dp-item'>
                    test
                  </MenuItem>
                  <MenuItem as={NavLink} to="/shop/category2" className='menu-item dp-item'>
                    test1
                  </MenuItem>
                </MenuList>
              </Box>
            </Menu>


            <Nav.Link as={NavLink} to="/blog" className='menu-item'>
              {t("header.blog")}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" className='menu-item'>
              {t("header.services")}
            </Nav.Link>

            <Menu isOpen={isOpenPages}>
              <Box onMouseEnter={onOpenPages} onMouseLeave={onClosePages}>
                <MenuButton as={NavLink} to="/about" className='menu-item '>
                {t("header.pages")}  
                </MenuButton>
                <MenuList className='dropdown' sx={{ zIndex: 99999 }}>
                  <MenuItem as={NavLink} to="/about" className='menu-item dp-item'>
                    {t("header.about")}
                  </MenuItem>
                  <MenuItem as={NavLink} to="/faq" className='menu-item dp-item'>
                    {t("header.faq")}
                  </MenuItem>
                </MenuList>
              </Box>
            </Menu>
            <Nav.Link as={NavLink} to="/contactus" className='menu-item'>
              {t("header.contactus")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>


        <Nav className='icon'>
          <LanguageSwitcher />

          <Menu isOpen={isOpenUsers}  >
              <Box onMouseEnter={onOpenUsers} onMouseLeave={onCloseUsers} >
                <MenuButton as={NavLink} to="/authpage" className='menu-item'>
                <FiUser className=' icon icon-item user-icon'/>
                </MenuButton>
                <MenuList className='dropdown' sx={{ zIndex: 99999 }}>
                <MenuItem as={NavLink} to="/users" className='menu-item dp-item'>
                    Sign In /Sign Up
                  </MenuItem>
                  <MenuItem as={NavLink} to="/productdashboard" className='menu-item dp-item'>
                    P-Dasboard
                  </MenuItem>
                  <MenuItem as={NavLink} to="/categorydashboard" className='menu-item dp-item'>
                    C-Dasboard
                  </MenuItem>
                </MenuList>
              </Box>
            </Menu>

            <div>
          <button type="button" className="btn-warning " data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ zIndex: 99999999}}>
            <CiSearch />

          </button>

          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Search product</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <div className="input-group mb-3">
                    <input onChange={e => { setKeyword(e.target.value) }} type="text" className="form-control" placeholder="Enter product name" />
                    <button className="btn btn-warning" type="button" >Search</button>

                  </div>
                  <ul className="list-group">
                    {!keyword ? " " :
                      products.filter(p => p.title.toLowerCase().includes(keyword)).map(item => (
                        <Link className='a' to={`/products/${slugify(item.title)}`}>
                          <li data-bs-dismiss="modal" key={item.id} className="list-group-item">
                            <img src={item.imgOne} width={70} alt={item.title} />
                            <span className='ms-3'>{item.title}</span>
                          </li>
                        </Link>
                      ))}


                  </ul>

                </div>

              </div>
            </div>
          </div>
        </div>

         
          {/* <Nav.Link as={Link} to="/cart" className='icon-item'>
            <LuSearch />
          </Nav.Link> */}
          <Nav.Link as={Link} to="/cart" className='icon-item'>
            <FiShoppingBag />
            <span className='basket-icon'>
           {totalItems}
          </span>
          </Nav.Link>
          <Nav.Link as={Link} to="/wishlist" className='icon-item'>
            <LuHeart />
            <span className='wishlist-icon'>
           {totalItems}
          </span>
          </Nav.Link>
          
        

        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
