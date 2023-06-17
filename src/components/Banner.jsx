import React from "react";

function Banner() {
  return (
    <div className="container-md mt-3">
     <div className="d-none d-md-block">
     <h3>Enjoy historic Valencia and close to the beach.</h3>
      <div className="review-and-share d-flex justify-content-between align-item-center">
        <div className="review">
          
            <span>
              <i class="fa-solid fa-star" style={{fontSize:"14px"}}></i>
            </span>
            <span>4.8</span>
            <span>
                <a href="#"> 171 views</a>
            </span>
            <span>
              <i class="fa-solid fa-user"></i>
            </span>
            <span>Superhost</span>
            <span>
              <a href="#">Valencia, Spain</a>
            </span>
         
        </div>
        <div className="share">
          <span>
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
          </span>
          <span>
            <a href="#">Share</a>
          </span>

          <span>
            <i class="fa-regular fa-heart"></i>
          </span>
          <span>
            <a href="#">Save</a>
          </span>
        </div>
      </div>
     </div>

      <div className="row">
        <div className="col-md-6 col-12  left-image">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=960"
            alt=""
          />
        </div> 
        <div className="col-md-6 right-images d-none d-md-grid">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=960"
            alt=""
          />{" "}
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=960"
            alt=""
          />{" "}
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=960"
            alt=""
          />
           <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=960"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
