import React from "react";
import Icon from "../Images/icon.png";
import "../App.css";

const data = [
  {
    name: "Bhavy Chitranshi",
    booking: ["Domain", "Industry"],
    bookingDate: "9th Nov.",
    bookingTime: "9:30 AM",
    rate: "500",
  },
];
function Booking() {
  return (
    // <div className="booking-outer">
    //   <div className="booking-left">
    //     <img src={Icon} alt="" className="img-fluid w-25 mb-2" />
    //     <div className="booking-content d-flex flex-column justify-content-center">
    //       <h2 className="">Bhavya Chitranshi</h2>
    //       <div className="d-flex booking-text-p">
    //         <span>Domain</span>
    //         <span>Domain</span>
    //       </div>
    //       <div className="d-flex align-item-center booking-text-time">
    //         <p>
    //           <i class="fas fa-calendar-alt"></i>
    //           12th March
    //         </p>
    //         <p>
    //           <i class="fas fa-clock"></i>
    //           9:30 AM
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="order-right">
    //     <p>From 1:1 Mentorship Program</p>
    //     <h3>Rs.500</h3>
    //     <button className="invoice-btn">
    //       <i class="fas fa-download"></i>
    //       <span>Invoice Download</span>
    //     </button>
    //     <button className="text-white view-btn">View</button>
    //   </div>
    // </div>
    <>
  {data.map((_data) => {
        return (
          <div className="row main-content main-content-bg mb-4">
            <div className="col-md-8 col-6 booking-bt p-0">
              <div className="booking col-12 d-flex flex-row align-item-center justify-content-around">
                <img src={Icon} alt="" className="img-fluid w-25 mb-2" style={{objectFit:"contain"}} />
                <div className="booking-text d-flex flex-column justify-content-center">
                  <h2 className="">{_data.name}</h2>
                  <div className="d-flex booking-text-p">
                    <span>{_data.booking[0]}</span>
                    <span>{_data.booking[1]}</span>
                  </div>
                  <div className="d-flex align-item-center booking-text-time">
                    <p>
                      <i class="fas fa-calendar-alt"></i>
                      {_data.bookingDate}
                    </p>
                    <p>
                      <i class="fas fa-clock"></i>
                      {_data.bookingTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="col-12 main-inner d-flex booking-main-inner flex-column align-item-start justify-content-around h-100">
                  <span className="one">From 1:1 Mentorship Program</span>
                  <h3 className="">Rs.{_data.rate}</h3>
                  <button className="invoice-btn">
                    <i class="fas fa-download"></i>
                    <span>Invoice Download</span>
                  </button>
                  <button className="text-white view-btn">View</button>
                </div>
            </div>
          </div>
        );
      })} 
   </> 
  );
}

export default Booking;
