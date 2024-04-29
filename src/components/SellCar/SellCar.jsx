import { useRef } from 'react';
import { Button } from '@nextui-org/react';
import { motion, useInView } from 'framer-motion';
import { Highlight } from '../ui/hero-highlight';
import classes from './SellCar.module.css'
const SellCar = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    return (
        <div className={`${classes['sell-container']} bg-dot-white/[0.5]`} ref={ref}>
            <span>SELL YOUR CAR {isInView && <Highlight>HASSLE-FREE</Highlight>}</span>
            <span>Ready to part ways with your vehicle? Simply fill in the details of your car below, including make, model, year, and mileage. Upload some photos to showcase its best features, and let potential buyers know about any special qualities or recent maintenance. Once you've listed your car, sit back and relax as interested buyers reach out to make offers. Selling your car has never been easier!</span>
            <Button variant="solid" className='rounded-md bg-[#d40000] font-[Sora]'>
                Sell Your Car
            </Button>
        </div>
    );
}

export default SellCar;
