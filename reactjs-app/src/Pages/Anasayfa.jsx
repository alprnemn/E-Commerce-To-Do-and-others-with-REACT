import React, { useState , useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Anasayfa() {

  const [language, setLanguage] = useState('TR');
  const [visible, setVisible] = useState(false);

const fadeIn = useSpring({

    opacity: visible ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1200 },

});

const toggleLanguage = () => {

    setVisible(false);
    setLanguage((prevLanguage) => (prevLanguage === 'TR' ? 'EN' : 'TR'));

};

const handleAnimation = () => {

    setVisible(true);

};

useEffect( () => {

    setVisible(true);

}, []);

  return (
    <>
      <div className="homeContainer">

        

        <animated.div style={fadeIn} className="descriptionHomePage">
          <h2>{language === 'TR' ? 'Hoşgeldiniz' : 'Welcome'}</h2>

          <p>
            {language === 'TR' ? (
              <>
                <p>Merhaba, ben Alperen Emin. Bu projemde, React, JavaScript, HTML ve CSS kullanarak çeşitli konularda faydali
                bilgiler paylaşan bir platform oluşturdum. Projemde öne çikan başliklar arasinda bir "Todo-App" uygulamasi,
                e-ticaret yapisi ve ekonomik grafikler bulunmaktadir.</p>
                <br />
                <p>Todo-App:
                Projemde geliştirdiğim "Todo-App" ile günlük görevlerinizi düzenleyebilir,
                takip edebilir ve tamamlandikça işaretleyebilirsiniz.
                Kullanici dostu arayüzü ve pratik özellikleriyle, günlük işlerinizi daha organize bir şekilde
                yönetmenize olanak taniyor.</p>
                <br />
                <p>E-Ticaret Yapisi:
                React ve diğer web teknolojileriyle oluşturduğum e-ticaret yapisi, alişveriş deneyiminizi
                daha etkileşimli ve kolay hale getiriyor. Sepetim özelliği ile istediğiniz ürünleri ekleyebilir,
                çikartabilir ve alişverişinizi güvenli bir şekilde tamamlayabilirsiniz.</p>
                <br />
                <p>Ekonomik Grafikler:
                Ayrica, projemde ekonomik verileri daha anlaşilir bir şekilde
                sunabilmek için çeşitli grafikler de yer aliyor.
                Bu grafikler araciliğiyla ekonomik göstergeleri takip edebilir,
                verileri analiz edebilir ve bilinçli kararlar alabilirsiniz.</p>
              </>
            ) : (
              <>
                <p>Hello, I'm Alperen Emin. In this project, I've created a platform using React, JavaScript, HTML, and CSS to
                share useful information on various topics. The highlighted sections of my project include a "Todo-App"
                application, an e-commerce structure, and several economic charts.</p>
                <br />
                <p>Todo-App:
                With the "Todo-App" I developed in this project, you can organize, track, and mark your daily
                tasks as completed. With its user-friendly interface and practical features, it allows you to
                manage your daily tasks more efficiently.</p>
                <br />
                <p>E-Commerce Structure:
                The e-commerce structure I built using React and other web technologies
                enhances your shopping experience, making it more interactive and straightforward.
                With the cart feature, you can add, remove, and securely complete your purchases.</p>
                <br />
                <p>Economic Charts:
                Additionally, my project includes various charts to present economic data
                in a more understandable way. Through these charts, you can track economic indicators,
                analyze data, and make informed decisions.</p>
                <br />
                <p>Explore my website for more details on the technologies used and
                the applications created in the project. I hope this platform provides you with an
                informative and enjoyable experience. Happy exploring!</p>
              </>
            )}
          </p>
        </animated.div>

        <div className="switchLangButton">
          <button onClick={() => { toggleLanguage(); handleAnimation(); }} className="languageButton">
            {language === 'TR' ? 'EN' : 'TR'}
          </button>
        </div>
      </div>
    </>
  );
}
