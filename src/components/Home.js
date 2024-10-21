import React from 'react'
import Slider from './Slider'
import ServiceCarosal from './ServiceCarosal'
import ScrollCarousel from './ScrollCarousel'
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import Steps from './Steps';
import Portfolio from './Portfolio';


const Home = () => {
    return (
        <>
            <div>
                <Slider />
            </div>
            <div className='px-10 mt-5'>
                <ServiceCarosal />
            </div>
            <div className=''>
                <div className='py-20 bg-blue-950 mt-10 overflow-x-auto'>
                    <ScrollCarousel />
                </div>
            </div>

            <div className='my-2'>
                <div className='float-end me-6 px-[5px] py-[6px] rounded-xl transition-all duration-600 bg-red-200 border-red-700 '>
                    <Link to={`/services`}>
                        <h1 className='p-2 px-4  text-md border border-transparent flex items-center hover:border hover:border-red-700 rounded-lg hover:text-red-700 hover:bg-red-200' >
                            Explore Services
                            <MdOutlineArrowOutward className='' />
                        </h1>
                    </Link>

                </div>
            </div>
            <div className='px-10 mt-20'>
                <div>
                    <Steps />
                </div>
            </div>
            <div className='px-10 mt-20'>
                <div>
                    <Portfolio />
                </div>
            </div>

        </>
    )
}

export default Home
