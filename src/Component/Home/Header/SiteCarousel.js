import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import image1 from "../../../images/Carousel/image1.jpg";
import image2 from "../../../images/Carousel/image2.png";

const SiteCarousel = () => {
    return (
        <div className="carousel">

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="First slide" />
            <Carousel.Caption className="text-start">
            <div className=" fs-5 carousel-text ps-5">
            <h1 className="text-info">Fast Recovery</h1>
            <h1 className="text-info">Lasting Health</h1>
              <p className="text-dark">Recovery from mental disorders and/or 
                <br /> substance abuse disorders is a process
                <br /> of change through which individuals:
                <br /> Improve their health and wellness. <br /> Live a self-directed life.</p>
                <Button className="border-0 carousel-button py-2">Get An Appointmen</Button>
            </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <Carousel.Caption className="text-start">
            <div className=" fs-5 carousel-text ps-5">
            <h1 className="text-info">Fast Recovery</h1>
            <h1 className="text-info">Lasting Health</h1>
              <p className="text-dark">Recovery from mental disorders and/or 
                <br /> substance abuse disorders is a process
                <br /> of change through which individuals:
                <br /> Improve their health and wellness. <br /> Live a self-directed life.</p>
                <Button className="border-0 carousel-button py-2">Get An Appointmen</Button>
            </div>\
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
    );
};

export default SiteCarousel;