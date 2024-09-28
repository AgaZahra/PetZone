import React from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { categoryremove } from "../../tools/slices/categorySlice";

const CategoryDashboard = () => {
  const categoryData = useSelector((p) => p.category);
  const dispatch = useDispatch();

  return (
    <div className="mt-5 p-5 col-4">
      <h2>Category</h2>
      <Link to="/addcategory" className="btn btn-success m-5">
        Add Category
      </Link>
      <Link to="/dashboard" className="btn btn-warning my-5">
        Back
      </Link>
      <Table bordered hover className="table">
        <thead className="head">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Icon</th>
            <th scope="col">Title</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody className="body">
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
      </Table>
    </div>
  );
};

export default CategoryDashboard;
