import React from "react";
// import "./order.css";
import Bg from "../Images/RectangleBg.png";
import Line from "../Images/line.png";
import Mentor from "../Images/image 4.png";
import Booking from "./Booking";
function NewOrder() {
  return (
    <div className="order-main">
      <div className="order">
        <img src={Bg} alt=""  className="order-left" />
        <div className="order-mid">
          <img src={Mentor} alt="" />
          <h3 className="">IT Professional</h3>
          <div className="order-mid-inner">
            <img
              src={Line}
              style={{ marginRight: "10px", objectFit: "covers" }}
            />
            <div className="d-flex flex-column align-item-center text-black-50">
              <span
                style={{ borderBottom: "1px solid gray" }}
                className="span-first"
              >
                Purchashed on 2nd Jan
              </span>
              <span>Valid till 5th July</span>
            </div>
          </div>
        </div>
        <div className="order-right">
          <p>From 1:1 Mentorship Program</p>
          <h3>Rs.500</h3>
          <button className="invoice-btn">
            <i class="fas fa-download"></i>
            <span>Invoice Download</span>
          </button>
          <button className="text-white view-btn">View</button>
        </div>
      </div>
      <Booking/>
    </div>
  );
}

export default NewOrder;
