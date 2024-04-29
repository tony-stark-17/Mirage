import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

import {Popover, PopoverTrigger, PopoverContent, Avatar, Button} from "@nextui-org/react";
import Logo from '../../assets/logo.svg';
import classes from './NavigationBar.module.css';

const NavigationBar = () =>{
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <div className={`${classes['navigation-bar']}`}>
                <Icon icon="material-symbols-light:menu" className='cursor-pointer text-white w-auto h-[40%]'/>
                <AnimatePresence>
                {
                    (scrollPosition > 466) && (<motion.img initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} src={Logo} className='cursor-pointer w-28'/>)
                }
                </AnimatePresence>
                <Popover 
                    offset={35}
                    showArrow={true}
                    classNames={{
                        base: 'before:bg-[#ffffff65]',
                        content: 'bg-transparent w-[300px] shadow-none relative -top-1',
                    }}
                    placement='bottom-end'
                >
                    <PopoverTrigger>
                        <Icon icon="material-symbols:person" className='border-2 rounded-full p-1 cursor-pointer text-white w-auto h-[40%]'/>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className='flex flex-row items-center py-5 px-5 justify-between bg-[#ffffff65] rounded-md outline-none border-0 w-full backdrop-blur-lg'>
                            <div className='flex flex-row items-center gap-2 text-white'>
                                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                <span className='flex flex-col gap-2'>
                                    <span className='font-bold text-lg leading-3'>Tony Stark</span>
                                    <span className='text-sm leading-3'>Customer</span>
                                </span>
                            </div>
                            <Button isIconOnly color="default" className='bg-transparent text-lg'>
                                <Icon icon="mdi:logout"  style={{color: 'white'}}/>
                            </Button>
                        </div>
                    </PopoverContent>
                </Popover>
        </div>
    )
}

export default NavigationBar;