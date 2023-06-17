import React from "react";
import Header from "../components/Header";
import Banner from "../components/banner/Banner";
import MeetYourHost from "../components/MeetYourHost";
import Rooms from "../components/Rooms";
import Sleep from "../components/Sleep";
import PlaceOffer from "../components/PlaceOffer";
import Calendar from "../components/Calender";
import Reviews from "../components/review/Reviews";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import StickyCard from "../components/StickyCard";
import Loader from "../components/loader/Loader";

function Index() {
  const containerRef = useRef(null);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isHeader, setIsheader] = useState(true);

const[loading,setLoading]=useState(true)


  useEffect(() => {
    const options1 = {
      root: null,
      rootMargin: "430px",
      threshold: 1.0,
    };
    const options2 = {
      root: null,
      rootMargin: "2710px",
      threshold: 1.0,
    };

    const callback1 = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 1) {
          setIsDivVisible(true);
          // alert("tkdjfk")
        } else {
          setIsDivVisible(false);
        }
      });
    };

    const callback2 = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 1) {
          setIsheader(true);
        } else {
          setIsheader(false);
        }
      });
    };

    const observer1 = new IntersectionObserver(callback1, options1);
    const observer2 = new IntersectionObserver(callback2, options2);
console.log(observer1,observer2)
    if (containerRef.current) {
      observer1.observe(containerRef.current);
    }
    if (containerRef.current) {
      observer2.observe(containerRef.current);
    }

  
    // Cleanup observer on component unmount
    return () => {
      if (containerRef.current) {
        observer1.unobserve(containerRef.current);
      }
      if (containerRef.current) {
        observer2.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleComponentScroll = () => {
    console.log("hello");
    // setScrolledComponents(prevCount => prevCount + 1);
  };

  // setTimeout(()=>{
  //   setLoading(false)
  // },1000)

  // if(loading){
  //   return <Loader/>
  // }



  return (
    <div>
      
      <div ref={containerRef}>
        <Header />
        <Banner />
      </div>
      {!isDivVisible && (
        <div
          className="header-sticky d-none d-md-block"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="container d-flex justify-content-between align-items-center">
            <ul className="d-flex flex-row g-3" style={{ gap: 30 }}>
              <li>
                <a href="#"> Photos</a>
              </li>
              <li>
                <a href="#"> Amemities</a>
              </li>
              <li>
                <a href="#"> Reviews</a>
              </li>
              <li>
                <a href="#"> Locations</a>
              </li>
            </ul>

            {!isHeader && (
              <div className="d-flex" style={{ gap: 15 ,zIndex:999}}>
                <div className="header-night">
                  <div>
                    <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                      $37
                    </span>
                    <span>night</span>
                  </div>
                  <div st>
                    <span>
                      <i
                        class="fa-solid fa-star"
                        style={{ fontSize: "14px" }}
                      ></i>
                    </span>
                    <span style={{ margin: 3 }}>4.8</span>
                    <span>
                      <a
                        style={{ fontSize: 13, fontWeight: 400, color: "gray" }}
                        href="#"
                      >
                        {" "}
                        171 views
                      </a>
                    </span>
                  </div>
                </div>
                <div>
                  <div
                    className="check-btn"
                    style={{ marginTop: 0, fontSize: 13 }}
                  >
                    <p>Check Availability</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <main>
        <div className="container-md p-sm-4">
          <div className="row">
            <div className="col-12 col-lg-7">
              <Rooms />
              <MeetYourHost />
              <div className="mt-3">
                <h4 className="">About this place</h4>
                <p className="mt-3">
                  Nice and spacious room in the heart of Valencia, with double
                  bed and a balcony. Silent because there is no traffic.
                  Surrounded by all the landmarks , museums , cathedral ,
                  leisure, and close to the beach where you can go by bike, bus
                  , tram or car if your means of transportation. I would love to
                  receive people wanting to enjoy my city and help in what I can
                  .
                </p>

                <a href="#">
                  {" "}
                  See more{" "}
                  <span>
                    <i class="fa-solid fa-angle-right"></i>
                  </span>
                </a>
              </div>
              <hr className="mt-5" />
              <Sleep />
              <PlaceOffer />
            </div>
            <div className="col-12 col-lg-5 d-none d-md-block sticky-card">
              <StickyCard />
            </div>
          </div>
          <Reviews />
          <hr className="mt-5" />
          <div className="mt-5">
            <h4>Where you’ll be</h4>
            <div className="map mt-3">
              <img className="w-100" src="https://staticmapmaker.com/img/google-placeholder.png" alt="" />
            </div>
          </div>
        </div>
      </main>
      <div className="d-md-none ">
        <div className="fixed-footer p-4 ">
          <div className="d-flex justify-content-between" style={{ gap: 15 }}>
            <div className="header-night">
              <div>
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  $37
                </span>
                <span>night</span>
              </div>
              <div st>
                <span>
                  <i class="fa-solid fa-star" style={{ fontSize: "14px" }}></i>
                </span>
                <span style={{ margin: 3 }}>4.8</span>
                <span>
                  <a
                    style={{ fontSize: 13, fontWeight: 400, color: "gray" }}
                    href="#"
                  >
                    {" "}
                    171 views
                  </a>
                </span>
              </div>
            </div>
            <div>
              <div className="check-btn" style={{ marginTop: 0, fontSize: 13 }}>
                <p>Check Availability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
