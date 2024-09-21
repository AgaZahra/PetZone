import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../tools/slices/productSlice";

const AddProduct = () => {
  const [imgOne, setImgOne] = useState('');
  const [imgTwo, setImgTwo] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [desc, setDesc] = useState('');
  const [tag, setTag] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');

  const categoryData = useSelector((p) => p.category);
  const dispatch = useDispatch();

  const sendData = (e) => {
    e.preventDefault();
    
    // Inputların boş olub olmadığını yoxla
    if (!imgOne || !imgTwo || !title || !price || !size || !desc || !tag || !stock || !category) {
      alert('Please fill out all fields!');
      return; // Boşdursa form submit etmə
    }

    // Əgər bütün sahələr doludursa, məhsulu əlavə et
    dispatch(
      add({
        imgOne,
        imgTwo,
        title,
        price,
        size,
        desc,
        tag,
        stock,
        category,
      })
    );

    // Formu təmizləyin (optional)
    setImgOne('');
    setImgTwo('');
    setTitle('');
    setPrice('');
    setSize('');
    setDesc('');
    setTag('');
    setStock('');
    setCategory('');
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">Product Add</h1>
      <form className="col-4" onSubmit={sendData}>
        <div className="mb-3">
          <label className="form-label">Image One</label>
          <input
            value={imgOne}
            onChange={(e) => setImgOne(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image Two</label>
          <input
            value={imgTwo}
            onChange={(e) => setImgTwo(e.target.value)}
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
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Size</label>
          <input
            value={size}
            onChange={(e) => setSize(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tag</label>
          <input
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-select mb-4"
          >
            {categoryData.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit" variant="success">
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
