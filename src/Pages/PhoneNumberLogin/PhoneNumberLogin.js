import React, {useContext, useState } from "react";
import { Container, Form } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Link, useNavigate } from "react-router-dom";
import './PhoneNumberLogin.css'
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/UserInfoContext";


const PhoneNumberLogin = () => {
    //call the context 
    const {setUpRecaptcha} = useContext(AuthContext);
    //phone number state 
    const [number, setNumber] = useState();
    //flag state 
    const [flag, setFlag] = useState(false);
    //response state 
    const [confirmObj,setConfirmObj] = useState();
    //OTP State 
    const [otp,setOtp]=useState("");
    //useNavigate hook 
    const Navigate = useNavigate();


    //handle get Otp Number 
    const handleGetOtp=async (event)=>{
          event.preventDefault();
          if (number === ''||number === undefined) {
            return toast.error("Please Enter a Phone Number")
        }
        try {

            const response = await setUpRecaptcha(number);
            setConfirmObj(response)
            setFlag(true)
            console.log("The response is :-",response);
            
        } catch (error) {
            toast.error(error.message)
        }

    }
    //handle varify Otp  
    const handleVarifyOTP =async (event)=>{
        event.preventDefault();
        if (otp === '' || otp === undefined) {
           return  toast.error("give The OTP Number That's on your device");
        }
        try {

            await confirmObj.confirm(otp);
            Navigate('/')
            
        } catch (error) {
            toast.error(error.message)
        }
       

    }

    return (
        <Container style={{ marginTop: "160px" }}>
      <div className="card mb-3">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-lg-4 d-none d-lg-flex">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
              alt="Trendy Pants and Shoes"
              className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
            />
          </div>
          <div className="col-lg-8">
            <div className="card-body py-5 px-md-5">
              <form
                // style={{ display: !flag ? "block" : "none" }}
                style={{display:!flag ? "block" : "none"}}
                onSubmit={handleGetOtp}
              >
                {/* <!-- Email input --> */}
                <div
                  className="form-outline mb-4 mx-2"
                  style={{ width: "70%" }}
                >
                  <label className="form-label mx-5" for="form2Example1">
                    Phone Number
                  </label>
                  <PhoneInput
                    defaultCountry="BD"
                    placeholder="Enter phone number"
                    value={number}
                    onChange={setNumber}
                  />
                </div>

                {/* <!-- 2 column grid layout for inline styling --> */}
                <div className="row mb-4">
                  <div className="col">
                    {/* <!-- Simple link --> */}
                    <Link className="mx-5" to="/login">
                      Go to Login Page?
                    </Link>
                  </div>
                </div>
                
                 {/* Recaptcha container */}
                <div className="w-75 d-flex justify-content-center my-3">
                  <div id="recaptcha-container"></div>
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-primary btn ml-5 mb-4">
                  Send OTP
                </button>
                <button type="submit" className="btn btn-primary mx-3 btn mb-4">
                  Cancel
                </button>
              </form>


              {/* OTP Varify */}
              <Form
                onSubmit={handleVarifyOTP}
                style={{display:flag ? "block" : "none"}}
              >
                <label className="form-label" for="form2Example2">
                  OTP Number
                </label>
                <div style={{ width: "70%" }} className="form-outline mb-4">
                  <input
                    onChange={(e)=>setOtp(e.target.value)}
                    type="tel"
                    id="form2Example2"
                    className="form-control"
                    style={{ width: "100%", height: "6vh" }}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn mx-2 mb-4">
                  Varify OTP
                </button>
                <button type="submit" className="btn btn-primary btn mb-4">
                  Cancel
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Container>
    );
};

export default PhoneNumberLogin;