import { useState } from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { BackgroundBeams } from "../ui/background-beams";
import {Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { Icon } from '@iconify/react';
import Logo from '../../assets/logo.svg';

import Sidebar from "./Sidebar";

import classes from './AdminPage.module.css';
import ManageVehicles from "./ManageVehicles";
import ManageBooking from "./ManageBooking";
const AdminPage = () => {
    const [selected, setSelected] = useState('vehicles');
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