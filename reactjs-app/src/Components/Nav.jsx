import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'




export default function Nav() {
        
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (

    <div className="navcontainer">

        <div className="navelements">

            <ul>
                <li>
                    
                        <NavLink to="/">Anasayfa</NavLink>
                    
                </li>

                <li     onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                        >

                        <NavLink to="/products"> Products ➖ </NavLink>
                        <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                        <ul className='dropdown'>
                                <li><NavLink to="/mensclothes">Mens</NavLink></li>
                                <li><NavLink to="/womensclothes">Women</NavLink></li>
                                <li><NavLink to="/jews">Jew</NavLink></li>
                                <li><NavLink to="/electrics">Electronics</NavLink></li>
                        </ul>
                        </div>
                </li>
        
                <li>
                    
                        <NavLink to="/economics">Economics</NavLink>
                 
                </li>
        

                <li>
                    
                        <NavLink to="/todo">To-Do App</NavLink>
                 
                </li>

        
                
            </ul>

        </div>

    </div>

    

  )
}
