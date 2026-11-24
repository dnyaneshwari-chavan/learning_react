
import { useCart } from "../context/Cartcontext";
import React, { useState } from "react";

const products = [
  { id: 1, name: "Classic Black Dress", price: 2499, category: "Women", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600" },
  { id: 2, name: "Men's Casual Shirt", price: 1499, category: "Men", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600" },
  { id: 3, name: "Elegant Handbag", price: 1999, category: "Accessories", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600" },
  { id: 4, name: "Summer Outfit", price: 1799, category: "Women", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600" },
  { id: 5, name: "Premium Jacket", price: 2999, category: "Men", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600" },
  { id: 6, name: "Stylish Sunglasses", price: 999, category: "Accessories", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600" }
];

const Shop = () => {
    const { addToCart } = useCart();
  const [category, setCategory] = useState("All");

  const filteredProducts = category === "All"
    ? products
    : products.filter((product) => product.category === category);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <p className="text-uppercase text-secondary">Discover Your Style</p>
        <h1 className="fw-bold">Our Collection</h1>
        <p>Explore the latest trends and timeless fashion.</p>
      </div>

      <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
        {["All", "Women", "Men", "Accessories"].map((item) => (
          <button
            key={item}
            className={`btn ${category === item ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
            <div className="card border-0 h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "350px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="fw-semibold">{product.name}</h5>
                <p className="text-secondary">₹{product.price}</p>
                <button
  className="btn btn-dark"
  onClick={() => addToCart(product)}
>
  Add to Cart
</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
