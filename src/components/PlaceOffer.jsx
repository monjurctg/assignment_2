import React from "react";

function PlaceOffer() {
  return (
    <div>
      <h4>What this place offers</h4>
      <div className="row ">
        <div className="col-md-6 place">
          <span>
            <i class="fa-solid fa-lock"></i>
          </span>
          <span>Lock on bedroom door</span>
        </div>

        <div className="col-md-6 place">
          <span>
            <i class="fa-solid fa-kitchen-set"></i>
          </span>
          <span>Kitchen</span>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6 place">
          <span>
            <i class="fa-solid fa-wifi"></i>
          </span>
          <span>Wifi</span>
        </div>
        <div className="col-md-6 place">
          <span>
            {" "}
            <i class="fa-solid fa-toilet"></i>
          </span>
          <span>Dedicated workspace</span>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 place">
          <span>
          <i class="fa-solid fa-soap"></i>
          </span>
          <span>Washer</span>
        </div>
        <div className="col-md-6 place">
          <span>
            {" "}
            <i class="fa-solid fa-bath"></i>
          </span>
          <span>Bathtub</span>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6 place">
          <span>
          <i class="fa-solid fa-toilet"></i>
          </span>
          <span>Pack ’n play/Travel crib</span>
        </div>
        <div className="col-md-6 place">
          <span>
            {" "}
            <i class="fa-solid fa-calendar-days"></i>
          </span>
          <span>Security cameras on property</span>
        </div>
      </div>


      
      <div className="row mt-3">
        <div className="col-md-6 place">
          <span>
            <i class="fa-solid fa-wifi"></i>
          </span>
          <span>Private patio or balcony</span>
        </div>
        <div className="col-md-6 place">
          <span>
            {" "}
            <i class="fa-solid fa-toilet"></i>
          </span>
          <span>Luggage dropoff allowed</span>
        </div>
      </div>

      <button className="place-btn">
        Show 37 amenities
      </button>
    </div>
  );
}

export default PlaceOffer;
