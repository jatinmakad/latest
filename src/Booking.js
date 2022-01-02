import React from "react";
import Icon from "./Images/icon.png";
import "./App.css";

function Booking() {
  return (
    <div className="row main-content main-content-bg mb-4">
      <div className="col-md-8 col-7">
        <div className="booking col-12">
          <img src={Icon} alt="" className="img-fluid w-25 mb-2" />
          <div className="booking-text">
            <h2 className="">Bhavy Chitranshi</h2>
            <div className="d-flex booking-text-p">
              <p>Domain</p>
              <p>Inductry</p>
            </div>
            <div className="d-flex align-item-center booking-text-time">
              <p>
                <i class="fas fa-calendar-alt"></i>9th Nov.
              </p>
              <p>
                <i class="fas fa-clock"></i>9:30 AM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-5">
        <div className="col-12 main-inner booking-main-inner">
          <span className="mb-2">From 1:1 Mentorship Program</span>
          <h3 className="mb-2">Rs.500</h3>
          <button className="invoice-btn mb-3">
            <i class="fas fa-download"></i>
            <span>Invoice Download</span>
          </button>
          <button className="text-white view-btn">View</button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
