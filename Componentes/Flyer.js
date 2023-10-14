import React from 'react';

const Flyer = ({ image, title, description }) => {
    return (
        <div className="flyer">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Flyer;
