import { useState, useEffect } from "react";
import axios from "axios";
import { Tabs, Tab, Input, Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react'

import LoadingScreen from '../LoadingScreen';

import Logo from '../../assets/logo.svg';
import classes from './AdminLogin.module.css';
const AdminLogin = () => {
    const navigate = useNavigate();
    const [state, setState] = useState('loading');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setTimeout(() => {
            const adminDetails = localStorage.getItem('adminDetails');
            setState('loaded');
            if(adminDetails){
                navigate('/admin');
            }
        }, 1000)
    }, [])

    const signIn = async () => {
        try{
            const response = await axios.post('http://localhost:3000/adminlogin', {email, password});
            if(response.data.success){
                localStorage.setItem("adminDetails", JSON.stringify(response.data.data));
                navigate('/admin');
            }else{
                alert("Invalid credentials");
            }

        }catch(error){
            alert('Error during login');
            console.log('Error during login:', error);
        }
    }

    const goBack = () => {
        navigate('/');
    }
    return (
        <>
            <LoadingScreen state={state} />
            <div className={`${classes['login-container']}`}>
                <div className='w-[25%] py-10 px-8 flex flex-col gap-44'>
                    <img src={Logo} className='w-[25%]'/>
                    <span className='text-white font-[Sora] font-semibold text-5xl'>Manage your <span className='font-light'>dealership</span> over here</span>
                </div>
                <div className='w-[75%] flex flex-col py-10 px-8 backdrop-blur-md items-center justify-center bg-[#00000069]'>
                    <Tabs aria-label="Options" className="w-[500px]" classNames={{
                            tabList: 'bg-white font-[Sora] rounded-md',
                            tabContent: 'text-black',
                            cursor: 'rounded-md !bg-red-700'
                        }}
                        >
                            <Tab key="login" title="Log In" className="w-[510px]">
                                <Card className="px-10 py-12 w-full h-[400px] bg-[#ffffff27]">
                                    <CardHeader className="flex flex-col items-start font-[Sora]">
                                        <span className='text-2xl font-semibold'>Sign in to the admin panel</span>
                                        <span className="font-light">Please enter your details here</span>
                                    </CardHeader>
                                    <CardBody className="flex flex-col gap-4 items-start font-[Poppins]">
                                        <Input
                                            type="email"
                                            label="Email"
                                            labelPlacement='outside'
                                            placeholder="Enter your email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            classNames={{
                                                inputWrapper: '!bg-white rounded-md',
                                                input: '!text-black'
                                            }}
                                        />
                                        <Input
                                            type="password"
                                            label="Password"
                                            labelPlacement='outside'
                                            placeholder="Enter your password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            classNames={{
                                                inputWrapper: '!bg-white rounded-md',
                                                input: '!text-black'
                                            }}
                                        />
                                        <Button className="rounded-md bg-red-700 font-[Sora]" onClick={signIn}>
                                            Sign In
                                        </Button>
                                    </CardBody>
                                </Card>  
                            </Tab>
                    </Tabs>
                    <div className="w-full flex justify-end absolute top-5 px-5">
                        <Button isIconOnly={true} onClick={goBack}><Icon icon="iconamoon:exit" className="text-white h-10 w-10 px-2 cursor-pointer"/></Button>
                    </div>                       
                </div>
            </div>
        </>
    );
}

export default AdminLogin;