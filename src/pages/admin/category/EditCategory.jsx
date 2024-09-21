import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { edit } from "../../../tools/slices/categorySlice";
import { useParams } from "react-router-dom";

const EditCategory = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.category);
  const uniqueData = data.find((category) => category.id.toString() === id);

  const [icon, setIcon] = useState (uniqueData ? uniqueData.icon : "");
  const [title, setTitle]= useState (uniqueData ? uniqueData.title : "");
  const dispatch = useDispatch();

  const sendData = (e) => {
    e.preventDefault();
    dispatch(edit({ 
      id: uniqueData.id, 
      data: {
        icon,
        title
      }
    }));
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">Edit Categoryt</h1>
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
                <Button type="submit" variant="warning">
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditCategory;
