import React from 'react';

// import './WomenTennis.css';
import AllShoes_Navbar from '../../AllShoes_Navbar/AllShoes_Navbar';
import ShoeComponent from '../../ShoeComponent/ShoeComponent';
import AllShoes from '../../AllShoes.css';

const VaporX = 'https://i.imgur.com/SeLxAsQ.jpg';
const Wildcard = 'https://i.imgur.com/WVC23gv.jpg';
const ZoomZero = 'https://i.imgur.com/nS1NWBu.jpg';
const ZoomGP = 'https://i.imgur.com/1Njpxs8.jpg';
const Lite2 = 'https://i.imgur.com/TbXWJD1.jpg';

const WomenTennis = () => {
  return (
    <div className="allShoes">
      <AllShoes_Navbar 
        title="Women's"
        pathGym="/women/gym"
        pathJordan="/women/jordan"
        pathWalking="/women/running"
        pathFootball="/women/football"
        pathAthletics="/women/tennis"
        pathBasketball="/women/basketball"
      />
      <div className="allShoes__shoes">
        <ShoeComponent 
          image={VaporX}
          id="220000"
          title="NikeCourt Zoom Vapor X"
          before={200}
          after={170}
          category="Women's Hard-Court Tennis Shoe"
        />
        <ShoeComponent 
          image={Wildcard}
          id="220001"
          title="NikeCourt Max Wildcard"
          before={100}
          after={90}
          category="Women's Tennis Shoe"
        />
        <ShoeComponent 
          image={ZoomZero}
          id="220002"
          title="NikeCourt Zoom Zero"
          before={130}
          after={100}
          category="Women's Tennis Shoe"
        />
        <ShoeComponent 
          image={ZoomGP}
          id="220003"
          title="NikeCourt Zoom GP Turbo"
          before={170}
          after={170}
          category="Women's Hard-Court Tennis Shoe"
        />
        <ShoeComponent 
          image={Lite2}
          id="220004"
          title="NikeCourt Lite 2"
          before={70}
          after={60}
          category="Women's Hard-Court Tennis Shoe"
        />
      </div>
    </div>
  );
}

export default WomenTennis;