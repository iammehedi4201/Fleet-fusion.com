import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/UserInfoContext";
import { Link } from "react-router-dom";

const BookingForm = ({ handleSubmitValue }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container ">
      {/* Booking form */}
      <div className="row">
        <section className="booking-form-section col-12 mx-auto">
          <div className="text-center my-5">
            <h1 style={{ color: "tomato" }}>BOOKING INFORMATION</h1>
            <hr style={{ width: "50%", margin: "0px auto" }} />
          </div>
          <form onSubmit={handleSubmitValue}>
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
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group mt-2">
              <span className="form-label">Pickup Location</span>
              {/* <span className="mx-4 leaflet-routing-remove-waypoint"></span> */}
              <input
                className="form-control"
                type="text"
                name="pickupLocation"
                placeholder="Enter ZIP/Location"
              />
            </div>
            <div className="form-group mt-2">
              <span className="form-label">Destination</span>
              <input
                className="form-control"
                type="text"
                name="destinationLocation"
                placeholder="Enter ZIP/Location"
              />
            </div>
            <div className="row">
              <div className="col-sm-5">
                <div className="form-group mt-2">
                  <span className="form-label">Pickup Date</span>
                  <input
                    name="pickupDate"
                    className="form-control"
                    type="date"
                  />
                </div>
              </div>
              <div className="col-sm-7">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group mt-2">
                      <span className="form-label">Hour</span>
                      <select name="pickupHour" className="form-control">
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
                      <select name="pickupMin" className="form-control">
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
                      <select name="pickupAmorPm" className="form-control">
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
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required
                />
                <label class="custom-control-label" for="credit">
                  Credit card
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required
                />
                <label class="custom-control-label" for="debit">
                  Debit card
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required
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
                  name="cardOwnerName"
                  type="text"
                  class="form-control"
                  id="cc-name"
                  placeholder=""
                  required
                />
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">Name on card is required</div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input
                  name="cardNumber"
                  type="text"
                  class="form-control"
                  id="cc-number"
                  placeholder=""
                  required
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
                  name="cardExpirationNumber"
                  type="text"
                  class="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">Expiration date required</div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-cvv">CVV</label>
                <input
                  name="cvv"
                  type="text"
                  class="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required
                />
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

export default BookingForm;
