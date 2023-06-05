import { createBrowserRouter } from "react-router-dom";
import FormLayout from "../Layout/FormLayout/FormLayout";
import Main from "../Layout/MainLayout/Main";
import BookingProcess from "../Pages/BookingProcess/BookingProcess";
import CarsDetails from "../Pages/CarsDetails/CarsDetails";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import OurCars from "../Pages/OurCars/OurCars";
import ProfileDetails from "../Pages/ProfileDetails/ProfileDetails";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import PhoneNumberLogin from "../Pages/PhoneNumberLogin/PhoneNumberLogin";
import CheckoutCard from "../Components/CheckoutCard/CheckoutCard";
import Orders from "../Pages/Orders/Orders";
import UpdateOrderInfo from "../Pages/UpdateOrderInfo/UpdateOrderInfo";

export const router = createBrowserRouter([
  //MainLayout routes
  {
    path: "",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cars",
        element: <OurCars></OurCars>,
      },
      {
        path: "/checkOut",
        element: <CheckoutCard></CheckoutCard>,
      },
      {
        path: "/carDetails/:carId",
        loader: ({ params }) => {
          const id = params.carId;
          console.log("the id is :-", id);
          return fetch(`http://localhost:5002/cars/${id}`);
        },
        element: <CarsDetails></CarsDetails>,
      },
      {
        path: "/BookingProcess/:carId",
        loader: ({ params }) => {
          const id = params.carId;
          console.log("the id is :-", id);
          return fetch(`http://localhost:5002/cars/${id}`);
        },
        element: (
          <PrivateRoutes>
            <BookingProcess></BookingProcess>
          </PrivateRoutes>
        ),
      },
      {
        path: "/termsAndConditons",
        element: (
          <PrivateRoutes>
            <TermsAndConditions></TermsAndConditions>
          </PrivateRoutes>
        ),
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/updateOrderInfo/:id",
        loader: ({ params }) => {
          const id = params.id;
          console.log("The id is :-", id);
          return fetch(`http://localhost:5002/order/${id}`);
        },
        element: <UpdateOrderInfo></UpdateOrderInfo>,
      },
    ],
  },
  //FormLayout routes
  {
    path: "",
    element: <FormLayout></FormLayout>,
    children: [
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/numberLogin",
        element: <PhoneNumberLogin></PhoneNumberLogin>,
      },
      {
        path: "/profile",
        element: <ProfileDetails></ProfileDetails>,
      },
    ],
  },
]);
