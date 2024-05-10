import { useRef, useState } from 'react';
import axios from 'axios';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem, Divider} from "@nextui-org/react";
import { useInView } from 'framer-motion';
import { Highlight } from '../ui/hero-highlight';
import classes from './SellCar.module.css'
const SellCar = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const {isOpen, onOpen, onClose} = useDisclosure();

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
    let segments = ['Hatchback', 'Sedan', 'SUV', 'Crossover', 'Coupe', 'Convertible', 'Wagon', 'Van', 'Truck', 'Minivan', 'Bus', 'Pickup', 'Off-road', 'Electric', 'Hybrid', 'Luxury', 'Sports', 'Super', 'Muscle', 'Classic', 'Exotic'];
    let transmissions = ['Automatic', 'Manual', 'CVT', 'DSG', 'AMT', 'Semi-Automatic'];
    let fuels = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];    

    const sellCar = () => {
        onOpen()
    }

    const populateSegments = () => {
        return segments.map((segment, index) => {
            return <SelectItem key={index} value={segment}>{segment}</SelectItem>
        })
    }

    const populateTransmissions = () => {
        return transmissions.map((transmission, index) => {
            return <SelectItem key={index} value={transmission}>{transmission}</SelectItem>
        }
        )
    }

    const populateFuels = () => {
        return fuels.map((fuel, index) => {
            return <SelectItem key={index} value={fuel}>{fuel}</SelectItem>
        })
    }

    const sellVehicle = async () => {
        try{
            const response = await axios.post('http://localhost:3000/addVehicle', {
                brand: brand,
                model: model,
                segment: segment,
                price: price,
                color: color,
                transmission: transmission,
                fuel: fuel,
                odometer: odometer,
                registration: registration,
                owner: owner
            })
            if(response.data.success){
                alert('Vehicle added successfully')
                onClose()
            }else{
                alert('Failed to add vehicle')
            }
        }catch(error){
            console.log(error)
        }
    }

    return (
        <>
            <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose} isDismissable={false} className='bg-[#ffffff25] py-2 text-white gap-5 backdrop-blur-md' hideCloseButton={true} size='xl'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="font-[Poppins] text-2xl">Sell Your Vehicle</ModalHeader>
                            <ModalBody>
                                <Input variant='bordered' label="Brand" radius='sm' classNames={{
                                    label: '!text-white',
                                    inputWrapper: '!border-slate-300',
                                }} onChange={(e) => setBrand(e.target.value)} />
                                <Input variant='bordered' label="Model" radius='sm' classNames={{
                                    label: '!text-white',
                                    inputWrapper: '!border-slate-300',
                                }} onChange={(e) => setModel(e.target.value)} />
                                <div className='flex gap-2'>
                                    <Input variant='bordered' label="Color" radius='sm' classNames={{
                                        label: '!text-white',
                                        inputWrapper: '!border-slate-300',
                                    }}  onChange={(e) => setColor(e.target.value)}/>
                                    <Input type='number' variant='bordered' label="Price" radius='sm' classNames={{
                                        label: '!text-white',
                                        inputWrapper: '!border-slate-300',
                                    }}  onChange={(e) => setPrice(e.target.value)}/>
                                </div>
                                <div className='flex gap-2'>
                                    <Select
                                        label="Select vehicle segment"
                                        className="max-w-xs"
                                        variant='bordered' radius='sm'
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
                                    <Input type='number' variant='bordered' label="Odometer" radius='sm' classNames={{
                                        label: '!text-white',
                                        inputWrapper: '!border-slate-300',
                                    }} 
                                    onChange={(e) => setOdometer(e.target.value)}
                                    />
                                    <Input type='number' variant='bordered' label="Registration" radius='sm' classNames={{
                                        label: '!text-white',
                                        inputWrapper: '!border-slate-300',
                                    }}
                                    onChange={(e) => setRegistration(e.target.value)}
                                    />
                                    <Input type='number' variant='bordered' label="Owner" radius='sm' classNames={{
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
                                <Button className='bg-green-700 text-white' onPress={sellVehicle}>
                                    Confirm
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <div className={`${classes['sell-container']} bg-dot-white/[0.5]`} ref={ref}>
                <span>SELL YOUR CAR {isInView && <Highlight>HASSLE-FREE</Highlight>}</span>
                <span>Ready to part ways with your vehicle? Simply fill in the details of your car below, including make, model, year, and mileage. Upload some photos to showcase its best features, and let potential buyers know about any special qualities or recent maintenance. Once you've listed your car, sit back and relax as interested buyers reach out to make offers. Selling your car has never been easier!</span>
                <Button variant="solid" className='rounded-md bg-[#d40000] font-[Sora]' onClick={sellCar}>
                    Sell Your Car
                </Button>
            </div>
        </>
    );
}

export default SellCar;
