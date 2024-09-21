import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SingleCard from "../../components/SingleCard";
import { Col, Row } from "react-bootstrap";
import Paginition from "../../components/Paginition"; // Pagination componentini daxil edin

const Shop = () => {
  const products = useSelector((state) => state.product);
  const [filteredData, setFilteredData] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Hər səhifədə göstəriləcək məhsul sayı

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
      const filtered = products.filter((p) => p.tag === tag); // Tag uyğunluğunu yoxlayırıq
      setFilteredData(filtered);
    }
    setCurrentPage(1); // Filtr edildikdə ilk səhifəyə geri dönmək
  };

  // Məhsulları səhifələmək
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Səhifə nömrəsi dəyişdikdə işləyən funksiya
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div className="p-4">
        <Row>
          <Col sm={12} md={6} lg={3}>
            {/* Kateqoriya Filteri */}
            <h5>Filter by Category</h5>
            <ul className="list-group">
              <li
                className="list-group-item"
                onClick={() => filterProduct('All')}
              >
                All Products
              </li>
              {[...new Set(products.map((item) => item.category))].map((category) => (
                <li
                  key={category}
                  className="list-group-item"
                  onClick={() => filterProduct(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            {/* Tag Filteri */}
            <h5 className="mt-4">Filter by Tags</h5>
            <ul className="list-group">
              <li
                className="list-group-item"
                onClick={() => filterTag('All')}
              >
                All Tags
              </li>
              {[...new Set(products.map((item) => item.tag))].map((tag) => (
                <li
                  key={tag}
                  className="list-group-item"
                  onClick={() => filterTag(tag)}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Col>

          <Col sm={12} md={6} lg={9}>
            <Row className="p-4">
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
