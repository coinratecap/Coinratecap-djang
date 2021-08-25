import React from 'react';
import {Nav,NavLink,Bars,NavMenu, NavBtn, NavBtnLink} from './Navbarelements';
import * as AiIcons from 'react-icons/ai';





const Navbar = () => {
    return (
        <Nav>
            <NavLink to ="/">
                <img src = {require('../../images/crclogo.png')} alt='coinratecap' />
            </NavLink>

             <Bars />
            <NavMenu>
                <NavLink to ="/" activestyle>
                    Coins
                    <AiIcons.AiOutlineDown />
                </NavLink>

                <NavLink to ="/exchanges" activestyle>
                    Exchanges
                </NavLink>

                <NavLink to ="/nfts" activestyle>
                    NFT
                </NavLink>

                <NavLink to ="/wallets" activestyle>
                    Wallets
                </NavLink>

                <NavLink to ="/blogs" activestyle>
                    Blogs
                </NavLink>

                <NavLink to ="/accounts" activestyle>
                    Accounts
                </NavLink>
 <NavBtnLink to='/submitcoin'>  <AiIcons.AiOutlineCloudUpload />  Submit Coin </NavBtnLink>

            </NavMenu>

          <NavBtn>



        </NavBtn>
        </Nav>
    )
};

export default Navbar;

