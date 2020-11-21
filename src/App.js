import React, { useEffect } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Payment/Payment";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Women from "./components/Allshoes/Women/Women";
import Men from "./components/Allshoes/Men/Men";
import WomenBasketball from "./components/Allshoes/Women/WomenBasketball/WomenBasketball";
import MenBasketball from "./components/Allshoes/Men/MenBasketball/MenBasketball";
import WomenJordan from "./components/Allshoes/Women/WomenJordan/WomenJordan";
import WomenRunning from "./components/Allshoes/Women/WomenRunning/WomenRunning";
import WomenFootball from "./components/Allshoes/Women/WomenFootball/WomenFootball";
import WomenGym from "./components/Allshoes/Women/WomenGym/WomenGym";
import WomenTennis from "./components/Allshoes/Women/WomenTennis/WomenTennis";
import MenJordan from "./components/Allshoes/Men/MenJordan/MenJordan";
import MenRunning from "./components/Allshoes/Men/MenRunning/MenRunning";
import MenFootball from "./components/Allshoes/Men/MenFootball/MenFootball";
import MenGym from "./components/Allshoes/Men/MenGym/MenGym";
import MenTennis from "./components/Allshoes/Men/MenTennis/MenTennis";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       console.log(authUser);
  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser
  //       });
  //     } else {
  //       dispatch({
  //         type: "SET_USER",
  //         user: null
  //       });
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [user]);

  console.log("User is >>>", user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/men/gym">
            <Header />
            <MenGym />
          </Route>
          <Route path="/men/tennis">
            <Header />
            <MenTennis />
          </Route>
          <Route path="/men/jordan">
            <Header />
            <MenJordan />
          </Route>
          <Route path="/men/running">
            <Header />
            <MenRunning />
          </Route>
          <Route path="/men/football">
            <Header />
            <MenFootball />
          </Route>
          <Route path="/men/basketball">
            <Header />
            <MenBasketball />
          </Route>
          <Route path="/men">
            <Header />
            <Men />
          </Route>
          <Route path="/women/gym">
            <Header />
            <WomenGym />
          </Route>
          <Route path="/women/tennis">
            <Header />
            <WomenTennis />
          </Route>
          <Route path="/women/jordan">
            <Header />
            <WomenJordan />
          </Route>
          <Route path="/women/running">
            <Header />
            <WomenRunning />
          </Route>
          <Route path="/women/football">
            <Header />
            <WomenFootball />
          </Route>
          <Route path="/women/basketball">
            <Header />
            <WomenBasketball />
          </Route>
          <Route path="/women">
            <Header />
            <Women />
          </Route>
          <Route path="/login">
            {/* <Header /> */}
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
