import React, { Component } from 'react'
import IconPanier from'./IconPanier'
import {
    
    Link
  } from "react-router-dom";

export class Navbar extends Component {
    render() {
        const{shPlat,shProduct } = this.props

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">                
                
               
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link " to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        {shProduct?<Link className="nav-link" to="/product">product</Link>:<div></div>}                                          
                    </li>
                    <li className="nav-item">
                        {shPlat?<Link className="nav-link" to="/client">nos plat</Link>:<div></div> }                                           
                    </li>
                                                      
                    </ul>
                        <Link className="nav-link" to="/inscrit">inscription</Link>
                        <Link className="nav-link" to="/connx">connexion</Link>

                        <div>
                        <IconPanier /> 
                        </div>  


                    
                </div>
            </nav>
        )
    }
}

export default Navbar
