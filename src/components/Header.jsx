import React from "react";

function Header() {
  return (
    <div>
      {/* for mobile */}
      <div className="mobile-header d-md-none">
        <div>
          <span>
            <i class="fa-solid fa-chevron-left "></i>
          </span>
          <span className="ps-2 " style={{ fontWeight: "500" }}>
            Home
          </span>
        </div>
        <div>
          <span className="ps-3">
            <i class="fa-solid fa-upload "></i>
          </span>
          <span className="ps-3">
            <i class="fa-regular fa-heart "></i>
          </span>
        </div>
      </div>
      {/* for large  */}
      <div className="header-container d-none d-md-block">
        <header className="container">
          <div className="" style={{ width: "120px" }}>
            <img
              height={75}
              className="w-100"
              width={120}
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div className="search-container">
            <div className="search-btn">
              <p>Start your search</p>
              <p className="icon">
                <i class="fa-solid fa-magnifying-glass"></i>
              </p>
            </div>
          </div>
          <div className="header-right">
            <div className="nav-btn">
              <p>Airnb your home</p>
            </div>
            <div className="nav-btn">
              <p>
                <i class="fa-solid fa-globe"></i>
              </p>
            </div>
            <div className="profile">
              <i class="fa-solid fa-bars"></i>
              <i class="fa-solid fa-circle-user"></i>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
