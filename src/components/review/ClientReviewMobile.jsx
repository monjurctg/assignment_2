import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import ClientReview from "./ClientReview";

function ClientReviewMobile() {
  return (
    <div className="mt-5">
       <>
      <Swiper
        pagination={{
        //   type: "fraction",
        }}
        
        
        slidesPerView={1.3}
        spaceBetween={20}
        // navigation={true}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
       <div style={{border:"1px solid gray",height:230,padding:"10px",borderRadius:"10px"}}>
       <ClientReview name={"shahedul alam"} title={"May 2023"} discription={"I had a Great Time Staying at Sagrario’s place! Her apartment is perfectly located in the centre of el Carmen. Her information on festivities and the area were one of a kind. I ca"}/>
     
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{border:"1px solid gray",height:230,padding:"10px",borderRadius:"10px"}}>
       <ClientReview name={"shahedul alam"} title={"May 2023"} discription={"I had a Great Time Staying at Sagrario’s place! Her apartment is perfectly located in the centre of el Carmen. Her information on festivities and the area were one of a kind. I ca"}/>
     
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{border:"1px solid gray",height:230,padding:"10px",borderRadius:"10px"}}>
       <ClientReview name={"shahedul alam"} title={"May 2023"} discription={"I had a Great Time Staying at Sagrario’s place! Her apartment is perfectly located in the centre of el Carmen. Her information on festivities and the area were one of a kind. I ca"}/>
     
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{border:"1px solid gray",height:230,padding:"10px",borderRadius:"10px"}}>
       <ClientReview name={"shahedul alam"} title={"May 2023"} discription={"I had a Great Time Staying at Sagrario’s place! Her apartment is perfectly located in the centre of el Carmen. Her information on festivities and the area were one of a kind. I ca"}/>
     
       </div>
        </SwiperSlide>
   
      </Swiper>
    </>


    </div>
  )
}

export default ClientReviewMobile