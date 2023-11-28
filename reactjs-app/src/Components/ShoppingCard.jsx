import { faShoppingCart , faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'



export default function ShoppingCard({ cartItems , removeFromCart  }) {

    const [isCardOpen,setIsCardOpen] = useState(false);
    

const openShoppingCard = () => {

    const shoppingCard = document.querySelector(".shoppingCard")

    shoppingCard.classList.toggle("open")

    setIsCardOpen(!isCardOpen)
} 

const calculateTotalPrice = () => {
    
    if (!cartItems || cartItems.length === 0) {
      return 0; 
    }
  
    return cartItems.reduce((total, product) => total + product.price, 0);
  };
    

  return (
    <>

        <div className="shoppingCardIcon">
            <FontAwesomeIcon icon={faShoppingCart} onClick={openShoppingCard}
            style={{ position : "fixed",
            top : "90px",
            right : "-10px",
            fontSize : "30px",
            color : "white",
            backgroundColor: "#3b479d",
            width : "75px",
            borderRadius : "10px",
            padding : "5px",
            cursor : "pointer"
            }} />
        </div>


        <div className="shoppingCard">

            <div className="header">
                    <h2>Shopping Card <FontAwesomeIcon icon={faShoppingCart} /></h2>
            </div>
            
            
                    {cartItems && cartItems.map((product) => {
                        
                        return  <div className="productShoppingCard">

                                    <img src={product.image} alt="title" />

                                    <FontAwesomeIcon icon={faClose} color='red' 
                                    style={{cursor : "pointer" ,
                                     fontSize : "20px",
                                     backgroundColor : "rgba(0, 0, 0, 0.900)"}}
                                     onClick={() => removeFromCart(product.id)} />

                                </div>
                        
                    })}
            

            <div className="totalPrice">
                <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
            </div>

        </div>
        
    </>

  )
}
