import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Button,
    User,
} from "@nextui-org/react";
import Logo from "../../assets/logo.svg";
import classes from "./NavigationBar.module.css";
import NavigationSidebar from "../NavigationSidebar";

const NavigationBar = ({ userDetails }) => {
    const navigate = useNavigate();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [drawer, setDrawer] = useState(false);
    const { name, userType } = userDetails;
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const logOut = () => {
        localStorage.removeItem("userDetails");
        window.location.reload(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
        <div className={`${classes["navigation-bar"]}`}>
            <Icon
                icon={drawer ? 'material-symbols-light:close' : "material-symbols-light:menu"}
                className="cursor-pointer text-white w-auto h-[40%]"
                onClick={() => setDrawer(!drawer)}
            />
            <AnimatePresence>
                {scrollPosition > 466 && (
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        src={Logo}
                        className="cursor-pointer w-28"
                    />
                )}
            </AnimatePresence>
            <Popover
                offset={35}
                showArrow={true}
                classNames={{
                    base: "before:bg-[#ffffff65]",
                    content: "bg-transparent max-w-[300px] shadow-none relative -top-1",
                }}
                placement="bottom-end"
            >
                <PopoverTrigger>
                    <Icon
                        icon="material-symbols:person"
                        className="border-2 rounded-full p-1 cursor-pointer text-white w-auto h-[40%]"
                    />
                </PopoverTrigger>
                <PopoverContent>
                    <div className="flex flex-row items-center py-5 px-5 gap-2 justify-between bg-[#ffffff65] rounded-md outline-none border-0 w-full backdrop-blur-lg">
                        {name && (
                            <>
                            <User
                                name={name}
                                description='Customer'
                                avatarProps={{
                                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                                }}
                                className="text-white font-[Poppins]"
                                classNames={{
                                    name: "text-white font-semibold",
                                    description: "text-white opacity-75 font-medium",
                                }}
                            />
                            <Button
                            isIconOnly
                            color="default"
                            className="bg-transparent text-lg"
                            onClick={logOut}
                            >
                                <Icon icon="mdi:logout" style={{ color: "white" }} />
                            </Button>
                            </>
                        ) || (
                            <>
                                <span className="text-white font-[Poppins]">You are not logged in</span>
                                <Button
                                color="default"
                                size="sm"
                                className="bg-red-700 text-white"
                                onClick={() => navigate('/login')}
                                >
                                    Sign In
                                </Button>
                            </>
                        
                        )}
                        
                    </div>
                </PopoverContent>
            </Popover>
        </div>
        <NavigationSidebar open={drawer} />
        </>
    );
};

export default NavigationBar;
