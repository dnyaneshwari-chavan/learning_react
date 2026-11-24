
import React from "react";
import { useCart } from "../context/Cartcontext";

const Cart = () => {
  const { cart, setCart } = useCart();

  const increaseQty = (id) => {
    setCart(cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Shopping Cart</h1>

      {cart.length === 0 ? (
        <h4 className="text-secondary text-center py-5">
          Your Cart is Empty!
        </h4>
      ) : (
        <>
          {cart.map((item) => (
            <div className="row align-items-center border-bottom py-3" key={item.id}>
              <div className="col-3 col-md-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid rounded"
                />
              </div>

              <div className="col-9 col-md-4">
                <h5>{item.name}</h5>
                <p>₹{item.price}</p>
              </div>

              <div className="col-6 col-md-3">
                <button className="btn btn-outline-dark btn-sm"
                  onClick={() => decreaseQty(item.id)}>
                  -
                </button>

                <span className="mx-3">{item.quantity}</span>

                <button className="btn btn-outline-dark btn-sm"
                  onClick={() => increaseQty(item.id)}>
                  +
                </button>
              </div>

              <div className="col-6 col-md-3 text-end">
                <button className="btn btn-outline-danger btn-sm"
                  onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-end mt-4">
            <h3>Total: ₹{total}</h3>
            <button className="btn btn-dark px-4 py-2 mt-2">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
