import React from 'react'
import { SwiperSlide,Swiper } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax,Pagination,Navigation } from 'swiper/modules';


export default function SlideEcon() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          width : "65%"
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://www.shutterstock.com/image-vector/financial-chart-moving-stock-market-600nw-1867623529.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide style={{backgroundImage : "url(https://www.shutterstock.com/image-vector/financial-chart-moving-stock-market-600nw-1867623529.jpg)",padding : "25px"}}>
          <div style={{width : "60%",fontSize : "medium"}} className="title" data-swiper-parallax="-300">
            <h1 style={{textAlign: "start"}}>Amerika'da Fed, Faiz Oranlarini Artirma Karari Aldi: Ekonomik Etkiler Neler Olabilir?</h1>
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p style={{textAlign : "start"}}>
            Amerika Merkez Bankasi (Fed), bugün gerçekleştirdiği toplantida faiz oranlarini artirma karari aldi.
             Bu karar, ekonomi ve finans dünyasinda geniş bir yanki buldu. Fed'in faiz artirimina gitme karari,
             enflasyon endişeleri ve ekonomik büyümenin sürdürülebilirliği konularindaki belirsizlikleri ele alma amacini taşiyor.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{backgroundImage : "url(https://www.apple.com/v/apple-events/home/ac/images/meta/overview__bcphzsdb4fpu_og.png?202310280440)",padding : "25px"}}>
          <div style={{width : "60%",fontSize : "medium"}} className="title" data-swiper-parallax="-300">
            <h1 style={{textAlign: "start"}}>Apple, Yeni Nesil Sanal Gerçeklik Deneyimini Tanitti</h1>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p style={{textAlign : "start"}}>
            Teknoloji devi Apple, sonunda merakla beklenen sanal gerçeklik (VR) ürününü tanitti. 
            Yeni Apple VR, kullanicilara benzersiz bir dijital dünya deneyimi sunarak teknoloji sinirlarini bir kez daha zorluyor
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{backgroundImage : "url(https://cdn.betakit.com/wp-content/uploads/2023/03/open-ai-770x513.jpg)",padding : "25px"}}  >
          
          <div style={{width : "60%",fontSize : "medium"}} className="title" data-swiper-parallax="-300">
            <h1 style={{textAlign: "start"}}>OpenAI, Yeni Nesil Sanal Gerçeklik Deneyimini Sunan Modelini Tanitti: İşte GPT-4'ün Öne Çikan Özellikleri</h1>
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p style={{textAlign : "start"}}>
            Yapay zeka alanindaki liderlerden biri olan OpenAI, GPT-4 adli yeni modelini duyurarak sanal gerçeklik (VR) deneyimini bir üst seviyeye taşidi. 
            GPT-4, kullanicilara sürükleyici bir dijital dünya keşfetme firsati sunarak yapay zeka teknolojisinin sinirlarini genişletiyor.
            </p>
          </div>
        </SwiperSlide>

      </Swiper>
    </>


  )
}
