import React from 'react';
import office from '../../../img/contact.png'
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

const Contact = () => {
    return (
        <div class="hero bg-base-200">
            <div class="hero-content flex-col lg:flex-row ">
                <img style={{width: '300px'}} src={office} />
                <div className='lg:ml-20'>
                    <h1 class="text-5xl font-bold mb-5">Contact with us</h1>
                    <div  className="grid lg:grid-cols-3">
                    <div>
                        <div style={{ lineHeight: "1.1" }} className='flex items-center'>
                            <p className='text-red-500 text-4xl'><MdOutlineAlternateEmail /></p>
                            <div className='mt-2 ms-2'>
                                <h5 className='text-2xl font-semibold'>Email</h5>
                                <p className=''>info@smartroot.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ lineHeight: "1.1" }} className='flex items-center'>
                            <p className='text-red-500 text-4xl'><FiPhone /></p>
                            <div className='mt-2 ms-2'>
                                <h5 className='text-2xl font-semibold'>Phone</h5>
                                <p className=''>+8801222222234</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div style={{ lineHeight: "1.1" }} className='flex items-center'>
                            <p className='text-red-500 text-4xl'><GoLocation /></p>
                            <div className='mt-2 ms-2'>
                                <h5 className='text-2xl font-semibold'>Address</h5>
                                <p className=''>Muradpur, Ctg</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;