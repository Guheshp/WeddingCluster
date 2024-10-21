import React from 'react';
import { serviceName } from './json/ServiceName'; // Ensure this file exports an array

const ScrollCarousel = () => {
    console.log(serviceName); // Log to see the data structure

    return (
        <>
            <div className="carousel rounded-box">
                {serviceName && serviceName.length > 0 ? (
                    <div className="carousel-item whitespace-nowrap overflow-x-auto">
                        <h1 className='text-white text-lg md:text-xl font-semibold p-3 flex items-center'>
                            {serviceName.map(data => (
                                <span key={data.name} className='flex flex-col justify-center items-center gap-3 border-r-2 px-3 md:px-7'>
                                    {/* Render the SVG icon */}
                                    <span
                                        className='svg-icon'
                                        dangerouslySetInnerHTML={{ __html: data.svg }}
                                        style={{ width: '24px', height: '24px', marginRight: '8px' }}
                                    />
                                    {data.name}
                                </span>
                            )).reduce((prev, curr) => [prev, " ", curr])}
                        </h1>
                    </div>
                ) : (
                    <h1 className='text-white text-center'>No services available</h1> // Handle the empty case
                )}
            </div>


        </>
    );
};

export default ScrollCarousel;
