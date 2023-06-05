import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaPhone } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/UserInfoContext";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  //Succesfull Meassage state
  const [successfull, setSuccessfull] = useState(false);
  const { login, setLoader } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setSuccessfull(true);
        setErrorMessage("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
          setTimeout(() => {
            
            window.location.reload();
          }, 4);
        } else {
          toast.error("Please varify your email! Then Login");
        }
      })
      .catch((err) => {
        const errorCode = err.code;
        setErrorMessage(errorCode.slice(5).replace(/[-]/g, " "));
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <section className="login-form-style">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center min-vh-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-6 form-style">
            <div
              className="card shadow-2-strong bg-color"
              style={{ borderRadius: "1rem" }}
            >
              <Form
                className="card-body p-5 text-center"
                onSubmit={handleSubmit}
              >
                <h1 className="mb-5 text-info border-bottom">Sign in</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Remember password</label>
                </div>
                <div className="text-start  my-3">
                  <Link>
                    <h6
                      style={{
                        textDecoration: "underline",
                        marginTop: "-10px",
                      }}
                      className="text-danger"
                    >
                      Forget Password
                    </h6>
                  </Link>
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Login
                </button>

                {/* error Message show */}

                {errorMessage ? (
                  <>
                    <hr className="my-4 border-bottom" />
                    <p>
                      <h5 className="text-danger">{errorMessage}</h5>
                    </p>
                    <hr className="my-4 border-bottom" />
                  </>
                ) : (
                  ""
                )}
                {/* Succesfull Meassage show */}
                {successfull && (
                  <>
                    <hr className="my-4 border-bottom" />
                    <p>
                      <h5 className="text-success">Login successfully</h5>
                    </p>
                    <hr className="my-4 border-bottom" />
                  </>
                )}

                <hr className="my-4 border-bottom" />
                <p>
                  Don't have a Account Please{" "}
                  <Link to="/signup" className="text-danger text-underline">
                    Register
                  </Link>
                </p>
                <hr className="my-4 border-bottom" />

                <button
                  className="btn btn-lg btn-block btn-primary"
                  style={{ backgroundColor: "#dd4b39" }}
                  type="submit"
                >
                  <FaGoogle className="fab me-2"></FaGoogle>
                  Sign in with google
                </button>
                <button
                  className="btn btn-lg btn-block btn-primary mb-2"
                  style={{ backgroundColor: "#3b5998" }}
                  type="submit"
                >
                  <FaFacebook className="fab me-2"></FaFacebook>
                  Sign in with facebook
                </button>
                <Link to="/numberLogin">
                  <button
                    className="btn btn-lg btn-block btn-primary mb-2"
                    style={{ backgroundColor: "seagreen" }}
                    type="submit"
                  >
                    <FaPhone className="fab me-2"></FaPhone>
                    Sign in with Number
                  </button>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
