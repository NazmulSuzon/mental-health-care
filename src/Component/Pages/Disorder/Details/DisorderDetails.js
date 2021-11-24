/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AllDisorderData from '../../../fakaData/disorderData.json';
import DisorderCard from '../DisorderCard';
// import { useParams } from 'react-router';

const DisorderDetails = () => {
    console.log(AllDisorderData)
    const [disorderDetails, setDisorderDetails] = useState([])
    // const [tite, details] = props.details
    const {serviceId} = useParams();
    useEffect(() =>{
        setDisorderDetails(AllDisorderData);
        
        // setDisorderData(AllDisorderData)
    }, []);
    const singleDisorderData = disorderDetails.filter(data=> data.id === parseInt(serviceId));
    console.log('single ',singleDisorderData);
    
    useEffect(() =>{

    }, [])
    return (
        <div style={{
            width:'600px',
            border:'1px solid red',
            margin:'19px auto 0 auto',
            padding:'7px'
        }}>
            <div>
                <img className='w-100' src={singleDisorderData[0]?.img} alt="image" />
            </div>
            <h3>{singleDisorderData[0]?.title}</h3>
            <div>{singleDisorderData[0]?.details}</div>
        </div>
    );
};

export default DisorderDetails;