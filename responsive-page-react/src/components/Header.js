import React from "react"
import "../Css/Header.css"
import row from "bootstrap"



export default function Header (){
    return(
       
           <div sm md={6} > <i class="bi bi-search"></i>
            <input className="searchBox" placeholder="Search for your favorite groups in ATG" />
           
           
                
         
           </div>

    )
}