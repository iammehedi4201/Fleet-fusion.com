import React from 'react';
import './CarouselItem.css'

const CarouselItem = ({car}) => {

    const {name,Rating,km_driven,img} = car;

    return (
        <div className="inner-carousel-item">
        <div className="carousel-img-details ">
          <h1>{name}</h1>
          <p>
           Rating :-{Rating}.00
          </p>
          <p>
           Toltal Drive :-{km_driven} km
          </p>
          <button className='btn btn-success'>Book Now</button>
        </div>
        <img src={img} className="carousel-img-sizing" alt={name} />
      </div>
    );
};

export default CarouselItem;