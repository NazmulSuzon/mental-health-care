import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DisorderCard = (props) => {
    const {title, img, details,id} = props?.data;
    return (
        <>
            <Col lg={4}>
            <Card
            style={{
              minHeight:'400px'
            }}
            className="service-card">
              <Card.Img style={{height:'230px'}} variant="top" src={img} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {details}
                </Card.Text>
                {/* <ButclassName="bg-info mt-3 text-decoration-none rounded fs-5 p-2 text-light"ton className="bg-info mt-3">View More</Button> */}
                
                <Link className='d-inline-block mx-auto w-100 border mt-3' to={`/disorder-details/${id}`}>
                  
                  <Button className='w-100'>View More</Button>
                  
                  </Link>
                
              </Card.Body>
            </Card>
          </Col>
        </>
    );
};

export default DisorderCard;