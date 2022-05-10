import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, img, text }=service;
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
            <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{text}</p>
                
            </div>
        </div>
    );
};

export default ServiceCard;