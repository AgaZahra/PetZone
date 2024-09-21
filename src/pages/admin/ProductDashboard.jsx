import React from "react";
import { Link } from "react-router-dom";
import { productremove } from "../../tools/slices/productSlice";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ProductDashboard = () => {
  const productData = useSelector((p) => p.product);
  const dispatch = useDispatch();

  return (
    <div className="mt-5 col-12" style={{ borderRight: "1px solid #000" }}>
      <h3 className="text-danger">Products</h3>
      <Link to="/addproduct" className="btn btn-dark">
        Add Product
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Photo</th>
            <th scope="col">Category</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Tag</th>
            <th scope="col">Stock</th>
            <th scope="col">New</th>
            <th scope="col">Sale</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((item,index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img src={item.imgOne} alt={item.id} width={70} />
              </td>
              <td>{item.category}</td>
              <td>{item.title}</td>
              <td>{item.desc}</td>
              <td>{item.price}</td>
              <td>{item.tag}</td>
              <td>{item.stock}</td>
              <td>{item.new}</td>
              <td>{item.sale}</td>
              <td>
                <Link to={`/editproduct/${item.id}`} className="btn btn-warning">
                  Edit
                </Link>
              </td>
              <td>
                <Button
                  variant="danger ms-3"
                  onClick={() => {
                    dispatch(productremove(item.id));
                  }}
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDashboard;
