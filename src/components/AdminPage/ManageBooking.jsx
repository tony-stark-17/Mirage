import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Divider, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Chip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import classes from './ManageBooking.module.css'
const ManageBooking = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [currentBooking, setCurrentBooking] = useState()
    const [bookingData, setBookingData] = useState([])

    useEffect(() => {
        fetchBookings()
    }, [])

    useEffect(()=>{
        if(!isOpen){
            setCurrentBooking(null)
        }
    }, [isOpen])

    const fetchBookings = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/getBookings`);
            setBookingData(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const deleteBooking = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/bookings/${id}`);
            if (response.data.success) {
                alert('Booking deleted successfully!');
                fetchBookings();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onApprove = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/bookings/${currentBooking}`, {
                status: 1
            });
            if (response.data.success) {
                alert('Booking approved successfully!');
                fetchBookings();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onReject = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/bookings/${currentBooking}`, {
                status: 2
            });
            if (response.data.success) {
                alert('Booking rejected successfully!');
                fetchBookings();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const populateBookings = () => {
        return bookingData.map((booking, index) => {
            return (
                <TableRow key={booking.booking_id}>
                    <TableCell>{booking.booking_id}</TableCell>
                    <TableCell>{booking.name}</TableCell>
                    <TableCell>{booking.model}</TableCell>
                    <TableCell><Chip size="sm" color={(booking.status === 0 && 'warning') || (booking.status === 1 && 'success') || (booking.status === 2 && 'danger')} variant="flat" startContent={(booking.status === 1 && <Icon icon="mdi:tick" />) || ( booking.status === 0 &&<Icon icon="mdi:clock" />) || ( booking.status === 2 &&<Icon icon="mdi:close" />)} classNames={{
                            content: 'w-[70px] text-center'
                        }}>{(booking.status === 0 && 'Pending') || (booking.status === 1 && 'Approved') || (booking.status === 2 && 'Rejected')}</Chip></TableCell>
                    <TableCell className="flex gap-1">
                        <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2" onClick={() => {setCurrentBooking(booking.booking_id); onOpen()}}>
                            <Icon icon="clarity:clipboard-solid" className="w-full h-full" />
                        </Button>
                        <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600" onClick={() => deleteBooking(booking.booking_id)}>
                            <Icon icon="material-symbols:delete" className="w-full h-full" />
                        </Button>
                    </TableCell>
                </TableRow>
            )
        })
    }


    return (
        <>
            <div className="flex flex-col w-full h-screen overflow-hidden">
                <div className="bg-black bg-dot-white/[0.2] h-[100%] px-10 py-10">
                    <h3 className="text-white font-[Poppins] text-3xl font-semibold text-end">Manage Bookings</h3>
                    <Divider className="bg-slate-200 opacity-50 my-8" />
                    <motion.div initial={{ x: 500 }} animate={{ x: 0 }}>
                        <Table aria-label="Example static collection table" className="text-white scrollbar-hide font-[Poppins]" isHeaderSticky={true} classNames={{
                            base: "max-h-[80vh]",
                            wrapper: 'scrollbar-hide',
                        }}>
                            <TableHeader>
                                <TableColumn>Booking ID</TableColumn>
                                <TableColumn>Customer Name</TableColumn>
                                <TableColumn>Model</TableColumn>
                                <TableColumn>Status</TableColumn>
                                <TableColumn>Actions</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {populateBookings()}
                            </TableBody>
                        </Table>
                    </motion.div>
                </div>
            </div>
            <Modal isOpen={isOpen} size="4xl" onOpenChange={onOpenChange} radius="sm" classNames={{
                base: 'bg-slate-950 text-white font-[Poppins]'
            }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Review Booking</ModalHeader>
                            <ModalBody className="flex">
                               <div className={`${classes['detail-container']}`}>
                                    <span>Booking ID:</span>
                                    <span>1</span>
                               </div>
                               <div className={`${classes['detail-container']}`}>
                                    <span>Booking Date:</span>
                                    <span>12/10/2003</span>
                               </div>
                               <div className={`${classes['detail-container']}`}>
                                    <span>Customer Name:</span>
                                    <span>Tony</span>
                               </div>
                               <div className={`${classes['detail-container']}`}>
                                    <span>Customer Email:</span>
                                    <span>tony@gmail.com</span>
                               </div>
                               <div className={`${classes['detail-container']}`}>
                                    <span>Vehicle Brand:</span>
                                    <span>Rolls Royce</span>
                               </div>
                               <div className={`${classes['detail-container']}`}>
                                    <span>Vehicle Model:</span>
                                    <span>Cullinan</span>
                               </div>
                               <div className={`${classes['detail-container']}`}>
                                    <span>Vehicle Price:</span>
                                    <span>$10000</span>
                               </div>
                               <div className={`${classes['detail-container']}`}>
                                    <span>Booking Status:</span>
                                    <span><Chip size="sm" color={'warning'} variant="flat" startContent={<Icon icon="mdi:clock" />}>{'Pending'}</Chip></span>
                               </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onReject}>
                                    Reject
                                </Button>
                                <Button color="success" variant="flat" onPress={onApprove}>
                                    Approve
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ManageBooking;