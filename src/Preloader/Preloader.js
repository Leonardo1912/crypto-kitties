import React from 'react';
import loader from "../img/spinner.gif"
import "./Preloader.scss"

const Preloader = () => {
    return (
            <div className="Preloader">
                <img src={loader} alt=""/>
            </div>
    );
};

export default Preloader;