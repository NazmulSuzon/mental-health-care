import React, { useEffect, useState } from 'react';
import AllTherapistData from '../../fakaData/therapists.json'
import { Row } from 'react-bootstrap';
import TherapistDetails from './TherapistDetails';
import './Therapist.css'

const Therapist = () => {
    const [therapistData, setTherapistData] = useState([]);
    useEffect(()=>{
        setTherapistData(AllTherapistData);
    }, [])
    return (
        <div className="bg-secondary p-5 mt-5 rounded">
            <h1 className="text-center text-info fw-bold mb-3">Our Specialist</h1>
            <Row xs={1} md={2} className="g-4">
                {
                    therapistData.map(data => {
                        return(<TherapistDetails
                        keu = {data.id}
                        details = {data}
                        ></TherapistDetails>)
                    })
                }
            </Row>
        </div>
    );
};

export default Therapist;