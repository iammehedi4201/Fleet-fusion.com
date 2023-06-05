import React from "react";
import "./UpdateOrderInfo.css";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/UserInfoContext";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const UpdateOrderInfo = () => {
  const { user } = useContext(AuthContext);
  const storedOrder = useLoaderData();
  const [order, setOrder] = useState(storedOrder);

  const {
    phone,
    pickUpDate,
    Time,
    cardOwnerName,
    cardNumber,
    cardExpirationNumber,
    pickupLocation,
    destinationLocation,
    paymentMethod,
  } = storedOrder;

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const newOrder = { ...order };
    if (
      name === "pickupHour" ||
      name === "pickupMin" ||
      name === "pickupAmorPm"
    ) {
      newOrder[name] = value;
      const { pickupHour, pickupMin, pickupAmorPm } = newOrder;
      const hour = pickupHour || "00"; // Set default value for hour
      const min = pickupMin || "00"; // Set default value for minute
      const amOrPm = pickupAmorPm || ""; // Set default value for AM/PM
      newOrder.Time = `${hour}:${min}${amOrPm}`;
    } else {
      newOrder[name] = value;
    }
    setOrder(newOrder);
  };

  const handleOrderUpdateInfo = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5002/order/${storedOrder._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  console.log("The updater order is :-", order);

  return (
    <div className="container ">
      {/* Booking form */}
      <div className="row">
        <section className="booking-form-section col-8 mx-auto">
          <div className="text-center my-5">
            <h1 style={{ color: "tomato" }}>BOOKING INFORMATION</h1>
            <hr style={{ width: "50%", margin: "0px auto" }} />
          </div>
          <form onSubmit={handleOrderUpdateInfo}>
            <div className="row">
              <div className="col-sm-6 ">
                <div className="form-group">
                  <span className="form-label">Name</span>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your name"
                    defaultValue={user?.displayName}
                    readOnly
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <span className="form-label">Email</span>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter your email"
                    defaultValue={user?.email}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="form-group mt-2">
              <span className="form-label">Phone</span>
              <input
                className="form-control"
                type="tel"
                name="phoneNumber"
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                defaultValue={phone || ""}
              />
            </div>
            <div className="form-group mt-2">
              <span className="form-label">Pickup Location</span>
              {/* <span className="mx-4 leaflet-routing-remove-waypoint"></span> */}
              <input
                className="form-control"
                type="text"
                name="pickupLocation"
                onChange={handleInputChange}
                placeholder="Enter ZIP/Location"
                defaultValue={pickupLocation || ""}
              />
            </div>
            <div className="form-group mt-2">
              <span className="form-label">Destination</span>
              <input
                className="form-control"
                type="text"
                name="destinationLocation"
                onChange={handleInputChange}
                placeholder="Enter ZIP/Location"
                defaultValue={destinationLocation || ""}
              />
            </div>
            <div className="row">
              <div className="col-sm-5">
                <div className="form-group mt-2">
                  <span className="form-label">Pickup Date</span>
                  <input
                    name="pickUpDate"
                    className="form-control"
                    type="date"
                    onChange={handleInputChange}
                    defaultValue={pickUpDate}
                  />
                </div>
              </div>
              <div className="col-sm-7">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group mt-2">
                      <span className="form-label">Hour</span>
                      <select
                        onChange={handleInputChange}
                        name="pickupHour"
                        className="form-control"
                        defaultValue={Time?.split(":")[0]}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                      </select>
                      <span className="select-arrow"></span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group mt-2">
                      <span className="form-label">Min</span>
                      <select
                        onChange={handleInputChange}
                        name="pickupMin"
                        className="form-control"
                        defaultValue={Time?.split(":")[1].slice(0, 2)}
                      >
                        <option>05</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                        <option>35</option>
                        <option>40</option>
                        <option>45</option>
                        <option>50</option>
                        <option>55</option>
                      </select>
                      <span className="select-arrow"></span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group mt-2">
                      <span className="form-label">AM/PM</span>
                      <select
                        onChange={handleInputChange}
                        name="pickupAmorPm"
                        className="form-control"
                        defaultValue={Time?.slice(-2)}
                      >
                        <option>AM</option>
                        <option>PM</option>
                      </select>
                      <span className="select-arrow"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input
                  onChange={handleInputChange}
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  value="credit-card"
                  required
                  checked={paymentMethod === "Credit card"}
                />
                <label class="custom-control-label" for="credit">
                  Credit card
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  onChange={handleInputChange}
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  value="debit-card"
                  required
                  checked={paymentMethod === "Debit card"}
                />
                <label class="custom-control-label" for="debit">
                  Debit card
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  onChange={handleInputChange}
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  value="paypal"
                  required
                  checked={paymentMethod === "paypal"}
                />
                <label class="custom-control-label" for="paypal">
                  PayPal
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input
                  onChange={handleInputChange}
                  name="cardOwnerName"
                  type="text"
                  class="form-control"
                  id="cc-name"
                  placeholder=""
                  required
                  defaultValue={cardOwnerName}
                />
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">Name on card is required</div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input
                  onChange={handleInputChange}
                  name="cardNumber"
                  type="text"
                  class="form-control"
                  id="cc-number"
                  placeholder=""
                  required
                  defaultValue={cardNumber}
                />
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input
                  onChange={handleInputChange}
                  name="cardExpirationNumber"
                  type="text"
                  class="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required
                  defaultValue={cardExpirationNumber}
                />
                <div class="invalid-feedback">Expiration date required</div>
              </div>
              <div class="col-md-3 mb-3">
                {/* <label for="cc-cvv">CVV</label> */}
                {/* <input
                  onChange={handleInputChange}
                  name="cvv"
                  type="text"
                  class="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required
                /> */}
                <div class="invalid-feedback">Security code required</div>
              </div>
              <div className="form-btn">
                <div className="d-grid mt-3">
                  <button className="submit-btn btn btn-success">
                    Checkout Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdateOrderInfo;
