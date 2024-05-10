import { Select, SelectItem, Input, Button, Divider, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
const ManageVehicles = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [editing, setEditing] = useState(false);
    const [currentVehicle, setCurrentVehicle] = useState();
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState(0)
    const [segment, setSegment] = useState('')
    const [transmission, setTransmission] = useState('')
    const [fuel, setFuel] = useState('')
    const [odometer, setOdometer] = useState('')
    const [registration, setRegistration] = useState(0)
    const [owner, setOwner] = useState(0);
    const [vehicles, setVehicles] = useState([]);
    let segments = ['Hatchback', 'Sedan', 'SUV', 'Crossover', 'Coupe', 'Convertible', 'Wagon', 'Van', 'Truck', 'Minivan', 'Bus', 'Pickup', 'Off-road', 'Electric', 'Hybrid', 'Luxury', 'Sports', 'Super', 'Muscle', 'Classic', 'Exotic'];
    let transmissions = ['Automatic', 'Manual', 'CVT', 'DSG', 'AMT', 'Semi-Automatic'];
    let fuels = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];

    const addVehicle = async () => {
        try {
            const response = await axios.post('http://localhost:3000/addVehicle', {
                brand,
                model,
                color,
                price,
                segment,
                transmission,
                fuel,
                odometer,
                registration,
                owner
            })
            if(response.data.success){
                alert('Vehicle added successfully')
                fetchVehicles();
                onClose();
            }else{
                alert('Vehicle addition failed')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateVehicle = async () => {
        try {
            const response = await axios.put('http://localhost:3000/updateVehicle', {
                id: currentVehicle,
                brand,
                model,
                color,
                price,
                segment,
                transmission,
                fuel,
                odometer,
                registration,
                owner
            })
            if(response.data.success){
                alert('Vehicle updated successfully')
                fetchVehicles();
                onClose();
            }else{
                alert('Vehicle updation failed')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const fetchVehicles = async () => {
        try {
            const response = await axios.get('http://localhost:3000/vehicles');
            setVehicles(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const populateSegments = () => {
        return segments.map((segment, index) => {
            return <SelectItem key={segment} value={segment}>{segment}</SelectItem>;
        });
    }

    const populateTransmissions = () => {
        return transmissions.map((transmission, index) => {
            return <SelectItem key={transmission} value={transmission}>{transmission}</SelectItem>;
        });
    }

    const populateFuels = () => {
        return fuels.map((fuel, index) => {
            return <SelectItem key={fuel} value={fuel}>{fuel}</SelectItem>;
        });
    }

    const deleteVehicle = async (vid) => {
        try {
            const response = await axios.delete('http://localhost:3000/deleteVehicle', {
                data: {
                    id: vid
                }
            })
            if(response.data.success){
                alert('Vehicle deleted successfully')
                fetchVehicles();
            }else{
                alert('Vehicle deletion failed')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const editVehicle = (vehicle) => {
        setEditing(true);
        setCurrentVehicle(vehicle.v_id);
        setBrand(vehicle.brand);
        setModel(vehicle.model);
        setColor(vehicle.color);
        setPrice(vehicle.price);
        setSegment(vehicle.segment);
        setFuel(vehicle.fuel);
        setTransmission(vehicle.transmission);
        setOdometer(vehicle.odometer);
        setRegistration(vehicle.registration);
        setOwner(vehicle.owner);
        onOpen();
    }

    useEffect(()=>{
        if(!isOpen){
            setEditing(false);
            setCurrentVehicle(null);
            setBrand('');
            setModel('');
            setColor('');
            setPrice(0);
            setSegment('');
            setFuel('');
            setTransmission('');
            setOdometer('');
            setRegistration(0);
            setOwner(0);
        }
    }, [isOpen])

    useEffect(() => {
        fetchVehicles();
    }, [])

    const populateVehicles = () => {
        return vehicles.map((vehicle, index) => {
            return (
                <TableRow key={vehicle.v_id}>
                    <TableCell>{vehicle.brand}</TableCell>
                    <TableCell>{vehicle.model}</TableCell>
                    <TableCell>{vehicle.color}</TableCell>
                    <TableCell>{vehicle.price}</TableCell>
                    <TableCell className="flex gap-1">
                        <Button isIconOnly color="primary" aria-label="Edit" size="sm" className="p-2" onClick={() => editVehicle(vehicle)}>
                            <Icon icon="material-symbols:edit" className="w-full h-full" />
                        </Button>
                        <Button isIconOnly aria-label="Delete" size="sm" className="p-2 bg-red-600" onClick={() => deleteVehicle(vehicle.v_id)}>
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
                    <h3 className="text-white font-[Poppins] text-3xl font-semibold text-end">Manage Vehicles</h3>
                    <Divider className="bg-slate-200 opacity-50 my-8" />
                    <motion.div initial={{ x: 500 }} animate={{ x: 0 }}>
                        <Table aria-label="Example static collection table" className="text-white scrollbar-hide font-[Poppins]" isHeaderSticky={true} classNames={{
                            base: "max-h-[75vh]",
                            wrapper: 'scrollbar-hide',
                        }}>
                            <TableHeader>
                                <TableColumn>Brand</TableColumn>
                                <TableColumn>Model</TableColumn>
                                <TableColumn>Color</TableColumn>
                                <TableColumn>Price</TableColumn>
                                <TableColumn>Actions</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {populateVehicles()}
                            </TableBody>
                        </Table>
                        <Button className="bg-red-700 float-right mt-2" radius="sm" onClick={onOpen}>Add Vehicle</Button>
                    </motion.div>
                </div>
            </div>
            <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose} isDismissable={false} className='bg-[#ffffff25] py-2 text-white gap-5 backdrop-blur-md' hideCloseButton={true} size='xl'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="font-[Poppins] text-2xl">{editing ? 'Edit Vehicle' : 'Add Vehicle'}</ModalHeader>
                            <ModalBody>
                                <Input variant='bordered' label="Brand" radius='sm' defaultValue={editing ? brand : ''} classNames={{
                                    label: '!text-white',
                                    inputWrapper: '!border-slate-300',
                                }} onChange={(e) => setBrand(e.target.value)} />
                                <Input variant='bordered' label="Model" radius='sm' defaultValue={editing ? model : ''} classNames={{
                                    label: '!text-white',
                                    inputWrapper: '!border-slate-300',
                                }} onChange={(e) => setModel(e.target.value)} />
                                <div className='flex gap-2'>
                                    <Input variant='bordered' label="Color" radius='sm' defaultValue={editing ? color : ''} classNames={{
                                        label: '!text-white',
                                        inputWrapper: '!border-slate-300',
                                    }}  onChange={(e) => setColor(e.target.value)}/>
                                    <Input type='number' variant='bordered' label="Price" radius='sm' defaultValue={editing ? price : ''} classNames={{
                                        label: '!text-white',
                                        inputWrapper: '!border-slate-300',
                                    }}  onChange={(e) => setPrice(e.target.value)}/>
                                </div>
                                <div className='flex gap-2'>
                                    <Select
                                        label="Select vehicle segment"
                                        className="max-w-xs"
                                        variant='bordered' radius='sm'
                                        defaultSelectedKeys={editing && [segment]}
                                        classNames={{
                                            value: "text-white",
                                            trigger: '!border-slate-300',
                                            label: '!text-white'
                                        }}
                                        onChange={(e) => setSegment(e.target.value)}
                                    >
                                        {populateSegments()}
                                    </Select>
                                    <Select
                                        label="Select transmission"
                                        className="max-w-xs"
                                        defaultSelectedKeys={editing && [transmission]}
                                        variant='bordered' radius='sm'
                                        classNames={{
                                            value: "text-white",
                                            trigger: '!border-slate-300',
                                            label: '!text-white'
                                        }}
                                        onChange={(e) => setTransmission(e.target.value)}
                                    >
                                        {populateTransmissions()}
                                    </Select>
                                    <Select
                                        label="Select Fuel Type"
                                        className="max-w-xs"
                                        defaultSelectedKeys={editing && [fuel]}
                                        variant='bordered' radius='sm'
                                        classNames={{
                                            value: "text-white",
                                            trigger: '!border-slate-300',
                                            label: '!text-white'
                                        }}
                                        onChange={(e) => setFuel(e.target.value)}
                                    >
                                        {populateFuels()}
                                    </Select>

                                </div>
                                <div className='flex gap-2'>
                                    <Input type='number' variant='bordered' label="Odometer" radius='sm' defaultValue={editing && odometer} classNames={{
                                        label: '!text-white',
                                        inputWrapper: '!border-slate-300',
                                    }} 
                                    onChange={(e) => setOdometer(e.target.value)}
                                    />
                                    <Input type='number' variant='bordered' label="Registration" radius='sm' defaultValue={editing && registration} classNames={{
                                        label: '!text-white',
                                        inputWrapper: '!border-slate-300',
                                    }}
                                    onChange={(e) => setRegistration(e.target.value)}
                                    />
                                    <Input type='number' variant='bordered' label="Owner" radius='sm' defaultValue={editing && owner} classNames={{
                                        label: '!text-white',
                                        inputWrapper: '!border-slate-300',
                                    }}
                                    onChange={(e) => setOwner(e.target.value)}
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button onPress={onClose} className='bg-red-700 text-white'>
                                    Cancel
                                </Button>
                                <Button className='bg-green-700 text-white' onPress={editing ? updateVehicle : addVehicle}>
                                    Confirm
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ManageVehicles;