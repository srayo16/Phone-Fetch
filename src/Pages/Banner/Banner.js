import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 handleimg"
                        src= {banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Your Phone your life</h3>
                        <p>Nowadays phones are very useful for out life.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  w-100 handleimg"
                        src= {banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Connect to world</h3>
                        <p>Nowadays, without phone feels like disconnected to global.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  w-100 handleimg"
                        src= {banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Your phone contains your lifestyle</h3>
                        <p>Your phone's brand-price contains your attitude and lifestyle.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;