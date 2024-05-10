import axios from "axios";
import {Button, ButtonGroup} from "@nextui-org/react";
import { useState } from 'react';
import Img from '../../assets/spectre.jpg';
import classes from './ProductCard.module.css';
const ProductCard = ({ details }) =>{
    const { v_id, brand, model, price, color, transmission, fuel, odometer, registration, owner } = details;
    const [isFlipped, setIsFlipped] = useState(false);

    const numberWithCommas = (x) => {
        return '₹' + new Intl.NumberFormat('en-IN').format(x);
    }
    const flipCard = () =>{
        setIsFlipped(!isFlipped);
    }

    const bookVehicle = async () => {
        const { uid } = JSON.parse(localStorage.getItem('userDetails'));
        try{
            const response= await axios.post('http://localhost:3000/bookVehicle', {
                u_id: uid,
                v_id: v_id
            });
            if(response.data.success){
                alert('Vehicle Booked Successfully!');
            }
        }catch(error){
            console.log(error);
            if(error.response.data == 'Vehicle already booked!'){
                alert('Vehicle already booked!');
            }
        }
    }

    return(
        <div className={` ${classes['card-container']}`}>
            <div className={`${classes['card-inner']} ${isFlipped && classes['card-flipped']}`} onClick={flipCard}>
                <div className={`${classes['card-front']}`}>
                    <img src={Img} className={`${classes['vehicle-img']}`}></img>
                    <div className={`${classes['vehicle-name']}`}>
                        <div className={`flex flex-col w-[60%] ${classes['brand-model']}`}>
                            <span>{brand}</span>
                            <span>{model}</span>
                        </div>
                        <span className={`${classes['vehicle-price']}`}>{numberWithCommas(price)}</span>
                    </div>
                </div>
                <div className={`${classes['card-back']}`}>
                    <div className={`${classes['vehicle-name']}`}>
                        <div className={`flex flex-col w-[60%] ${classes['brand-model']}`}>
                            <span>{brand}</span>
                            <span>{model}</span>
                        </div>
                        <span className={`${classes['vehicle-price']}`}>{numberWithCommas(price)}</span>
                    </div>
                    <div className={`${classes['vehicle-details']}`}>
                        <div>
                            <span>Color</span>
                            <span>{color}</span>
                        </div>
                        <div>
                            <span>Transmission</span>
                            <span>{transmission}</span>
                        </div>
                        <div>
                            <span>Fuel Type</span>
                            <span>{fuel}</span>
                        </div>
                        <div>
                            <span>Odometer</span>
                            <span>{odometer}</span>
                        </div>
                        <div>
                            <span>Registration</span>
                            <span>{registration}</span>
                        </div>
                        <div>
                            <span>Owner</span>
                            <span>{owner}</span>
                        </div>
                    </div>
                    <div className={`${classes['card-btn-group']}`}>
                        <Button className="w-[49%] rounded-md bg-[#B40000]" onClick={bookVehicle}>
                            Book Vehicle
                        </Button>
                        <Button variant="bordered" className="w-[49%] rounded-md border-[#B40000] text-[#B40000]">
                            Request Test Drive
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;