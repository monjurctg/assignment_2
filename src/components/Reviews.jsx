import React from "react";
import ClientReview from "./ClientReview";

function Reviews() {
  return (
    <div className="mt-5 mb-5">
      <h4>
        {" "}
        <span>
          <i class="fa-solid fa-star"></i>
        </span>
        4.87 · 171 reviews
      </h4>
      <div className="row mt-3">
        <div className="d-flex col-md-6">
          <div>Cleanliness</div>

          <div className="d-flex align-items-center ms-auto  w-50">
            <div class="progress" style={{ height: "3px", width: "50%" }}>
              <div
                class="progress-bar "
                role="progressbar"
                style={{ width: "90%", background: "black" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <span style={{ marginLeft: 10 }}>4.4</span>
          </div>
        </div>

        <div className="d-flex col-md-6">
          <div>Cleanliness</div>

          <div
            className="d-flex align-items-center ms-auto w-50"
            style={{ width: "50%" }}
          >
            <div class="progress" style={{ height: "3px", width: "50%" }}>
              <div
                class="progress-bar "
                role="progressbar"
                style={{ width: "90%", background: "black" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <span style={{ marginLeft: 10 }}>4.4</span>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="d-flex col-md-6">
          <div>Cleanliness</div>

          <div className="d-flex align-items-center ms-auto  w-50">
            <div class="progress" style={{ height: "3px", width: "50%" }}>
              <div
                class="progress-bar "
                role="progressbar"
                style={{ width: "90%", background: "black" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <span style={{ marginLeft: 10 }}>4.4</span>
          </div>
        </div>

        <div className="d-flex col-md-6">
          <div>Cleanliness</div>

          <div
            className="d-flex align-items-center ms-auto w-50"
            style={{ width: "50%" }}
          >
            <div class="progress" style={{ height: "3px", width: "50%" }}>
              <div
                class="progress-bar "
                role="progressbar"
                style={{ width: "90%", background: "black" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <span style={{ marginLeft: 10 }}>4.4</span>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="d-flex col-md-6">
          <div>Cleanliness</div>

          <div className="d-flex align-items-center ms-auto  w-50">
            <div class="progress" style={{ height: "3px", width: "50%" }}>
              <div
                class="progress-bar "
                role="progressbar"
                style={{ width: "90%", background: "black" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <span style={{ marginLeft: 10 }}>4.4</span>
          </div>
        </div>

        <div className="d-flex col-md-6">
          <div>Cleanliness</div>

          <div
            className="d-flex align-items-center ms-auto w-50"
            style={{ width: "50%" }}
          >
            <div class="progress" style={{ height: "3px", width: "50%" }}>
              <div
                class="progress-bar "
                role="progressbar"
                style={{ width: "90%", background: "black" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <span style={{ marginLeft: 10 }}>4.4</span>
          </div>
        </div>
      </div>

    
      
      <div className="row mt-5">
        <div className="d-flex col-md-6">
          <ClientReview name={"monjur"} title={"May 2023"} discription={"Great location and a wonderful host, couldn't ask for more"}/>
        </div>
        

        <div className="d-flex col-md-6">
        <ClientReview name={"shahedul alam"} title={"May 2023"} discription={"I had a Great Time Staying at Sagrario’s place! Her apartment is perfectly located in the centre of el Carmen. Her information on festivities and the area were one of a kind. I ca"}/>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="d-flex col-md-6">
          <ClientReview name={"zahedul alam"} title={"May 2023"} discription={"Sagrario is a superhost! She is very kind, helpful and friendly. She gives you advice about activities in Valencia.The apartment is great, clean and in the middle of the historic"}/>
        </div>
        

        <div className="d-flex col-md-6">
        <ClientReview name={"monjurul alam"} title={"May 2023"} discription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis facilis vitae laudantium saepe sequi. Ab, totam numquam! Minus nesciunt dolores reprehenderit maxime exercitationem rem, dolore ducimus totam quibusdam nihil distinctio"}/>
        </div>
      </div>

      <div className="row mt-5">
        <div className="d-flex col-md-6">
          <ClientReview name={"monjur"} title={"May 2023"} discription={"Great location and a wonderful host, couldn't ask for more"}/>
        </div>
        

        <div className="d-flex col-md-6">
        <ClientReview name={"shahedul alam"} title={"May 2023"} discription={"I had a Great Time Staying at Sagrario’s place! Her apartment is perfectly located in the centre of el Carmen. Her information on festivities and the area were one of a kind. I ca"}/>
        </div>
      </div>
      <button className="place-btn">
        Show all 171 reviews
      </button>

    </div>
  );
}

export default Reviews;
