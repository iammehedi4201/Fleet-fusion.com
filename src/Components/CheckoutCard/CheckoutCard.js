import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "./CheckoutCard.css";

const CheckoutCard = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card booking-card-sizing">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <h5 className="mb-3">
                        <a href="#!" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>
                          Continue Booking
                        </a>
                      </h5>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Booking cart</p>
                          <p className="mb-0">You have 4 items in your cart</p>
                        </div>
                        <div>
                          <p className="mb-0">
                            <span className="text-muted">Sort by:</span>
                            <a href="#!" className="text-body">
                              price <i className="fas fa-angle-down mt-1"></i>
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* booking product one  */}

                      <div className="card booking-card-sizing mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <button className="btn">
                                  <AiFillDelete className="mx-4 deleteBtn"></AiFillDelete>
                                </button>
                              </div>
                              <div className="mx-4">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                  className="img-fluid img-1 rounded-3"
                                  alt="Shopping item"
                                />
                              </div>
                              <div className="ms-3">
                                <h5>Iphone 11 pro</h5>
                                <p className="small mb-0">256GB, Navy Blue</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "100%" }}>
                                <h5 className="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{ width: "80px" }}>
                                <h5 className="mb-0">$900</h5>
                              </div>
                              <div className="mx-5">
                                <button className=" btn btn-danger">
                                  Pending
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutCard;
