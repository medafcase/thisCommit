import React from "react";

import "./Men.css";
// import AllShoes_Navbar from '../AllShoes_Navbar/AllShoes_Navbar';
import MenWomenFootwear from "../MenWomenFootwear/MenWomenFootwear";
const MGym = "https://i.imgur.com/AsT4Rol.jpg";
const MTennis = "https://i.imgur.com/OCgRBRM.jpg";
const MJordan = "https://i.imgur.com/686A2Au.jpg";
const MRunning = "https://i.imgur.com/z9GV7e8.jpg";
const MFootball = "https://i.imgur.com/YpyAg3m.jpg";
const MBasketball = "https://i.imgur.com/14Zczg7.jpg";

const Men = () => {
  return (
    <div className="men">
      {/* <AllShoes_Navbar 
        title="Men's"
        pathGym="/men/gym"
        pathJordan="/men/jordan"
        pathWalking="/men/walking"
        pathFootball="/men/football"
        pathAthletics="/men/athletics"
        pathBasketball="/men/basketball"
      />
      <div className="men__shoes">
        hi
      </div> */}
      .
      <div className="men__categories">
        <MenWomenFootwear title="Gym Shoes" image={MGym} pathTo="/men/gym" />
        <MenWomenFootwear
          title="Tennis Shoes"
          image={MTennis}
          pathTo="/men/tennis"
        />
        <MenWomenFootwear
          title="Air Jordan"
          image={MJordan}
          pathTo="/men/jordan"
        />
        <MenWomenFootwear
          title="Running Shoes"
          image={MRunning}
          pathTo="/men/running"
        />
        <MenWomenFootwear
          title="Football Boots"
          image={MFootball}
          pathTo="/men/football"
        />
        <MenWomenFootwear
          title="Basketball Shoes"
          image={MBasketball}
          pathTo="/men/basketball"
        />
      </div>
      .
    </div>
  );
};

export default Men;
