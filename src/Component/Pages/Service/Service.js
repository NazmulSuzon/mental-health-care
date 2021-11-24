import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { AllServiceData } from '../../fakaData/service';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [serviceData, setServiceData] = useState([]);
    // console.log(serviceData);

    useEffect(() => {
        setServiceData(AllServiceData);
        // console.log("from",setService);
    }, []);
// console.log("from service", setService)
    return (
        <div className="bg-secondary p-3 mt-5 rounded">
            <h2 className="text-center text-info fw-bold mb-3">Our Services</h2>
        <Row xs={1} md={2} className="g-4">
        {
            serviceData.map(data => {
                // console.log("from data", data)
                return (<ServiceCard
                key={data.id}
                service={data}
                ></ServiceCard>)
            })
        }
    </Row>
        </div>
    );
};

export default Service;