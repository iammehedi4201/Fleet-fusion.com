import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import './Carasuel.css'
import useCars from '../../Hooks/useCars';
import CarouselItem from './CarouselItem/CarouselItem';

const Carasuel = () => {

    const  [cars,setCars] = useCars();

    return (
        <section className="carosuel-section">
         <Carousel>
        {cars.map((car) => (
          <Carousel.Item key={car.carId}>
            <CarouselItem 
              car={car}
            ></CarouselItem>
          </Carousel.Item>
        ))}
      </Carousel>
      </section>
    );
};

export default Carasuel;