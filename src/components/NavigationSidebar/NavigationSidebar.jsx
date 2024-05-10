import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Chip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import classes from "./NavigationSidebar.module.css";
import { useNavigate } from "react-router-dom";
const NavigationSidebar = ({ open }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [bookingData, setBookingData] = useState([])
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userDetails'));
        if(userData){
            setUserDetails(userData)
        }
        fetchBookings()
    }, [open])

    const fetchBookings = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/bookings/${userDetails.uid}`);
            setBookingData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const populateBookings = () => {
        return bookingData.map((booking, index) => {
            return (
                <TableRow key={booking.booking_id}>
                    <TableCell>{booking.booking_id}</TableCell>
                    <TableCell>{booking.brand}</TableCell>
                    <TableCell>{booking.model}</TableCell>
                    <TableCell>{booking.booking_date}</TableCell>
                    <TableCell className="flex gap-1">
                        <Chip size="sm" color={(booking.status === 0 && 'warning') || (booking.status === 1 && 'success') || (booking.status === 2 && 'danger')} variant="flat" startContent={(booking.status === 1 && <Icon icon="mdi:tick" />) || ( booking.status === 0 &&<Icon icon="mdi:clock" />) || ( booking.status === 2 &&<Icon icon="mdi:close" />)} classNames={{
                            content: 'w-[70px] text-center'
                        }}>{(booking.status === 0 && 'Pending') || (booking.status === 1 && 'Approved') || (booking.status === 2 && 'Rejected')}</Chip>
                    </TableCell>
                </TableRow>
            )
        })
    }

    const showBooking = () => {
        if(userDetails.uid){
            onOpen();
        }else{
            alert("You are not logged in")
        }
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div key="sidebar" initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }} className={`w-72 fixed top-[90px] left-0 z-[9999] bg-[#ffffff69] flex flex-col items-center py-10 px-5 gap-7 backdrop-blur-md ${classes['sidebar-container']}`}>
                    <div className="w-full h-full font-[Poppins] flex flex-col gap-2 text-sm">
                        <div
                            className="w-full px-4 py-3 flex rounded-lg items-center cursor-pointer transition-colors bg-red-700 hover:bg-red-800"
                            onClick={showBooking}
                        >
                            <Icon icon="mdi:car" className="text-white w-5 h-5" />
                            <span className="text-white ml-2">My Bookings</span>
                        </div>
                        <div
                            className="w-full px-4 py-3 flex rounded-lg items-center cursor-pointer transition-colors bg-red-700 hover:bg-red-800"
                            onClick={() => navigate('/adminlogin')}
                        >
                            <Icon icon="clarity:clipboard-solid" className="text-white w-5 h-5" />
                            <span className="text-white ml-2">Admin Panel</span>
                        </div>
                    </div>
                </motion.div>
            )}
            <Modal isOpen={isOpen} size="4xl" hideCloseButton={true} onOpenChange={onOpenChange} radius="sm" classNames={{
                base: 'bg-slate-950 text-white'
            }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">My Bookings</ModalHeader>
                            <ModalBody>
                                <Table aria-label="Example static collection table" className="text-white scrollbar-hide font-[Poppins]" isHeaderSticky={true} classNames={{
                                    wrapper: 'scrollbar-hide bg-[#ffffff1c]',
                                    th: 'bg-[#ffffff1c] text-white',
                                }}>
                                    <TableHeader>
                                        <TableColumn>Booking ID</TableColumn>
                                        <TableColumn>Brand</TableColumn>
                                        <TableColumn>Model</TableColumn>
                                        <TableColumn>Booking Date</TableColumn>
                                        <TableColumn>Status</TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                        {populateBookings()}
                                    </TableBody>
                                </Table>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </AnimatePresence>
    );
};

export default NavigationSidebar;
