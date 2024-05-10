import Logo from "../../assets/logo.svg";
import {
  Divider,
  User,
  Button
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ selected, setSelected }) => {
    const navigate = useNavigate();
    const [adminDetails, setAdminDetails] = useState({});
    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem('adminDetails'));
        if(userDetails){
            setAdminDetails(userDetails);
        }
    },[]);

    const logout = () => {
        localStorage.removeItem('adminDetails');
        navigate('/adminlogin');
    }
    return (
        <div className="w-[13%] h-screen bg-[#000000ea] flex flex-col items-center py-10 z-10 px-5 gap-7">
            <div className="h-[5rem] w-full flex flex-col justify-between">
                <div className="w-full flex justify-center">
                    <img src={Logo} className="w-24 h-10" />
                </div>
                <Divider className="bg-slate-200 opacity-50" />
            </div>
            <div className="w-full flex items-center justify-between">
                <User
                name={adminDetails.name}
                description="Admin"
                avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
                className="text-white font-[Poppins]"
                isFocusable={true}
                />
                <Button isIconOnly aria-label="Like" size="sm" className="bg-red-600" onClick={logout}>
                    <Icon icon="mdi:logout" />
                </Button>
            </div>
            <div className="w-full h-full font-[Poppins] flex flex-col gap-2 text-sm">
                <div className={`w-full px-4 py-3 flex rounded-lg items-center cursor-pointer transition-colors ${selected == 'vehicles' && 'bg-red-700' || 'bg-[#ffffff2d]'}`} onClick={()=> setSelected('vehicles')}>
                    <Icon icon="mdi:car" className="text-white w-5 h-5"/>
                    <span className="text-white ml-2">Vehicles</span>
                </div>
                <div className={`w-full px-4 py-3 flex rounded-lg items-center cursor-pointer transition-colors ${selected == 'bookings' && 'bg-red-700' || 'bg-[#ffffff2d]'}`}  onClick={()=> setSelected('bookings')}>
                <Icon icon="clarity:clipboard-solid" className="text-white w-5 h-5" />
                <span className="text-white ml-2">Bookings</span>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
