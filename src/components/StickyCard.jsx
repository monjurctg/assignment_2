import React from "react";

function StickyCard() {
  return (
    <div className="">
      <div className="d-flex justify-content-between">
        <div>
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>$37</span>
          <span>night</span>
        </div>
        <div>
          <span>
            <i class="fa-solid fa-star" style={{ fontSize: "14px" }}></i>
          </span>
          <span>4.8</span>
          <span>
            <a href="#"> 171 views</a>
          </span>
        </div>
      </div>

      <div className="check-in-container">

        <div className="d-flex justify-content-between">
            
        <div className="checkin" style={{borderRight:"1px solid black"}}>
          <h6>check in</h6>
          <p>May 2023</p>
        </div>
        <div className="checkin">
          <h6>check in</h6>
          <p>May 2023</p>
        </div>
        </div>
        <div className="d-flex justify-content-between">
            <div className="geuest">
            <h6>Guests</h6>
          <p>1 guests</p>
            </div>
            <div className="geuest">
            <i class="fa-solid fa-chevron-down"></i>
            </div>
        </div>
      </div>

      <div className="check-btn">
        <p>Check Availability</p>
      </div>

  
    </div>
  );
}

export default StickyCard;
