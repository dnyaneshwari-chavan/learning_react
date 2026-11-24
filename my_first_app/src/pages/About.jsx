
import React from "react";

const About = () => {
  return (
    <div>
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
              alt="LUXE fashion store"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-lg-6">
            <p className="text-secondary text-uppercase">Our Story</p>
            <h1 className="fw-bold display-5">Style That Defines You.</h1>
            <p className="text-secondary mt-4">
              Welcome to LUXE, where fashion meets elegance.
              We believe that every individual deserves to express
              their personality through unique and timeless styles.
            </p>
            <p className="text-secondary">
              Our collection is carefully selected to bring you
              quality, comfort and confidence for every occasion.
            </p>
            <button className="btn btn-dark mt-3">Explore Collection</button>
          </div>
        </div>
      </section>

      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose LUXE?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <h4>Premium Quality</h4>
              <p className="text-white-50">Quality fashion for everyday elegance.</p>
            </div>
            <div className="col-md-4">
              <h4>Latest Trends</h4>
              <p className="text-white-50">Discover styles that inspire you.</p>
            </div>
            <div className="col-md-4">
              <h4>Customer First</h4>
              <p className="text-white-50">Your satisfaction is our priority.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
