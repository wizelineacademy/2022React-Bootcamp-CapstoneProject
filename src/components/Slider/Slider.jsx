import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';

const Slider = ({ featuredBanners, isLoading }) => {
    return isLoading ? (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    ) : (
        <div className="container" style={{ marginBottom: '2%' }}>
            <Carousel variant="dark">
                {featuredBanners?.results.map((banner) => {
                    return (
                        <Carousel.Item interval={1500} key={banner.id}>
                            <img
                                className="d-block w-100"
                                src={banner.data.main_image.url}
                                alt={banner.data.main_image.alt}
                            />
                            <Carousel.Caption>
                                <h3 style={{ color: '#8F3927' }}>
                                    {banner.data.title}
                                </h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Slider;
