import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { categoryremove } from "../../tools/slices/categorySlice";

const CategoryDashboard = () => {
  const categoryData = useSelector((p) => p.category);
  const dispatch = useDispatch();

  return (
    <div className="mt-5 col-4">
      <h3>Category</h3>
      <Link to="/addcategory" className="btn btn-success">
        Add Category
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Icon</th>
            <th scope="col">Title</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {categoryData.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img src={item.icon} alt={item.id} width={70} />
              </td>
              <td>{item.title}</td>
              <td>
                <Link to={`/editcategory/${item.id}`} className="btn btn-warning">
                  Edit
                </Link>
              </td>
              <td>
                <Button
                  variant="danger ms-3"
                  onClick={() => {
                    dispatch(categoryremove(item.id));
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

export default CategoryDashboard;
