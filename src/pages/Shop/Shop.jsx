import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SingleCard from "../../components/SingleCard";
import { Col, Row } from "react-bootstrap";
import Paginition from "../../components/Paginition";
import { FaRegCircleDot } from "react-icons/fa6";
import BannerPages from "../../components/BannerPages";
import filteredImg from "../../assets/media/image/filtered-img.jpg";
import { useTranslation } from "react-i18next";

const Shop = () => {
  const { t }=useTranslation();
  const products = useSelector((state) => state.product);
  const productLang=products.filter(item=>item.lang==t('productLang'));
  // console.log(productLang);
  
  const [filteredData, setFilteredData] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('price_desc'); // Default sıralama
  const itemsPerPage = 8; // Hər səhifədə göstəriləcək məhsul sayı

  // İlk olaraq "All Products" olaraq yükləyin
  useEffect(() => {
    setFilteredData(products); // Bütün məhsulları varsayılan olaraq yükləyir
  }, [products]);

  // Kateqoriya üzrə filter
  const filterProduct = (cat) => {
    if (cat === 'All') {
      setFilteredData(products);
    } else {
      const filtered = products.filter((p) => p.category === cat);
      setFilteredData(filtered);
    }
    setCurrentPage(1); // Filtr edildikdə ilk səhifəyə geri dönmək
  };

  // Tag üzrə filter
  const filterTag = (tag) => {
    if (tag === 'All') {
      setFilteredData(products);
    } else {
      const filtered = products.filter((p) => p.tag === tag);
      setFilteredData(filtered);
    }
    setCurrentPage(1); // Filtr edildikdə ilk səhifəyə geri dönmək
  };

  // Məhsulları sıralamaq
  const sortProducts = (productsToSort) => {
    return [...productsToSort].sort((a, b) => {
      if (sortOrder === 'price_desc') {
        return b.price - a.price;
      } else if (sortOrder === 'price_asc') {
        return a.price - b.price;
      } else if (sortOrder === 'title_asc') {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === 'title_desc') {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });
  };

  const sortedProducts = sortProducts(filteredData);

  // Məhsulları səhifələmək
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  // Səhifə nömrəsi dəyişdikdə işləyən funksiya
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div className="shop">
        <BannerPages itemOne={t('shop.name')} itemTwo={t('header.home')} />

        <Row className="p-5">
          <Col sm={12} md={12} lg={4}>
            <div className="filtered">
              <h5>{t('shop.cat')} </h5>
              <ul className="list-group">
                <li className="my-list-title" onClick={() => filterProduct('All')}>
                  {t('shop.product')}
                </li>
                {[...new Set(products.map((item) => item.category))].map((category) => (
                  <li key={category} className="my-list" onClick={() => filterProduct(category)}>
                    <FaRegCircleDot className="icon" />
                    {category}
                  </li>
                ))}
              </ul>

              <h5 className="mt-4">{t('shop.tag')} </h5>
              <ol className="list-group ">
                <li className="my-list-title" onClick={() => filterTag('All')}>
                  {t('shop.allTag')}
                </li>
                {[...new Set(products.map((item) => item.tag))].map((tag) => (
                  <li key={tag} className="my-list" onClick={() => filterTag(tag)}>
                    {tag}
                  </li>
                ))}
              </ol>
              <img src={filteredImg} alt="image" />
            </div>
          </Col>

          <Col sm={12} md={12} lg={8}>
            <div className="sort-options">
              <label>
                {t('shop.sort.sort')}
                <select value={sortOrder} onChange={(e) => {
                  setSortOrder(e.target.value);
                  setCurrentPage(1); // Sıralama dəyişdikdə ilk səhifəyə geri dönmək
                }}>
                  <option value="price_desc">{t('shop.sort.default')}</option>
                  <option value="price_desc">{t('shop.sort.priceHigh')}</option>
                  <option value="price_asc">{t('shop.sort.priceLow')}</option>
                  <option value="title_asc">{t('shop.sort.az')}</option>
                  <option value="title_desc">{t('shop.sort.za')}</option>
                </select>
              </label>
            </div>
            <Row>
              {currentProducts.map((item, index) => (
                <SingleCard allData={item} key={index} />
              ))}
            </Row>
          </Col>
        </Row>
        <Paginition
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Shop;
