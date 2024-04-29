import { Icon } from "@iconify/react";
import NavigationBar from "../NavigationBar";
import Catalog from "../Catalog";
import SellCar from '../SellCar';
import Footer from "../Footer";
import BGVideo from '../../assets/video.mp4'
import classes from './LandingPage.module.css';
import Logo from '../../assets/logo.svg';

const LandingPage = () =>{
    return(
        <div className={`${classes['landing-container']}`}>
            <NavigationBar/>
            <div className={`${classes['landing']}`}>
                <img src={Logo}/>
                <p>The premium marketplace to buy and sell vehicles</p>
                <Icon icon="ph:caret-double-down" className={`w-auto h-[5%] absolute bottom-10 ${classes['double-down']}`}/>
            </div>
            <Catalog/>
            <SellCar/>
            <Footer/>
            <div className="w-screen h-screen absolute bg-black opacity-50 z-0"></div>
            <video className={`${classes['video-control']}`} autoPlay loop muted>
                <source src={BGVideo} type='video/mp4' />
            </video>
        </div>
    )
}

export default LandingPage;