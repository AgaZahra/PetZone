import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../../../tools/slices/productSlice";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.product);
  const uniqueData = data.find((product) => product.id.toString() === id);

  const [imgOne, setImgOne] = useState(uniqueData ? uniqueData.imgOne : "");
  const [imgTwo, setImgTwo] = useState(uniqueData ? uniqueData.imgTwo : "");
  const [title, setTitle] = useState(uniqueData ? uniqueData.title : "");
  const [price, setPrice] = useState(uniqueData ? uniqueData.price : "");
  const [size, setSize] = useState(uniqueData ? uniqueData.size : "");
  const [desc, setDesc] = useState(uniqueData ? uniqueData.desc : "");
  const [tag, setTag] = useState(uniqueData ? uniqueData.tag : "");
  const [stock, setStock] = useState(uniqueData ? uniqueData.stock : "");
  const [category, setCategory] = useState(uniqueData ? uniqueData.category : "");
  const [sale, setSale] = useState(uniqueData ? uniqueData.sale : "");
  const [newProduct, setNewProduct] = useState(uniqueData ? uniqueData.newProduct : "");

  const categoryData = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const sendData = (e) => {
    e.preventDefault();
    dispatch(edit({ 
      id: uniqueData.id, 
      data: {
        imgOne,
        imgTwo,
        title,
        price,
        size,
        desc,
        tag,
        stock,
        category,
        sale,
        newProduct
      }
    }));
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">Edit Product</h1>
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
          <label className="form-label">Category</label>
          <select 
            className="form-select mb-4" 
            onChange={(e) => setCategory(e.target.value)} 
            value={category}
          >
            {categoryData.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
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
            type="number" 
            className="form-control" 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sale</label>
          <input 
            value={sale} 
            onChange={(e) => setSale(e.target.value)} 
            type="text" 
            className="form-control" 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">New </label>
          <input 
            value={newProduct} 
            onChange={(e) => setNewProduct(e.target.value)} 
            type="number" 
            className="form-control" 
          />
        </div>
        <Button type="submit" variant="warning">
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditProduct;
