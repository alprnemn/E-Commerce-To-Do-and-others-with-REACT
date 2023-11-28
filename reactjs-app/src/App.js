import './App.css';
import "./Darkmode.css";
import "./Nav.css";
import "./Charts.css";
import "./Swiperss.css";
import "./Footer.css";
import "./Todo.css";
import "./SlideEcon.css";
import "./ShoppingCard.css";
import "./Singleproduct.css";
import "./Homepage.css";


// components
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import ThemeSelector from './Components/ThemeSelector';


//pages
import Anasayfa from './Pages/Anasayfa';
import Singleproduct from './Pages/Singleproduct';
import Mensclothes from './Pages/Mensclothes';
import Apicall from './Pages/Apicall';
import Jewelery from './Pages/Jewelery';
import Economics from './Pages/Economics';
import Electronics from './Pages/Electronics';
import Women from './Pages/Women';
import Todo from './Pages/Todo';




//react router dom 
import { Routes , Route } from 'react-router-dom';
import { useRef } from 'react';


function App() {


function handleTitle(string){
    return string.slice(0,35)
}

const loader = useRef()



  return (

    <div className='bodyContainerApp'>

      

      <div className='nav'>
        <Nav></Nav>
      </div>
      <ThemeSelector></ThemeSelector>
      <hr></hr>
      <p className='loader' ref={loader} >Yukeniyor...</p>

      {/* create routers */}

      <Routes>

          <Route path='/' element={<Anasayfa/>} />
          <Route path='/products' element={<Apicall loader={loader} />} />
          <Route path='/products/:id' element={<Singleproduct/>} />
          <Route path='/mensclothes' element={<Mensclothes/>} />
          <Route path='/jews' element={<Jewelery/>} />
          <Route path='/electrics' element={<Electronics />} />
          <Route path='/economics' element={<Economics />} />
          <Route path='/womensclothes' element={<Women />} />
          <Route path="/todo" element={<Todo />} />

      </Routes>

      
      <Footer></Footer>
      
    
    </div>

    

  );
}

export default App;
