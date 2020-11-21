import React from "react";

// import './MenGym.css';
import AllShoes_Navbar from "../../AllShoes_Navbar/AllShoes_Navbar";
import ShoeComponent from "../../ShoeComponent/ShoeComponent";
import AllShoes from "../../AllShoes.css";

const Metcon6 = "https://i.imgur.com/g8Yjehp.jpg";
const AirMonarch = "https://i.imgur.com/Gg9G7pP.jpg";
const MatFraser = "https://i.imgur.com/xdvOjeX.jpg";
const MaxAlpha = "https://i.imgur.com/hPCVwjZ.jpg";
const AirZoom = "https://i.imgur.com/ebV4zfW.jpg";
const Romaleos4 = "https://i.imgur.com/tuihudW.jpg";

const MenGym = () => {
  return (
    <div className="allShoes">
      <AllShoes_Navbar
        title="Men's"
        pathGym="/men/gym"
        pathJordan="/men/jordan"
        pathWalking="/men/running"
        pathFootball="/men/football"
        pathAthletics="/men/tennis"
        pathBasketball="/men/basketball"
      />
      <div className="allShoes__shoes">
        <ShoeComponent
          id="100000"
          image={Metcon6}
          title="Nike Metcon 6"
          before={170}
          after={140}
          category="Gym Shoe"
        />
        <ShoeComponent
          id="100001"
          image={Romaleos4}
          title="Nike Romaleos 4 SE"
          before={240}
          after={200}
          category="Gym Shoe"
        />
        <ShoeComponent
          id="100002"
          image={AirZoom}
          title="Nike Air Zoom SuperRep"
          before={130}
          after={130}
          category="Gym Shoe"
        />
        <ShoeComponent
          id="100003"
          image={MatFraser}
          title="Nike Metcon 6 Mat Fraser"
          before={190}
          after={190}
          category="Gym Shoe"
        />
        <ShoeComponent
          id="100004"
          image={AirMonarch}
          title="Nike Air Monarch IV"
          before={70}
          after={60}
          category="Gym Shoe"
        />
        <ShoeComponent
          id="100005"
          image={MaxAlpha}
          title="Nike Max ALpha Trainer 2"
          before={100}
          after={100}
          category="Gym Shoe"
        />
      </div>
    </div>
  );
};

export default MenGym;
