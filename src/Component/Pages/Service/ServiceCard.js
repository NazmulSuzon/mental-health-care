import React from "react";
import { Card, Col, Row} from "react-bootstrap";
import './ServiceCard.css'

const ServiceCard = (props) => {
  
    // console.log(props);
    const {title, img, details} = props.service;

  return (
    <>
        {/* <p>gvfugyfer eui hgfriu buiv</p> */}
        <Col lg={4}>
            <Card className="service-card">
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {details}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    </>
  );
};

export default ServiceCard;
