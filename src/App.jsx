import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import LoadingScreen from "./components/LoadingScreen";
import NavigationBar from "./components/NavigationBar";
import Catalog from "./components/Catalog";
import SellCar from './components/SellCar';
import Footer from "./components/Footer";
import BGVideo from './assets/video.mp4'
import Logo from './assets/logo.svg';

import classes from './App.module.css';

function App() {
  const [userDetails, setUserDetails] = useState({});
  const [state, setState] = useState("loading");
  useEffect(()=>{
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if(userDetails){
      setUserDetails(userDetails);
    }
    setTimeout(() => {
      setState("loaded");
    }, 1000)
  }, [])

  return (
    <>
      <LoadingScreen state={state}/>
      <div className={`${classes["landing-container"]}`}>
        <NavigationBar userDetails={userDetails}/>
        <div className={`${classes["landing"]}`}>
          <img src={Logo} />
          <p>The premium marketplace to buy and sell vehicles</p>
          <Icon
            icon="ph:caret-double-down"
            className={`w-auto h-[5%] absolute bottom-10 ${classes["double-down"]}`}
          />
        </div>
        <Catalog />
        <SellCar />
        <Footer />
        <div className="w-screen h-screen absolute bg-black opacity-50 z-0"></div>
        <video className={`${classes["video-control"]}`} autoPlay loop muted>
          <source src={BGVideo} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default App;
