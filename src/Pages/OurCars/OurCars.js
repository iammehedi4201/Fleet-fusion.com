import React from "react";
import { Row } from "react-bootstrap";
import CarCard from "../../Components/CarCard/CarCard";
import useCars from "../../Hooks/useCars";
import "./OurCars.css";

const OurCars = () => {
  const [cars, setCars] = useCars();

  return (
    <div className="ourcars-section">
      <div className="text-center mt-2">
        <h1>Cars We're offering</h1>
        <h1>For Rentals</h1>
        <hr style={{ width: "50%", margin: "0px auto" }} />
      </div>

      <Row>
        {cars.map((car) => (
          <CarCard key={car.carId} car={car}></CarCard>
        ))}
      </Row>
    </div>
  );
};

export default OurCars;
