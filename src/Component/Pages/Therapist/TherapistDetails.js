import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './TherapistDetails.css'

const TherapistDetails = (props) => {
    const {name, job, img} = props.details;
    return (
        <>
            <Col lg={4}>
            <Card className="therapist-card">
              <Card.Img variant="top" src={img} />
              <Card.Body className="text-center">
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {job}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </>
    );
};

export default TherapistDetails;