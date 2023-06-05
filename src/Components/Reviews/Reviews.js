import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  TbQuote
} from "react-icons/tb";

import "./Reviews.css";

const Reviews = () => {
  return (
    <div>
      <div className="text-center mt-5">
        <h2 style={{color:"tomato"}}>Testimonials</h2>
        <h1>Recent Reviews</h1>
        <hr style={{ width: "50%", margin: "0px auto" }} />
      </div>
      <Row>
        <Col>
          <section className=" my-5 mx-5">
            <div className="card">
              <div className="card-body">
                <blockquote className="blockquote blockquote-custom bg-white px-3 pt-4">
                  <div className="blockquote-custom-icon bg-info shadow-1-strong">
                    < TbQuote
                      style={{ fontSize: "40px" }}
                      className="text-white"
                    ></ TbQuote>
                  </div>
                  <p className="mb-0 mt-2 font-italic">
                  "I rented a car from Fleet-Fusion for my trip and had a great experience. The customer service was excellent, and the staff was very helpful. The car was clean and well-maintained, and I had no issues during my rental period."
                  </p>
                  <footer className="blockquote-footer pt-4 mt-4 border-top">
                  "Mehedi Hasan"
                  </footer>
                </blockquote>
              </div>
            </div>
          </section>
        </Col>
        <Col>
          <section className=" my-5 mx-5">
            <div className="card">
              <div className="card-body">
                <blockquote className="blockquote blockquote-custom bg-white px-3 pt-4">
                  <div className="blockquote-custom-icon bg-info shadow-1-strong">
                    < TbQuote
                      style={{ fontSize: "40px" }}
                      className="text-white"
                    ></ TbQuote>
                  </div>
                  <h5>Wedding Ceremoney</h5>
                  <hr />
                  <p className="mb-0 mt-2 font-italic">
                  "I had a great experience with  Fleet-Fusion . The staff was friendly and helpful, and the car was clean and well-maintained. The rental process was easy, and I had no issues during my rental period. I would definitely rent from this company again."
                  </p>
                  <footer className="blockquote-footer pt-4 mt-4 border-top">
                  "Md Fokrul Islam"
                  </footer>
                </blockquote>
              </div>
            </div>
          </section>
        </Col>
        <Col>
          <section className=" my-5 mx-5">
            <div className="card">
              <div className="card-body">
                <blockquote className="blockquote blockquote-custom bg-white px-3 pt-4">
                  <div className="blockquote-custom-icon bg-info shadow-1-strong">
                    < TbQuote
                      style={{ fontSize: "40px" }}
                      className="fa fa-quote-left text-white"
                    ></ TbQuote>
                  </div>
                  <h5>Whole City Tour </h5>
                  <hr />
                  <p className="mb-0 mt-2 font-italic">
                  "I rented a luxury car from Fleet-Fuison for a special occasion, and it was worth every penny. The car was in excellent condition, and the staff went above and beyond to make sure that everything was perfect. I would highly recommend this car rental company."
                  </p>
                  <footer className="blockquote-footer pt-4 mt-4 border-top">
                     "Md Fozlul Hoque"
                  </footer>
                </blockquote>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default Reviews;
