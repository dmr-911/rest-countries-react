import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, flag } = props.country;
    return (
        <div className="country">
            <h2>Name : {name}</h2>
            <h4>Capital : {capital}</h4>
            <img src={flag} alt="" />
        </div>
    );
};

export default Country;