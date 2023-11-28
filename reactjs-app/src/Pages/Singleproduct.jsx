import React, { useEffect , useState } from 'react'
import { useParams  } from 'react-router-dom'



export default function Singleproduct() {

    const [apiData,setApiData] = useState([]);

    const { id } = useParams();

useEffect(() => {

    const apiRequest = async () => {

        try {
            const request = await fetch("https://fakestoreapi.com/products");
            const response = await request.json();

            setApiData(response)
            
            console.log("apidan gelen veri" , response)

        } catch (error) {
            console.log("Apidan gelen error: ",error)
        }
    }
    apiRequest();
},[])

    const selectedProduct = apiData.find(product => product.id == id);
    
  return (

    <>
        
                {selectedProduct && (

                    <>

                        <div className="singleProduct">

                            
                            <img src={selectedProduct.image} alt={selectedProduct.title} />
                           
                            <div className="singleProductDescription">
                                <p>Title: {selectedProduct.title}</p>
                                <p>Description : {selectedProduct.description}</p>
                                <p>Rating : {selectedProduct.rating.rate}</p>
                                <p>Price : {selectedProduct.price}</p>
                            </div>
                            

                            
                        </div>
                        
                    </>

            )}

    </>

  )
}
