import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Slide3 from '../Components/Slide3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ShoppingCard from '../Components/ShoppingCard';

export default function Women() {

    const [apiData,setApiData] = useState([]);

    function handleTitle(string) {
        return string.slice(0,20)
    }

useEffect(() => {

    const apiRequest = async () => {

        try {

            const request = await fetch("https://fakestoreapi.com/products");
            const response = await request.json(); 
            setApiData(response)

        } catch (error) {
            console.log("Api dan gelen istek",error)
        }


    }
    apiRequest();
},[])



const womensClothes = apiData.filter((data) => data.category === "women's clothing" )


  return (

    <>

        <ShoppingCard ></ShoppingCard>
        <Slide3></Slide3>

        <div className="flex-container2">
        <div className="articles">

            {womensClothes && womensClothes.map((product) => {

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
                                                <button ><FontAwesomeIcon icon={faShoppingCart} style={{width : "80%"}} /></button>
                                            </Link>
                                            <Link to={`/products/${product.id}`} >
                                                <button>İncele</button>
                                            </Link>
                                        </div>
                                    
                                    </div>
                            </article>
                
            })}


        </div>
    </div>
    </>
  )
}
