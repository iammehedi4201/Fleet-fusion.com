import React from "react";
import { useEffect } from "react";

const Cart = ({ Rent_price, totalKm, setTotalAmount }) => {
  let distance = totalKm.split(",")[0].trim();
  distance = distance.replace(" km", "");
  const totalAmount = parseInt(Rent_price) * parseInt(distance) ;

  return (
    <div>
      <div class="card mb-4">
        <div class="card-header py-3">
          <h5 class="mb-0">Summary</h5>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Per Km
              <span>${Rent_price}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
              Total Kilometar
              <span>{distance} km </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Total amount</strong>
                <strong>
                  <p class="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span id="totalAmount">
                <strong>${totalAmount}</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
