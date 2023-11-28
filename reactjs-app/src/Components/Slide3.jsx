import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination,Autoplay,Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Slide3() {

    const image1 = "https://getwpfunnels.com/wp-content/uploads/2022/12/Discount-Pricing-Strategy-For-Ecommerce.png"
    const image2 = "https://us-wd.gr-cdn.com/blog/sites/5/2022/05/0954/discount-strategy-guide-15.png"
    const image3 = "https://test.mbauniverse.com/sites/default/files/Topic-160620-563-302.jpg"
    const image4 = "https://www.webtoffee.com/wp-content/uploads/2020/05/how-to-use-coupons-deals-and-offers-boost-woocommerce-sales.jpg"
    const image5 = "https://www.giosg.com/hubfs/1-2.png"

  return (

    <div className="slide3">
                    
                    <Swiper
                    style={{width:"70%"}}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                        <SwiperSlide>
                            <img src={image1} alt="asdf" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image2} alt="asdf" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image3} alt="asdf" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image4} alt="asdf" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image5} alt="asdf" />
                        </SwiperSlide>

                    </Swiper>
                
        </div>
  )
}
