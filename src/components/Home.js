import React from 'react'
import Products from './Products';

const Home = () => {
    return (
        <>
            <div className="container px-0" style={{ marginTop: "-10em" }}>
                <div id="ElectronicsCarouselInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src="carousel-pics/img4.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="carousel-pics/img1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="carousel-pics/img2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="carousel-pics/img3.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#ElectronicsCarouselInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#ElectronicsCarouselInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
                <Products />
            </div>
        </>
    )
}

export default Home;