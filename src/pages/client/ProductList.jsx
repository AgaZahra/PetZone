import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProductList = () => {
  const [filterData, setFilterData] = useState([]);
  const productdata = useSelector((p) => p.product);
  const categorydata = useSelector((p) => p.category);

  const filterProduct = (cat) => {
    const filteredProducts = productdata.filter((p) => p.category === cat);
    setFilterData(filteredProducts);
  };
  

  return (
    <div>
      <h1 className="text-center my-5">Product List</h1>
      <div className="row mb-3">
        <div className="col-3">
          <button className="btn btn-danger" onClick={() => setFilterData([])}>All</button>
        </div>
        {categorydata.map((item) => (
          <div className="col-3" key={item.id}>
            <button className="btn btn-dark" onClick={() => filterProduct(item.title)}>{item.title}</button>
          </div>
        ))}
      </div>

      <Row className="g-5">
        {(filterData.length === 0 ? productdata : filterData).map((item, index) => (
          <SingleCard allData={item} key={index} />
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
