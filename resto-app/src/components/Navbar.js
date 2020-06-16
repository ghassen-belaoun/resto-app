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
                
                <img className='logo' src="data:image/jpeg;base64,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" ></img>
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
