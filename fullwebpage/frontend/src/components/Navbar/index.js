import React, {useState} from 'react';
import {Link} from "react-router-dom"
import "./Navbar.css"
import * as AiIcons from 'react-icons/ai';







const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    // const [Dropdown, setdropdown] = useState(false)

    return (
        <nav className = "navbar">
            <Link to ="/">
                <img src = {require('../../images/crclogo.png')} alt='coinratecap' />
            </Link>

             <ul className={isMobile ? "nav-links-mobile": "nav-links"}
             onClick={() => setIsMobile(false)}>

                 <Link to="/"  className="coins">
                     <li>Coins <AiIcons.AiOutlineDown /></li>
                 </Link>
                 {/* {Dropdown && <Dropdown />} */}
                 <Link to="/exchanges" className="exchanges">
                     <li>Exchanges</li>
                 </Link>
                 <Link to="/nfts" className="nfts">
                     <li>NFTs</li>
                 </Link>
                 <Link to="/wallets" className="wallets">
                     <li>Wallets</li>
                    </Link> 
                    <Link to="/blogs" className="blog">
                     <li>Blog</li>
                    </Link>
                 <Link to="/account" className="account">
                     <li>Account</li>
                 </Link> 

                 <Link to="/submitcoin" className="navbtn">
                     <li>Submit Coin  <AiIcons.AiOutlineCloudUpload /></li>
                 </Link> 

                 {/* <Link to='/submitcoin' className="navbtn">  <AiIcons.AiOutlineCloudUpload /> Submit Coin  </Link> */}
                 </ul>


                 <button className="mobile-menu-icon" onClick={() =>setIsMobile(!isMobile)}>
                     {isMobile ? (<i className="fas fa-times"></i>): (<i className="fas fa-bars"></i> 
                     )}
                 </button> 

                 </nav>

    );
        };                 
            
export default Navbar;

