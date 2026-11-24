
const About = () => {
    return (
        <section className="py-5 bg-light" id="about">
            <div className="container">

                <div className="text-center mb-5">
                    <h1>About Us</h1>
                    <p className="text-muted">
                        Learn more about our website and services.
                    </p>
                </div>

                <div className="row align-items-center">

                    <div className="col-md-6">
                        <h2>Who We Are</h2>

                        <p>
                            Welcome to My First Site!
                            We are passionate about providing
                            quality products and services
                            to our customers.
                        </p>

                        <p>
                            Our goal is to provide a simple,
                            user-friendly and enjoyable
                            experience for everyone.
                        </p>

                        <button className="btn btn-primary">
                            Read More
                        </button>
                    </div>

                    <div className="col-md-6 text-center">
                        <img
                            src="/src/assets/hero.png"
                            className="img-fluid rounded"
                            alt="About Us"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
