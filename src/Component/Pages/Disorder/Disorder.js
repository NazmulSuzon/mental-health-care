import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import './Disorder.css'
import DisorderCard from './DisorderCard'
import AllDisorderData from '../../fakaData/disorderData.json'

const Disorder = () => {
    const [disorderData, setDisorderData] = useState([]);

    useEffect(() =>{
        setDisorderData(AllDisorderData)
    }, []);
    return (
        <div className="bg-secondary mt-5 px-5 py-3">
            <h2 className="text-center text-info fw-bold mt-4 mb-5">Disorders</h2>
        <Row xs={1} md={2} className="g-4">
        {
            disorderData.map(data => {
                // console.log("from data", data)
                return (<DisorderCard
                key={data.id}
                data={data}
                />)
            })
        }
    </Row>
        </div>
    );
};

export default Disorder;