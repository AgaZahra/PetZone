import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert';
import { updatestock } from '../tools/slices/productSlice';

const Basket = () => {
  const { isEmpty, items, updateItemQuantity, removeItem, cartTotal, totalItems } = useCart();
  const dispatch = useDispatch();
  const [stock, setStock] = useState({});

  useEffect(() => {
    const newStock = {};
    items.forEach(item => {
      newStock[item.id] = item.stock; // stok dəyərini hər bir məhsul üçün ayırır
    });
    setStock(newStock);
  }, [items]);

  if (isEmpty) {
    return <h2>Your cart is empty</h2>;
  }

  const handleRemoveItem = (id) => {
    const itemToRemove = items.find(item => item.id === id); // Silinən məhsulu tapırıq
    const newStock = itemToRemove.stock ; // Stoku silinən miqdar qədər artırırıq

    Swal({
      title: "Are you sure?",
      text: "Do you really want to remove this item from the cart?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        removeItem(id); // Məhsulu silirik
        dispatch(updatestock({ id, newStock })); // Stok yalnız bir dəfə güncellenir
        Swal("Item has been removed from the cart!", { icon: "success" });
      }
    });
  };

  const handleQuantityChange = (id, newQuantity) => {
    const currentStock = items.find(item => item.id === id).stock; // cari stok dəyərini alır
    if (newQuantity > currentStock) {
      Swal("Sorry", "Not enough stock!", "error");
      return;
    }

    updateItemQuantity(id, newQuantity);

    // Update stock
    const newStock = currentStock - newQuantity;
    dispatch(updatestock({ id, newStock }));
  };

  return (
    <div className="basket">
      <h2>Your Shopping Cart</h2>
      <Row>
        {items.map(item => (
          <Col key={item.id} sm={12} md={6} lg={4}>
            <div className="basket-item">
              <img src={item.imgOne} alt={item.title} />
              <div className="basket-item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: 
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)} 
                    disabled={item.quantity <= 1}>
                    -
                  </button>
                  {item.quantity}
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)} 
                    disabled={item.quantity >= item.stock}>
                    +
                  </button>
                </p>
                <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>Remove</Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <h3>Total: ${cartTotal}</h3>
    </div>
  );
};

export default Basket;
