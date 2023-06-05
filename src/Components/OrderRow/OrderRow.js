import React from "react";
import "./OrderRow.css";
import { AiFillDelete } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const {
    _id,
    carId,
    carName,
    pickupLocation,
    destinationLocation,
    TotalAmount,
    pickUpDate,
    status,
  } = order;

  const [carInfo, setCarInfo] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5002/cars/${carId}`)
      .then((res) => res.json())
      .then((data) => setCarInfo(data))
      .catch((err) => console.log(err));
  }, [carId]);

  console.log("The carInfo is :-", carInfo);

  return (
    <div>
      <div className="card booking-card-sizing mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div>
                <button onClick={() => handleDelete(order)} className="btn">
                  <AiFillDelete className="mx-4 deleteBtn"></AiFillDelete>
                </button>
              </div>
              <div className="mx-4">
                {carInfo?.img && (
                  <img
                    src={carInfo.img}
                    className="img-fluid img-1 rounded-3"
                    alt="Shopping item"
                  />
                )}
              </div>
              <div className="ms-3">
                <h5>{carName}</h5>
                <p className="small mb-0">
                  {pickupLocation} To {destinationLocation}
                </p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div style={{ width: "100px" }}>
                <h5 className="fw-bold small mb-0 mx-2">{pickUpDate}</h5>
              </div>
              <div style={{ width: "100px" }}>
                <h5 className="mb-0">BDT{TotalAmount}</h5>
              </div>
              <div className="mx-5">
                <Link to={`/updateOrderInfo/${_id}`}>
                  <button className=" mx-2 btn btn-success">Update</button>
                </Link>
                <button
                  onClick={() => handleStatusUpdate(_id)}
                  className=" btn btn-danger my-2"
                >
                  {status ? status : "pending"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderRow;
