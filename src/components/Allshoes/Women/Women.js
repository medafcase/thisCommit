import React from 'react';

import './Women.css';
import MenWomenFootwear from '../MenWomenFootwear/MenWomenFootwear';
// import AllShoes_Navbar from '../AllShoes_Navbar/AllShoes_Navbar';
const WGym = 'https://i.imgur.com/OBueZly.jpg';
const WTennis = 'https://i.imgur.com/2tNcs2S.jpg';
const WJordan = 'https://i.imgur.com/yEaFyGV.jpg';
const WRunning = 'https://i.imgur.com/OlilgdC.jpg';
const WFootball = 'https://i.imgur.com/Vc7OCox.jpg';
const WBasketball = 'https://i.imgur.com/hWJ1vCW.jpg';

const Women = () => {
  return (
    <div className="women">
      {/* <AllShoes_Navbar 
        title="Women's"
        pathGym="/women/gym"
        pathJordan="/women/jordan"
        pathWalking="/women/running"
        pathFootball="/women/football"
        pathAthletics="/women/tennis"
        pathBasketball="/women/basketball"
      /> */}
      .
      <div className="men__categories">
        <MenWomenFootwear 
          title="Gym Shoes"
          image={WGym}
          pathTo="/women/gym"
        />
        <MenWomenFootwear 
          title="Tennis Shoes"
          image={WTennis}
          pathTo="/women/tennis"
        />
        <MenWomenFootwear 
          title="Air Jordan"
          image={WJordan}
          pathTo="/women/jordan"
        />
        <MenWomenFootwear 
          title="Running Shoes"
          image={WRunning}
          pathTo="/women/running"
        />
        <MenWomenFootwear 
          title="Football Boots"
          image={WFootball}
          pathTo="/women/football"
        />
        <MenWomenFootwear 
          title="Basketball Shoes"
          image={WBasketball}
          pathTo="/women/basketball"
        />
      </div>
      .
    </div>
  );
}

export default Women;