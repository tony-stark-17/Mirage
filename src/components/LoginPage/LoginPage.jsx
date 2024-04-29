import { Tabs, Tab, Input, Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react'
import Logo from '../../assets/logo.svg';
import classes from './LoginPage.module.css';
const LoginPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }
    return (
        <div className={`${classes['login-container']}`}>
            <div className='w-[25%] py-10 px-8 flex flex-col gap-44'>
                <img src={Logo} className='w-[25%]'/>
                <span className='text-white font-[Sora] font-semibold text-5xl'>Start your <span className='font-light'>journey</span> with us</span>
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
                                    <span className='text-2xl font-semibold'>Sign in to your Account</span>
                                    <span className="font-light">Please enter your details here</span>
                                </CardHeader>
                                <CardBody className="flex flex-col gap-4 items-start font-[Poppins]">
                                    <Input
                                        type="email"
                                        label="Email"
                                        labelPlacement='outside'
                                        placeholder="Enter your email"
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
                                        classNames={{
                                            inputWrapper: '!bg-white rounded-md',
                                            input: '!text-black'
                                        }}
                                    />
                                    <Button className="rounded-md bg-red-700 font-[Sora]">
                                        Sign In
                                    </Button>
                                </CardBody>
                            </Card>  
                        </Tab>
                        <Tab key="signup" title="Sign Up" className="w-[510px]">
                            <Card className="px-10 py-12 w-full min-h-[400px] bg-[#ffffff27]">
                                <CardHeader className="flex flex-col items-start font-[Sora]">
                                    <span className='text-2xl font-semibold'>Register for an account</span>
                                    <span className="font-light">Please enter your details here</span>
                                </CardHeader>
                                <CardBody className="flex flex-col gap-4 items-start font-[Poppins]">
                                    <Input
                                        type="text"
                                        label="Name"
                                        labelPlacement='outside'
                                        placeholder="Enter your full name"
                                        classNames={{
                                            inputWrapper: '!bg-white rounded-md',
                                            input: '!text-black'
                                        }}
                                    />
                                    <Input
                                        type="email"
                                        label="Email"
                                        labelPlacement='outside'
                                        placeholder="Enter your email"
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
                                        classNames={{
                                            inputWrapper: '!bg-white rounded-md',
                                            input: '!text-black'
                                        }}
                                    />
                                    <Button className="rounded-md bg-red-700 font-[Sora]">
                                        Register
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
    );
}

export default LoginPage;