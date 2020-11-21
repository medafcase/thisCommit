import React from 'react';

// import './WomenBasketball.css';
import AllShoes_Navbar from '../../AllShoes_Navbar/AllShoes_Navbar';
import ShoeComponent from '../../ShoeComponent/ShoeComponent';
import AllShoes from '../../AllShoes.css';

const AirMax = 'https://i.imgur.com/USdFvNp.jpg';
const Freak1 = 'https://i.imgur.com/0ZjDdl2.jpg';
const Kyrie4 = 'https://i.imgur.com/Zl05po0.jpg';
const Lebron17 = 'https://i.imgur.com/M0ZkdMk.jpg';
const Precision4 = 'https://i.imgur.com/BgWRQqd.jpg';
const Soldier14 = 'https://i.imgur.com/bgsy6We.jpg';
const Trey5 = 'https://i.imgur.com/mcWjaW0.jpg';


const WomenBasketball = () => {
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
          image={AirMax}
          id="660000"
          title="Nike Air Max Impact"
          before={120}
          after={100}
          category="Basketball Shoe"
        />
        <ShoeComponent 
          image={Freak1}
          id="660001"
          title="Zoom Freak 1"
          before={130}
          after={110}
          category="Basketball Shoe"
        />
        <ShoeComponent 
          image={Kyrie4}
          id="660002"
          title="Kyrie 4"
          before={140}
          after={110}
          category="Custom Basketball Shoe"
        />
        <ShoeComponent 
          image={Lebron17}
          id="660003"
          title="Lebron 17"
          before={240}
          after={190}
          category="Basketball Shoe"
        />
        <ShoeComponent 
          image={Precision4}
          id="660004"
          title="Nike Precision 4"
          before={70}
          after={55}
          category="Basketball Shoe"
        />
        <ShoeComponent 
          image={Soldier14}
          id="660005"
          title="Lebron Soldier 14 By You"
          before={210}
          after={170}
          category="Custom Basketball Shoe"
        />
        <ShoeComponent 
          image={Trey5}
          id="660006"
          title="KD Trey 5 VIII EP"
          before={90}
          after={90}
          category="Basketball Shoe"
        />
      </div>
    </div>
  );
}

export default WomenBasketball;