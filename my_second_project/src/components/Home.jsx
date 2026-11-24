
import FashionImage from '../assets/handbag.jpg';

const Home = () => {
    return (
        <div>
            <section className="bg-light py-5" id="Home">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-6 p-4">
                            <h1>Welcome to My Site</h1>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>

                            <p>
                                Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.
                            </p>

                            <button className="btn btn-primary">
                                Explore More
                            </button>
                        </div>

                        <div className="col-md-6 p-4">
                            <img
                                src={FashionImage}
                                className="img-fluid rounded"
                                alt="Fashion Handbag"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
