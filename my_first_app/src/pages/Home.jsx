
const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 hero-content">
              <p className="hero-tag">NEW COLLECTION 2026</p>

              <h1>
                Discover Your
                <br />
                <span>Own Style.</span>
              </h1>

              <p className="hero-description">
                Elevate your wardrobe with timeless fashion.
                Explore our latest collection and redefine
                your everyday style.
              </p>

              <a href="/shop" className="btn shop-btn">
                SHOP NOW <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <div className="col-lg-6">
              <div className="hero-image">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000"
                  alt="Fashion collection"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="collection-section container">
        <div className="section-heading">
          <p>EXPLORE OUR STYLE</p>
          <h2>Shop By Category</h2>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="category-card">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700"
                alt="Women's fashion"
              />
              <h3>Women</h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="category-card">
              <img
                src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=700"
                alt="Men's fashion"
              />
              <h3>Men</h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="category-card">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700"
                alt="Fashion accessories"
              />
              <h3>Accessories</h3>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
