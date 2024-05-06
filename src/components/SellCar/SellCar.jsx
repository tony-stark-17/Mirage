import { useRef } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem, Divider} from "@nextui-org/react";
import { useInView } from 'framer-motion';
import { Highlight } from '../ui/hero-highlight';
import classes from './SellCar.module.css'
const SellCar = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const {isOpen, onOpen, onClose} = useDisclosure();
    const sellCar = () => {
        onOpen()
    }

    return (
        <>
            <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose} isDismissable={false} className='bg-[#ffffff25] py-2 text-white gap-5 backdrop-blur-md' hideCloseButton={true} size='xl'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="font-[Poppins] text-2xl">Sell Your Vehicle</ModalHeader>
                            <ModalBody>
                                <Select 
                                        label="Select Brand" 
                                        className="w-full" 
                                        variant='bordered' radius='sm'
                                        classNames={{
                                            value: "text-white",
                                            trigger: '!border-slate-300',
                                            label: '!text-white'
                                        }}
                                    >
                                        <SelectItem key={'petrol'} value={'petrol'}>
                                            Petrol
                                        </SelectItem>
                                </Select>
                                <Input variant='bordered' label="Model" radius='sm' classNames={{
                                    label: '!text-white',
                                    inputWrapper: '!border-slate-300',
                                }}/>
                                <div className='flex gap-2'>
                                    <Input variant='bordered' label="Color" radius='sm' classNames={{
                                    label: '!text-white',
                                    inputWrapper: '!border-slate-300',
                                }}/>
                                    <Input type='number' variant='bordered' label="Price" radius='sm' classNames={{
                                    label: '!text-white',
                                    inputWrapper: '!border-slate-300',
                                }}/>
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
                                    >
                                        <SelectItem key={'petrol'} value={'petrol'}>
                                            Petrol
                                        </SelectItem>
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
                                    >
                                        <SelectItem key={'petrol'} value={'petrol'}>
                                            Petrol
                                        </SelectItem>
                                    </Select>
                                    
                                </div>
                                <div className='flex gap-2'>
                                    <Input type='number' variant='bordered' label="Odometer" radius='sm' classNames={{
                                    label: '!text-white',
                                    inputWrapper: '!border-slate-300',
                                }}/>
                                    <Input type='number' variant='bordered' label="Registration" radius='sm' classNames={{
                                    label: '!text-white',
                                    inputWrapper: '!border-slate-300',
                                }}/>
                                    <Select 
                                        label="Owner" 
                                        className="max-w-xs" 
                                        variant='bordered'
                                        classNames={{
                                            value: "text-white",
                                            trigger: '!border-slate-300',
                                            label: '!text-white'
                                        }}
                                    >
                                        <SelectItem key={'petrol'} value={'petrol'}>
                                            Petrol
                                        </SelectItem>
                                    </Select>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button onPress={onClose} className='bg-red-700 text-white'>
                                    Cancel
                                </Button>
                                <Button className='bg-green-700 text-white' onPress={onClose}>
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
