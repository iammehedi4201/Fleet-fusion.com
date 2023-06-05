import React from "react";
import "./Orders.css";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/UserInfoContext";
import { useState } from "react";
import { useEffect } from "react";
import OrderRow from "../../Components/OrderRow/OrderRow";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { toast } from "react-toastify";

const Orders = () => {
  const [show, setShow] = useState(false);
  const [agree, setAgree] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5002/orders?Email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, [user?.email]);

  // console.log("The orders are :-",orders);

  const handleDelete = (order) => {
    setSelectedOrder(order);
    handleShow();
  };

  const handleYes = () => {
    setAgree(true);
    handleClose();
  };

  const handleNo = () => {
    setAgree(false);
    handleClose();
  };

  useEffect(() => {
    if (agree) {
      console.log("Deleting user:", selectedOrder._id);
      fetch(`http://localhost:5002/orders/${selectedOrder._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingOrder = orders.filter(
              (order) => order._id !== selectedOrder._id
            );
            setOrders(remainingOrder);
            toast.success("order Deleted Successfully");
          }
        })
        .catch((err) => console.log(err)); 
    }
    setAgree(false);
  }, [agree, selectedOrder]);

  const handleStatusUpdate =(id)=>{
        fetch(`http://localhost:5002/order/${id}`,{
               method:"PATCH",
               headers:{
                   'content-type' : 'application/json'
               },
               body:JSON.stringify({status :'Approved'})
        })
        .then(res=>res.json())
        .then(data=>{
              if (data.modifiedCount > 0) {
                  const remaining = orders.filter(order => order._id !== id);
                  const approving = orders.find(order => order._id === id )
                  // console.log("The aproving is :-",approving);
                  approving.status = 'Approved'
                  const newOrders = [approving,...remaining]
                  setOrders(newOrders)
              }
              console.log(data);
        })
  }

  return (
    <div className="order-section">
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
                          <AiOutlineArrowLeft></AiOutlineArrowLeft>
                          Continue Booking
                        </a>
                      </h5>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Booking cart</p>
                          <p className="mb-0">
                            You have {orders.length} items in your cart
                          </p>
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
                      {Array.isArray(orders) ? (
                        orders.map((order) => (
                          <OrderRow
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleStatusUpdate={handleStatusUpdate}
                          />
                        ))
                      ) : (
                        <p>No orders found.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* this is for show confimation toast  */}
      <div>
        <Modal style={{ paddingTop: "160px" }} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete{" "}
            <span style={{ fontWeight: "bolder" }}>{selectedOrder.Name}</span>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleNo}>
              No
            </Button>
            <Button variant="primary" onClick={handleYes}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Orders;
