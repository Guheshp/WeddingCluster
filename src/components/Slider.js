import React from 'react'
import { SliderData } from './json/Slider'


const Slider = () => {
    console.log(SliderData)
    return (
        <>
            {SliderData && SliderData.map((data) => (
                <div key={data.title} className='flex justify-center py-10  space-x-4 px-auto'>
                    <div className='w-5/12 my-24 space-y-4 px-8'>
                        <h1 className='text-6xl '>{data.title}.</h1>
                        <p>{data.description}</p>
                    </div>
                    <div>
                        <img src={data?.images[0]} alt="" />
                    </div>
                </div>
            ))}

        </>
    )
}

export default Slider
