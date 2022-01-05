import React from "react";
import Bg from "../Images/RectangleBg.png";
import Mentor from "../Images/image 4.png";
import "../App.css";
import Line from "../Images/line.png"
import Booking from "./Booking";
// import "./order.css"
const data = [
  {
    title: "IT Professional",
    purchased: "22 Jan 2022",
    valid: "22 Dec 2022",
    amount: "500",
  },
  {
    title: "IT Professional",
    purchased: "25 Jan 2022",
    valid: "29 Dec 2022",
    amount: "1,000",
  },
  {
    title: "IT Professional",
    purchased: "22 July 2022",
    valid: "22 Dec 2022",
    amount: "1,500",
  },
];
function Order() {
  return (
    <div className="container-fluid main-contet-outer d-flex flex-column align-item-center w-100 h-100">
      <div className="main-cont container-fluid">
        {data.map((_data) => {
          return (
            <div className="row main-content mb-4">
              <img src={Bg} alt="" className="main-content-img col-md-4" style={{objectFit:"contain"}} />
              <div className="col-md-4 col-6 col-sm-6">
                <div className="col-12 d-flex flex-column h-100 w-100 justify-content-center mentor-inner">
                  <img src={Mentor} alt="" className="w-25 mentor-logo" />
                  <h3 className="mb-3">{_data.title}</h3>
                  <div className="d-flex h-auto">
                    <img
                      src={Line}
                      style={{ marginRight: "10px",objectFit:"covers" }}
                    />
                    <div className="d-flex flex-column align-item-center text-black-50">
                      <span
                        style={{ borderBottom: "1px solid gray" }}
                        className="mb-2 pb-2"
                      >
                        Purchashed on {_data.purchased}
                      </span>
                      <span>Valid till {_data.valid}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6 col-sm-6 order-p p-0">
                <div className="col-12 main-inner d-flex flex-column align-item-start justify-content-around h-100">
                  <span className="one">From 1:1 Mentorship Program</span>
                  <h3 className="">Rs.{_data.amount}</h3>
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
        <Booking />
      </div>
    </div>
  );
}

export default Order;
