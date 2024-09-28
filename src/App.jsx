import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header/Header'
import Home from './pages/Home/Home';
import Banner from './layout/Banner/Banner';
import BackToTop from './layout/BackToTop';
import NotFoundPage from './layout/NotFoundPage';
import Footer from './layout/Footer/Footer';
import ContactUs from './pages/ContactUS/ContactUs';
import Shop from './pages/Shop/Shop';
import AddProduct from './pages/admin/product/AddProduct';
import EditProduct from './pages/admin/product/EditProduct';
import Users from './pages/AuthPage/Users';
import ProductDashboard from './pages/admin/ProductDashboard';
import CategoryDashboard from './pages/admin/CategoryDashboard';
import AddCategory from './pages/admin/category/AddCategory';
import EditCategory from './pages/admin/category/EditCategory';
import Basket from './pages/Basket';
import { ProductDetails } from './pages/ProductDetails';
import  {Wishlist} from './pages/Wishlist';
import Faq from './pages/Faq/Faq';
import ScrollToTop from './components/ScrollToTop';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './pages/CheckoutSuccess';
import About from './pages/About/About';
import {AdminLogin, Dashboard} from './pages/admin/AdminLogin';

const App = () => {
  return (
    <BrowserRouter>
  
      <Banner />
      <Header />
      <BackToTop />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/faq' element={<Faq/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>

        {/* ADMIN-PANEL */}
        <Route path="/admin" element={<AdminLogin/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/addcategory" element={<AddCategory />}></Route>
        <Route path="/editcategory/:id" element={<EditCategory />}></Route>
        <Route path="/editproduct/:id" element={<EditProduct />}></Route>
        <Route path="/productdashboard" element={<ProductDashboard />}></Route>
        <Route path="/categorydashboard" element={<CategoryDashboard/>}></Route>
        {/* ADMIN-PANEL-END */}


        <Route path='/products/:slug'element={<ProductDetails/>}></Route>
        <Route path='/cart'element={<Basket/>}></Route>
        <Route path='/wishlist'element={<Wishlist/>}></Route>
        <Route path='/checkout'element={<Checkout/>}></Route>
        <Route path='/checkoutsuccess'element={<CheckoutSuccess/>}></Route>


        <Route path="/login" element={<Users />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App;
