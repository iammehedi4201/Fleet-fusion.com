import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserInfoContext";
import "./SignUp.css";

const SignUp = () => {
  //Error message state
  const [errorMessage, setErrorMessage] = useState("");
  //Succesfull Meassage state
  const [successfull, setSuccessfull] = useState(false);
  //checked box state
  const [accept, setAccept] = useState(false);
  //geting data by using context
  const { signup, updateUserInfo, emailVerification, show, setShow } =
    useContext(AuthContext);
  //modal colse function
  const handleClose = () => setShow(false);
  //handle check function
  const handleChecked = (event) => {
    setAccept(event.target.checked);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessfull(false);
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    //condition check for if password are not same
    if (password !== confirmPassword) {
      setErrorMessage("Password Didn't Matched");
      return;
    }
    //condition check for password length
    if (password.length < 6) {
      setErrorMessage("Password Length should be atleast 6 characters");
      return;
    }
    signup(name, email, password)
      .then((result) => {
        const user = result.user;
        //update the user info
        updateUserInfo(name, photoURL);
        handleVarifyEmail();
        setSuccessfull(true);
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMessage(errorCode.slice(5).replace(/[-]/g, " "));
      });
  };
  
  const handleVarifyEmail =()=>{
        emailVerification()
        .then(()=>{

        })
        .catch(error=>console.error(error))

  }

  return (
    <section className="login-form-style " style={{}}>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center min-vh-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-6 form-style">
            <div
              className="card shadow-2-strong bg-color"
              style={{ borderRadius: "1rem" }}
            >
              <form
                onSubmit={handleSubmit}
                className="card-body p-5 text-center"
              >
                <h1 className="mb-5 text-info border-bottom">Sign Up</h1>

                <div className="form-outline mb-4">
                  <label className="form-label">
                  <h5 className="">Name:</h5>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control  form-control-lg"
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label">
                    <h5 className="">PhotoURL:</h5>
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    className="form-control  form-control-lg"
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label">
                    <h5 className="">Email:</h5>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control  form-control-lg"
                  />
                </div>

                <div className="form-outline mb-4 ">
                  <label className="form-label">
                    <h5 className="">Password:</h5>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="form-outline mb-4 ">
                  <label className="form-label">
                    <h5 className="">Confirm Password:</h5>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control form-control-lg"
                  />
                </div>

                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-start mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onClick={handleChecked}
                  />
                  <label className="form-check-label">
                    Accept
                    <Link to="/termsAndConditons">Terms and Conditaions</Link>
                  </label>
                </div>

                {/* error Message show */}

                {errorMessage ? (
                  <>
                    <hr className="my-4 border-bottom" />
                    <h6 className="text-danger">{errorMessage}</h6>
                    <hr className="my-4 border-bottom" />
                  </>
                ) : (
                  " "
                )}

                {successfull && (
                  <>
                    <hr className="my-4 border-bottom" />
                    <h6 className="text-success">User Created successfully</h6>
                    <hr className="my-4 border-bottom" />
                  </>
                )}

                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                  disabled={!accept}
                >
                  SignUp
                </button>

                <hr className="my-4 border-bottom" />
                <p>
                  Have a account Please{" "}
                  <Link to="/login" className="text-danger">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* email verification sent message */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Email verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>verification mail sent to your Email</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default SignUp;


