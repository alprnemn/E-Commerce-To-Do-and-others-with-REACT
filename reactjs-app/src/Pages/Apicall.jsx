import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slide3 from '../Components/Slide3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ShoppingCard from '../Components/ShoppingCard';


export default function Apicall(props) {

    const loader = props.loader
    const [apiData,setApiData] = useState([])
    const [inputValue,setInputValue] = useState("")    
    const [cartItems, setCartItems] = useState([]);
    const [addedProductIds, setAddedProductIds] = useState([]);


    function handleTitle(string) {
        return string.slice(0,20)
    }

useEffect(() => {

    const apiRequest = async () => {

        try {

            loader.current.classList.add("active")

            const request = await fetch("https://fakestoreapi.com/products")
        
            const response = await request.json()

            loader.current.classList.remove("active")

            console.log("API den gelen veri: ",response)

            setApiData(response)

        } catch (error) {
            console.log("API den gelen hata: ",error)
        }
    }
    
    apiRequest()
},[loader])

const changeInputValue = (event) => {
    setInputValue(event.target.value)
}

const addToCart = (product) => {
    
    if (!addedProductIds.includes(product.id)) {

      setCartItems([...cartItems, product]);
      setAddedProductIds([...addedProductIds, product.id]);

    } else {

      alert("Bu ürün zaten eklenmiş..")

    }
  };

const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    setAddedProductIds(addedProductIds.filter((id) => id !== productId));
};

  return (

    <>

        <ShoppingCard cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart} ></ShoppingCard>

        <Slide3></Slide3>

        <div className="searchButtonDiv">
        <input onChange={changeInputValue} id='searchButton' type="search" placeholder='search product' value={inputValue} />
        </div>    

        <div className="flex-container2">

        <div className="articles">

            {apiData && apiData.map((product) => {

                if (product.title.toLowerCase().includes(inputValue.toLowerCase())) {

                    return  <article key={product.id}>

                                    <div className="priceDiv">
                                        {product.price}$
                                    </div>

                                    <figure>
                                        <img
                                            src={product.image}
                                            alt="Preview"
                                        />
                                    </figure>

                                    <div class="article-preview">                    
                                        
                                        <h2>{handleTitle(product.title)}</h2>

                                        <div className="inspectbutton">
                                            <Link >
                                                <button onClick={() => addToCart(product)}><FontAwesomeIcon icon={faShoppingCart} style={{width : "80%"}} /></button>
                                            </Link>
                                            <Link to={`/products/${product.id}`}>
                                                <button>İncele</button>
                                            </Link>
                                        </div>
                                    
                                    </div>
                            </article>
                }
            })}
        </div>
        </div>
    </>
)
}
