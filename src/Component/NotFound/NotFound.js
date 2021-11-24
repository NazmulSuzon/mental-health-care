import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div >
            <div className="not-found">
                <img  src="https://www.pngitem.com/pimgs/m/255-2550411_404-error-images-free-png-transparent-png.png" alt="" />
            </div>
            <Link className="bg-info mt-3 text-decoration-none rounded fs-5 p-2 text-light d-flex justify-content-center mt-4" to="/home">Go to Home</Link>
        </div>
    );
};

export default NotFound;