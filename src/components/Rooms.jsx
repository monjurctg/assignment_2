import React from "react";

function Rooms() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center  title">
        <h3>Room in a rental unit hosted by Sagrario.</h3>
        <img
          src="https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240"
          alt=""
        />
      </div>
      <div className="rooms">
        <div className="room">
        <i class="fa-solid fa-bed"></i>
            <p>1 double bed</p>
        </div>
        <div className="room">
        <i class="fa-solid fa-shower"></i>
        <p>Shared bathroom.</p>

        </div>
        <div className="room">
        <i class="fa-solid fa-house-user"></i>
        <p>Host and other guests may be here.</p>

        </div>
      </div>
      <hr />

      <div className="mt-3">
        <div className="room-title">
        <i class="fa-solid fa-users-rectangle"></i>
            <div><h5>Room in a rental unit.</h5>
            <p>Your own room in a home, plus access to shared spaces..</p>

            </div>
        </div>

        <div className="room-title">
        <i class="fa-solid fa-user-secret"></i>
            <div><h5>Dedicated workspace.</h5>
            <p>A room with wifi that’s well-suited for working..</p>

            </div>
        </div>

        <div className="room-title">
        <i class="fa-solid fa-ethernet"></i>
            <div><h5>Sagrario is a Superhost</h5>
            <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests..</p>

            </div>
        </div>

    
      </div>
      <hr />
    </div>
  );
}

export default Rooms;
