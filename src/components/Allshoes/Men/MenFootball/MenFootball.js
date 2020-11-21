import React from "react";

// import './MenFootball.css';
import AllShoes_Navbar from "../../AllShoes_Navbar/AllShoes_Navbar";
import ShoeComponent from "../../ShoeComponent/ShoeComponent";
import AllShoes from "../../AllShoes.css";

const PhantomGT = "https://i.imgur.com/aWAmaFs.jpg";
const PhantomGTclub = "https://i.imgur.com/qz2243N.jpg";
const Superfly7 = "https://i.imgur.com/uA5XGZ2.jpg";
const Tiempo8 = "https://i.imgur.com/S4RSMe6.jpg";
const Superfly7pro = "https://i.imgur.com/kjaBq6w.jpg";
const Vapor13 = "https://i.imgur.com/giEzbRl.jpg";
const Vapor13mds = "https://i.imgur.com/giEzbRl.jpg";
const Vision2 = "https://i.imgur.com/t95oz5N.jpg";
const Vapor13neymar = "https://i.imgur.com/Y2mCP3j.jpg";
const Legend8 = "https://i.imgur.com/ouK5osc.jpg";

const MenFootball = () => {
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
          image={PhantomGT}
          id="500000"
          title="Nike Phantom GT Elite"
          before={300}
          after={250}
          category="Firm-Ground Football Boot"
        />
        <ShoeComponent
          image={PhantomGTclub}
          id="500001"
          title="Nike Phantom GT Club"
          before={70}
          after={60}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent
          image={Superfly7}
          id="500002"
          title="Nike Mercurial Superfly 7"
          before={320}
          after={320}
          category="Firm-Ground Football Boot"
        />
        <ShoeComponent
          image={Tiempo8}
          id="500003"
          title="Nike Tiempo Legend 8"
          before={90}
          after={60}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent
          image={Superfly7pro}
          id="500004"
          title="Nike Mercurial Superfly 7 Pro"
          before={200}
          after={175}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent
          image={Vapor13}
          id="500005"
          title="Nike Mercurial Vapor 13"
          before={55}
          after={55}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent
          image={Vapor13mds}
          id="500006"
          title="Nike Vapor 13 MDS"
          before={70}
          after={60}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent
          image={Vision2}
          id="500007"
          title="Nike Max ALpha Trainer 2"
          before={100}
          after={100}
          category="Multi-Ground Football Boot"
        />
        <ShoeComponent
          image={Vapor13neymar}
          id="500008"
          title="Nike Vapor 13 Neymar Jr."
          before={75}
          after={60}
          category="Artificial-Turf Football Shoe"
        />
        <ShoeComponent
          image={Legend8}
          id="500009"
          title="Nike Legend 8 Academy"
          before={85}
          after={85}
          category="Artificial-Turf Football Shoe"
        />
      </div>
    </div>
  );
};

export default MenFootball;
