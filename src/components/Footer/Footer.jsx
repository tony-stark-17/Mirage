import { Icon } from '@iconify/react';
import Logo from '../../assets/logo.svg';
const Footer = () => {
    return (
        <footer className='bg-black h-52 flex items-center px-10'>
            <div className='flex w-[100%] justify-center gap-36'>
                <img src={Logo} alt="logo" className='w-[10%]'/>
                {/* <div className='flex flex-col text-white gap-2'>
                    <span className='text-xl underline underline-offset-4 opacity-50'>Links</span>
                    <a className='text-sm' href='#'>Home</a>
                    <a className='text-sm' href='#'>Login</a>
                    <a className='text-sm' href='#'>Sell Your Car</a>
                </div> */}
                <span className='flex gap-4 items-center'>
                        <Icon icon="ic:baseline-phone" className='text-white w-7 h-7'/>
                        <span className='text-white font-[Sora]'>+91 9876543210</span>
                </span>
                <span className='flex gap-4 items-center'>
                        <Icon icon="heroicons:map-pin-16-solid"  className='text-white w-7 h-7' />
                        <span className='text-white font-[Sora]'>Thalassery, Kannur</span>
                </span>
                <span className='flex gap-4 items-center'>
                        <Icon icon="material-symbols:mail" className='text-white w-7 h-7' />
                        <span className='text-white font-[Sora]'>contactus@mirage.com</span>
                </span>
            </div>
        </footer>
    );
}

export default Footer;