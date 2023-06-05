import React from "react";
import { AiTwotoneStar, AiFillHeart } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import "./CarsDetails.css";
import useTitle from "../../Hooks/useTitle";

const CarsDetails = () => {
  const car = useLoaderData();

  const {
    _id,
    name,
    carId,
    Rating,
    year,
    Rent_price,
    doors,
    seats,
    transmission,
    insid_img,
    img,
  } = car;

  const { img_1, img_2, img_3, img_4 } = insid_img;

  useTitle(`Cars -${carId} Details`)

  //show pic id two

  const showPic_2 = (event) => {
    event.preventDefault();
    document.getElementById("pic-1").style.display = `none`;
    document.getElementById("pic-3").style.display = `none`;
    document.getElementById("pic-4").style.display = `none`;
    document.getElementById("pic-5").style.display = `none`;
    document.getElementById("pic-6").style.display = "none";
    document.getElementById("pic-2").style.display = "block";
  };
  //show pic id three
  const showPic_3 = (event) => {
    event.preventDefault();
    document.getElementById("pic-1").style.display = `none`;
    document.getElementById("pic-2").style.display = `none`;
    document.getElementById("pic-4").style.display = `none`;
    document.getElementById("pic-5").style.display = `none`;
    document.getElementById("pic-6").style.display = "none";
    document.getElementById("pic-3").style.display = "block";
  };

  //show pic id four
  const showPic_4 = (event) => {
    event.preventDefault();
    document.getElementById("pic-1").style.display = `none`;
    document.getElementById("pic-2").style.display = `none`;
    document.getElementById("pic-3").style.display = `none`;
    document.getElementById("pic-5").style.display = `none`;
    document.getElementById("pic-6").style.display = "none";
    document.getElementById("pic-4").style.display = "block";
  };

  //show pic id five
  const showPic_5 = (event) => {
    event.preventDefault();
    document.getElementById("pic-1").style.display = `none`;
    document.getElementById("pic-2").style.display = `none`;
    document.getElementById("pic-3").style.display = `none`;
    document.getElementById("pic-4").style.display = `none`;
    document.getElementById("pic-6").style.display = "none";
    document.getElementById("pic-5").style.display = "block";
  };

  //show pic id six

  const showPic_6 = (event) => {
    event.preventDefault();
    document.getElementById("pic-1").style.display = `none`;
    document.getElementById("pic-2").style.display = `none`;
    document.getElementById("pic-3").style.display = `none`;
    document.getElementById("pic-4").style.display = `none`;
    document.getElementById("pic-5").style.display = `none`;
    document.getElementById("pic-6").style.display = "none";
    document.getElementById("pic-6").style.display = "block";
  };

  return (
    <div className="container">
      <div className="card  cars-details-sizing">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-8">
              <div className="preview-pic tab-content">
                <div id="pic-1">
                  <div className="tab-pane active car-img">
                    <img src={img} />
                  </div>
                </div>
                <div id="pic-2">
                  <div className="tab-pane active car-img">
                    <img src={img_1} />
                  </div>
                </div>
                <div id="pic-3">
                  <div className="tab-pane active car-img">
                    <img src={img_2} />
                  </div>
                </div>
                <div id="pic-4">
                  <div className="tab-pane active car-img">
                    <img src={img_3} />
                  </div>
                </div>
                <div id="pic-5">
                  <div className="tab-pane active car-img">
                    <img src={img_3} />
                  </div>
                </div>
                <div id="pic-6">
                  <div className="tab-pane active car-img">
                    <img src={img_4} />
                  </div>
                </div>
              </div>
              <ul className="preview-thumbnail nav nav-tabs">
                <li className="active">
                  <a onClick={showPic_2}>
                    <img src={img_1} />
                  </a>
                </li>
                <li>
                  <a onClick={showPic_3}>
                    <img src={img_2} />
                  </a>
                </li>
                <li>
                  <a onClick={showPic_4}>
                    <img src={img_3} />
                  </a>
                </li>
                <li>
                  <a onClick={showPic_5}>
                    <img src={img_3} />
                  </a>
                </li>
                <li>
                  <a onClick={showPic_6}>
                    <img src={img_4} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="details col-md-4">
              <section style={{ padding: "15px" }}>
                <h3 className="product-title">{name}</h3>
                <hr className="border" />
                <div className="rating">
                  <div className="stars">
                    <AiTwotoneStar className="checked" />
                    <AiTwotoneStar className="checked" />
                    <AiTwotoneStar className="checked" />
                    <AiTwotoneStar className="checked" />
                    <AiTwotoneStar className="checked" />
                  </div>
                  <span className="review-no">41 reviews</span>
                </div>
                <p className="product-description">
                  Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                  cubilia sem sem! Repudiandae et! Massa senectus enim minim
                  sociosqu delectus posuere.
                </p>
                <hr className="border" />
                <h4 className="price">
                  Rent price: <span>${Rent_price} Per KM</span>
                </h4>
                <hr className="border" />
                <p className="vote">
                  <strong>91%</strong> of Customars enjoyed this Car services!{" "}
                  <strong>(87 votes)</strong>
                </p>
                <hr className="border" />
                <h5 className="Seats">
                  Seats:
                  <span className=""> {seats} Seats</span>
                </h5>
                <hr className="border" />
                <h5 className="doors">
                  Doors:
                  <span className=""> {doors} Doors</span>
                </h5>
                <hr className="border" />
                <h5 className="year">
                  Year:
                  <span className=""> {year} version</span>
                </h5>
                <hr className="border" />
                <h5 className="transmission">
                  transmission:
                  <span className="">{transmission}</span>
                </h5>
                <hr className="border" />
                <h5 className="colors">
                  colors:
                  <span
                    className="color orange not-available"
                    data-toggle="tooltip"
                    title="Not In store"
                  ></span>
                  <span className="color green"></span>
                  <span className="color blue"></span>
                </h5>
                <hr className="border" />
                <div className="">
                  <button
                    className="add-to-cart btn btn-outline-info w-50"
                    type="button"
                  >
                    <Link to={`/BookingProcess/${_id}`}> Book Now</Link>
                  </button>
                  <button
                    className="like btn border mx-3 text-danger"
                    type="button"
                  >
                    <AiFillHeart />
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsDetails;
