import { motion,AnimatePresence } from 'framer-motion';

import Logo from '../../assets/logo.svg';
import classes from './LoadingScreen.module.css';

import { Spinner } from "@nextui-org/react";
import {  } from 'framer-motion';

const LoadingScreen = ({ state }) => {
    return (
        <AnimatePresence>
            {state === 'loading' &&
            <motion.div
                key="cont"
                exit={{ opacity: 0 }}
                className={`${classes['loading-container']}`}>
                <img className={`${classes['logo']}`} src={Logo} />
                <Spinner size='lg' classNames={{
                    circle1: 'border-4',
                    circle2: 'border-3'
                }} color='white' />
            </motion.div>}
        </AnimatePresence>
    )
}

export default LoadingScreen;