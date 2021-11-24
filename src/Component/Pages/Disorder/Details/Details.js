import React, { useEffect, useState } from 'react';
import AllDisorderData from '../../fakaData/disorderData.json'
import { Row } from 'react-bootstrap';
import DisorderDetails from './DisorderDetails';
import { useParams } from 'react-router';


const Details = () => {
    const [detailsData, setDetailsData] = useState([]);

    const {serviceId} = useParams();


    useEffect(() =>{
        setDetailsData(AllDisorderData)
    }, []);
    // console.log("from set details data",setDetailsData);
    
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {
                    detailsData.map(data => {
                        return(<DisorderDetails
                        key={data.id}
                        details={data}
                        ></DisorderDetails>)
                    })
                }

            </Row>
        </div>
    );
};

export default Details;