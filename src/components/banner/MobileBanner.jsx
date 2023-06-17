import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

function MobileBanner() {
  return (
    <div>
       <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img
        height={300}
        style={{width:"100%"}}
            src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=960"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
        height={300}
        style={{width:"100%"}}
            src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=960"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
        height={300}
        style={{width:"100%"}}
            src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=960"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
        height={300}
        style={{width:"100%"}}
            src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=960"
            alt=""
          />
        </SwiperSlide>
   
      </Swiper>
    </>


    </div>
  )
}

export default MobileBanner