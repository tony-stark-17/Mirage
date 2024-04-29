import { motion, AnimatePresence } from 'framer-motion';

import Logo from '../../assets/logo.svg';
import classes from './LoadingScreen.module.css';

import {Spinner} from "@nextui-org/react";
import { useState, useEffect } from 'react';

const LoadingScreen = () =>{
    const [loading, setLoading] = useState(true);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setLoading(true);
    //         setTimeout(()=>{
    //             setLoading(false);
    //         },3000)
    //     },3000)
    // },[])
    return(
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="cont"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`${classes['loading-container']}`}>
                    <img className={`${classes['logo']}`} src={Logo}/>
                    <Spinner size='lg' classNames={{
                        circle1: 'border-4',
                        circle2: 'border-3'
                    }} color='white'/>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default LoadingScreen;