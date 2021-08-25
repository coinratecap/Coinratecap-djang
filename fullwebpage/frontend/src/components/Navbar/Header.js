import React from 'react';
import "./Navbar.css"

const Header = () => {
  return (
      <section style={{width: '100%'}}>
          
          <div className="row"> 
          <div className="columnad">
          <h4>Ad banner 1</h4>
   
        </div>
        <div class="columnadx">
        <h4>Ad banner 2</h4>
        </div>
        </div>
          
    <div
      style={{
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        textAlign:'center',
        height: '20vh',
        fontSize: '24px',
        paddingtop:'20px'

        
      }}
    >
      <h1>Top Rated Coins</h1><br />
      <h2 style={{fontSize:'20px',marginbottom:'20px'}}>Todays top rated coins</h2>
      
    
    </div>
    </section>
  );
};

export default Header;