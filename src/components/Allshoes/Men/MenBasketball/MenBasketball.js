import React from "react";

// import './MenBasketball.css';
import AllShoes_Navbar from "../../AllShoes_Navbar/AllShoes_Navbar";
import ShoeComponent from "../../ShoeComponent/ShoeComponent";
import AllShoes from "../../AllShoes.css";

const Pg = "https://i.imgur.com/4whbv5F.jpg";
const Kyrie3 = "https://i.imgur.com/Itz0Clw.jpg";
const Lebron17 = "https://i.imgur.com/IJDbmLf.jpg";
const Pg4 = "./pg4.jpg";
const Lebron17FP = "https://i.imgur.com/pWc2PNW.jpg";
const KybridS2 = "https://i.imgur.com/i18LKAL.jpg";
const Freak2 = "https://i.imgur.com/4whbv5F.jpg";
const Lebron17Monstars = "https://i.imgur.com/DS9fUCf.jpg";
const Kyrie6 = "https://i.imgur.com/fKzqfkI.jpg";

const MenBasketball = () => {
  return (
    <div className="allShoes">
      <AllShoes_Navbar
        title="Men's"
        // titleColor="shoeComponent__name1"
        pathGym="/men/gym"
        pathJordan="/men/jordan"
        pathWalking="/men/running"
        pathFootball="/men/football"
        pathAthletics="/men/tennis"
        pathBasketball="/men/basketball"
      />
      <div className="allShoes__shoes">
        <ShoeComponent
          image={Kyrie3}
          id="600000"
          title="Kyrie Low 3 EP"
          before={135}
          after={100}
          category="Basketball Shoe"
        />
        <ShoeComponent
          image={Lebron17}
          id="600001"
          title="Lebron 17 Low PH"
          before={190}
          after={165}
          category="Basketball Shoe"
        />
        <ShoeComponent
          image={Pg}
          id="600002"
          title="PG4 PCG EP"
          before={120}
          after={120}
          category="Basketball Shoe"
        />
        <ShoeComponent
          image={Lebron17FP}
          id="600003"
          title="Lebron 17 FP"
          before={260}
          after={220}
          category="Basketball Shoe"
        />
        <ShoeComponent
          image={KybridS2}
          id="600004"
          title="Kybrid S2 EP"
          before={160}
          after={160}
          category="Basketball Shoe"
        />
        <ShoeComponent
          image={Freak2}
          id="600005"
          title="Zoom Freak 2 Naija"
          before={140}
          after={120}
          category="Basketball Shoe"
        />
        <ShoeComponent
          image={Lebron17Monstars}
          id="600006"
          title="Lebron 17 Monstars"
          before={210}
          after={170}
          category="Basketball Shoe"
        />
        <ShoeComponent
          image={Kyrie6}
          id="600007"
          title="Kyrie 6 AS EP"
          before={135}
          after={120}
          category="Basketball Shoe"
        />
      </div>
    </div>
  );
};

export default MenBasketball;
