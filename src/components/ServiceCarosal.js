import React from 'react'
import { servicesData } from './json/Service.json'

const ServiceCarosal = () => {
    return (
        <>
            <div className=''>
                <div>
                    <h1 className='text-2xl font-bold'>Find every Service you need</h1>
                </div>
                <div className='flex space-x-3 mt-5'>
                    {servicesData && servicesData.slice(0, 4).map((data) => {
                        return (
                            <div className="card bg-base-100 w-96 border hover:shadow-2xl">
                                <figure className="px-2 pt-2">
                                    <img
                                        src={data?.image}
                                        alt={`${data?.serviceName} Image`}
                                        className="rounded-xl w-" />
                                </figure>
                                {/* <p>sdhgfh</p> */}
                                <div className="card-body items-center text-center py-5">
                                    <h2 className="card-title">{data?.serviceName}</h2>
                                    <p>{data?.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>
        </>
    )
}

export default ServiceCarosal
