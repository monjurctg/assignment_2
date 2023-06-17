import React from "react";

function Loader() {
    
   
    
  return (
    <div
      className="loader "
      style={{ width: "100%", margin: "0 auto", padding: 20 ,zIndex:-1 }}
    >
      <div className="d1" style={{ height: 80, background: "#DDDDDD" }}></div>
      <div
        className="d-flex mt-3"
        style={{ gap: 15, width: "100%", margin: "0 auto" }}
      >
        <div
          className="w-50"
          style={{ height: 300, background: "#DDDDDD", borderRadius: 15 }}
        ></div>
        <div className="w-50 right-images" style={{ height: 300 }}>
          <div
            style={{ height: 140, background: "#DDDDDD", borderRadius: 5 }}
          ></div>
          <div
            style={{ height: 140, background: "#DDDDDD", borderRadius: 5 }}
          ></div>
          <div
            style={{ height: 140, background: "#DDDDDD", borderRadius: 5 }}
          ></div>
          <div
            style={{ height: 140, background: "#DDDDDD", borderRadius: 5 }}
          ></div>
        </div>
      </div>
      <div className="mt-4" style={{ display: "flex ", gap: "10px" }}>
        <div
          style={{
            height: 40,
            width: 40,
            background: "#DDDDDD",
            borderRadius: 100,
          }}
        ></div>
        <div
          style={{
            height: 50,
            background: "#DDDDDD",
            borderRadius: 5,
            width: "500px",
          }}
        ></div>
      </div>
      <div className="d-flex p-4 justify-content-between flex-wrap">
        <div
          className="mt-3"
          style={{
            height: 50,
            background: "#DDDDDD",
            borderRadius: 5,
            width: "500px",
          }}
        ></div>
        <div
          className="mt-3"
          style={{
            height: 50,
            background: "#DDDDDD",
            borderRadius: 5,
            width: "500px",
          }}
        ></div>
      </div>
     
    </div>
  );
}

export default Loader;
