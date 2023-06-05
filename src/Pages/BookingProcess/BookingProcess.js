import React from "react";
import "./BookingProcess.css";
import BookingForm from "../../Components/BookingForm/BookingForm";
import Map from "../../Components/Map/Map";
import { useState } from "react";
import useTitle from "../../Hooks/useTitle";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/UserInfoContext";
import Cart from "../../Components/Cart/Cart";

export const Locationcontext = React.createContext();

const BookingProcess = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const carInfo = useLoaderData();

  const { _id, name, Rent_price } = carInfo;

  const [pickupPlace, setPickupPlace] = useState("");

  const [totalKm, setTotalKm] = useState("");

  const [destinationPlace, setdetinationPlace] = useState("");

  useTitle("Location Checkout page");

  const handleSubmitValue = (e) => {
    e.preventDefault();

    const form = e.target;

    const phoneNumber = form.phoneNumber.value;

    const pickUpDate = document.getElementsByName("pickupDate")[0].value;

    const pickupHour = document.getElementsByName("pickupHour")[0].value;

    const pickupMin = document.getElementsByName("pickupMin")[0].value;

    const pickupAmorPm = document.getElementsByName("pickupAmorPm")[0].value;

    const paymentMethod = document.querySelector(
      "input[name='paymentMethod']:checked"
    ).nextElementSibling.textContent;

    const cardOwnerName = form.cardOwnerName.value;

    const cardNumber = form.cardNumber.value;

    const cardExpirationNumber = form.cardExpirationNumber.value;

    const pickupLocation = form.pickupLocation.value;

    const destinationLocation = form.destinationLocation.value;

    setTimeout(() => {
      var divElement = document.querySelector(".leaflet-routing-alt");
      var h3Element = divElement.querySelector("h3");
      var totalKm = h3Element.innerText;
      setTotalKm(totalKm);
      const distance = totalKm.split(",")[0].trim().replace(" km", "");
      const order = {
        carId: _id,
        carName: name,
        Name: user?.displayName,
        Email: user?.email,
        phone: phoneNumber,
        pickUpDate: pickUpDate,
        Time: pickupHour + ":" + pickupMin + pickupAmorPm,
        cardOwnerName: cardOwnerName,
        cardNumber: cardNumber,
        cardExpirationNumber: cardExpirationNumber,
        pickupLocation: pickupLocation,
        destinationLocation: destinationLocation,
        paymentMethod: paymentMethod,
        TotalAmount: parseInt(Rent_price) * parseInt(distance),
      };

      fetch("http://localhost:5002/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          if (data.acknowledged) {
            form.reset();
            navigate("/orders");
          }
        })
        .catch((err) => console.log(err));

      console.log("The ordre is :-", order);
    }, 2000);

    setPickupPlace(pickupLocation);

    setdetinationPlace(destinationLocation);

    // console.log(pickUpDate, pickupHour, pickupMin, pickupAmorPm, paymentMethod,phoneNumber,cardNumber,cardOwnerName,cardNumber,cardExpirationNumber);
  };

  const location = {
    pickupPlace,
    destinationPlace,
  };

  return (
    <div>
      <Locationcontext.Provider value={location}>
        <div className="row p-5">
          <div className="col-6">
            <BookingForm handleSubmitValue={handleSubmitValue}></BookingForm>
          </div>
          <div className="col-6" style={{ paddingTop: "155px" }}>
            <Cart Rent_price={Rent_price} totalKm={totalKm}></Cart>
            <Map></Map>
          </div>
        </div>
      </Locationcontext.Provider>
    </div>
  );
};

export default BookingProcess;
