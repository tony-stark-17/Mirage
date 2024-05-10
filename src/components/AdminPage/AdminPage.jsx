import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

import ManageVehicles from "./ManageVehicles";
import ManageBooking from "./ManageBooking";
import { useNavigate } from "react-router-dom";
const AdminPage = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState('vehicles');
    useEffect(() => {
        if(!localStorage.getItem('adminDetails')){
            navigate('/adminlogin');
        }
    }, [])
    return (
        <div className="flex">
            <Sidebar selected={selected} setSelected={setSelected}/>
            <div className="w-[87%]">
                {
                    {
                        'vehicles': <ManageVehicles/>,
                        'bookings': <ManageBooking/>
                    }[selected]
                }
            </div>
        </div>
    );
}


export default AdminPage;