import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../../../tools/slices/categorySlice";
import { Link } from "react-router-dom";


const AddCategory = () => {
  const [icon, setIcon] = useState('');
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const sendData = (e) => {
    e.preventDefault();
      // Icon və title boşdursa, alert göstər
      if (!icon || !title) {
        alert("Please fill in both the Icon and Title fields!");
        return; // Formun submitedilməsini dayandırır
      }
  
      // Əgər icon və title doludursa, dispatch et
      dispatch(add({
        icon,
        title
      }));
  
      // Form submit olduqdan sonra input-ları təmizlə
      setIcon('');
      setTitle('');
   
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column m-5">
      <h1 className="my-5">Category Add</h1>
      <Link to="/categorydashboard" className="btn btn-warning">
        Back
      </Link>
      <form className="col-4" onSubmit={sendData}>
      <div className="mb-3">
          <label className="form-label">Icon</label>
          <input
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <Button type="submit" variant="success">Add</Button>
      </form>
    </div>
  );
};

export default AddCategory;
