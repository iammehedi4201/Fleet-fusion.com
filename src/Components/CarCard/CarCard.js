import React from "react";
import { Link } from "react-router-dom";
import "./CarCard.css";
import useTitle from "../../Hooks/useTitle";

const CarCard = ({ car }) => {
  const {_id,name, year, Rent_price, km_driven, img, seats } = car;
  useTitle("Car page ");
  return (
    <div className="col-md-4" id="ads">
    
      <div className="card rounded car-card-sizing">
        <div className="card-image">
          <span className="card-notify-badge">Low KMS</span>
          <span className="card-notify-year">{year}</span>
          <img className="img-fluid  my-4" src={img} alt="Alternate Text" />
        </div>
        <div className="card-image-overlay m-auto">
          <span className="card-detail-badge">Used</span>
          <span className="card-detail-badge">{seats} Seats</span>
          <span className="card-detail-badge">${Rent_price} Per km</span>
          <span className="card-detail-badge">{km_driven} Kms</span>
        </div>
        <div className="card-body text-center">
          <div className="ad-title m-auto">
            <h5>{name}</h5>
          </div>
          <Link to={`/cardetails/${_id}`} className="ad-btn" >
            View
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default CarCard;
