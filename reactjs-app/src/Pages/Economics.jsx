import React from 'react';
import SlideEcon from '../Components/SlideEcon'
import GraphInfRate from '../Components/GraphInfRate'
import AreaChartBTC from '../Components/AreaChartBTC';
import BarCharts from '../Components/BarCharts';






export default function Economics() {

    

  return (

    <div className='charts-container'>

            <SlideEcon></SlideEcon>

            <div className="econ-charts">

              <div className="inf-chart">   

                <div className="descriptionInf">
                  <h1 style={{color : "bisque"}}>Enflasyon ve Faiz Oranlari Arasindaki Dans: Ekonomik Dengeler Nasil Etkileniyor?</h1>
                  <p>
                  Ekonomik dünyada enflasyon ve faiz oranlari, birbirleriyle karmaşik bir etkileşim içinde bulunan iki temel faktördür.
                   Bu iki değişken arasindaki ilişki, bir ülkenin para politikasinin belirlenmesinde kritik bir rol oynamaktadir. 
                  İşte enflasyon ve faiz oranlari arasindaki bu derin dansin ana hatlari:
                  </p>
                </div>

                <div className="graphInf">
                  <GraphInfRate></GraphInfRate>
                </div>

              </div>

              

              <div className="btc-chart">

              <div className="graphInf">
                  <AreaChartBTC></AreaChartBTC>
              </div>

              <div className="descriptionBTC">

                  <h1 style={{color : "bisque"}}>Bitcoin'in Öncü Blockchain Teknolojisi: Kripto Paradan Daha Fazlası</h1>
                  <p>
                    Bitcoin, kripto paralari öncüsü olmasinin yani sira, 
                    blockchain teknolojisinin benzersiz bir kullanim örneği olarak öne cikiyor.
                    Bitcoin'in altinda yatan blockchain, merkezi olmayan bir defter sistemini temsil eder ve bir dizi
                    sektörde devrim niteliğinde değişikliklere yol açacak potansiyele sahiptir.
                  </p>
                </div>

                                           

              </div>


              <div className="bar-chart">

                <div className="descriptionBar">
                    <h1 style={{color : "bisque"}}>Modern Web Geliştirme: React, Angular ve Vue Ötesinde Yeni Teknolojik Yükselişler</h1>
                    <p>
                    Günümüzde web geliştirme, kullanici dostu, hizli ve etkileşimli kullanici arayüzleri oluşturmak için sürekli 
                    olarak evrim geçiriyor. Bu evrimde, öne çikan üç popüler JavaScript kütüphanesi/çerçevesi olan React,
                     Angular ve Vue, geliştiricilere güçlü araçlar sunarak modern web uygulamalarinin temelini oluşturuyor.
                    </p>
                </div>

                  <div className="graphBar">
                    <BarCharts></BarCharts>
                  </div>


              </div>



              
              
              </div>


          </div>
            
   
  );
}