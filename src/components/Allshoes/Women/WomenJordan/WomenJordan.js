import React from 'react';

// import './WomenJordan.css';
import AllShoes_Navbar from '../../AllShoes_Navbar/AllShoes_Navbar';
import ShoeComponent from '../../ShoeComponent/ShoeComponent';
import AllShoes from '../../AllShoes.css';

const Retro4 = 'https://i.imgur.com/gN8SDQ6.jpg';
const Delta = 'https://i.imgur.com/4dAsnmn.jpg';
const Max200 = 'https://i.imgur.com/fZ4nYbl.jpg';
const Latitude = 'https://i.imgur.com/7g7nKhM.jpg';
const JordanOG = 'https://i.imgur.com/cyhnGdd.jpg';
const Low11 = 'https://i.imgur.com/EVUkGvX.jpg';

const WomenJordan = () => {
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
          image={Retro4}
          id="330000"
          title="Air Jordan 4 Retro"
          before={185}
          after={160}
          category="Women's Shoe"
        />
        <ShoeComponent 
          image={Delta}
          id="330001"
          title="Jordan Delta"
          before={140}
          after={140}
          category="Women's Shoe"
        />
        <ShoeComponent 
          image={Max200}
          id="330002"
          title="Jordan Air Max 200 XX"
          before={130}
          after={130}
          category="Women's Shoe"
        />
        <ShoeComponent 
          image={Latitude}
          id="330003"
          title="Jordan Air Latitude 720"
          before={200}
          after={175}
          category="Women's Shoe"
        />
        <ShoeComponent 
          image={JordanOG}
          id="330004"
          title="Air Jordan OG"
          before={180}
          after={150}
          category="Women's Shoe"
        />
        <ShoeComponent 
          image={Low11}
          id="330005"
          title="Air Jordan Low 11"
          before={190}
          after={170}
          category="Women's Shoe"
        />
      </div>
    </div>
  );
}

export default WomenJordan;