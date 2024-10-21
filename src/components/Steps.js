import React from 'react'

const Steps = () => {
    return (
        <>
            <div className='text-center py-5'>
                <h1 className='text-2xl  text-neutral-500'>How Wedding Cluster Works.</h1>
                <h2 className='text-6xl font-bold w-6/12 m-auto py-7'>5 easy steps for a</h2>
                <h2 className='text-6xl font-bold w-6/12 m-auto pb-7'> hassle-free wedding</h2>
            </div>

            <div className="relative flex justify-center items-center gap-5 mt-5">
                <div className="absolute top-1/2 w-full h-[2px] border border-dashed bg-black z-0"></div>

                <div className="relative z-10 card bg-lightpurple w-72 rounded-[50px] shadow-xl border">
                    <div className="p-3">
                        <h2 className="text-center text-xl font-medium py-5">Speak to us</h2>
                        <p className='text-center'>Give your requirement &</p>
                        <p className='text-center'>preferences to your</p>
                        <p className='text-center'>planner</p>
                    </div>
                </div>

                <div className="relative z-10 card bg-peach rounded-[50px] w-72 shadow-xl border">
                    <div className="p-3">
                        <h2 className="text-center text-xl font-medium py-5">See the options</h2>
                        <div className='pb-3'>
                            <p className='text-center'>Get a walkthrough of our designs, pricing & </p>
                            <p className='text-center'>services</p>
                        </div>

                    </div>
                </div>

                <div className="relative z-10 card bg-cream rounded-[50px] w-72 shadow-xl border">
                    <div className="p-3">
                        <h2 className="text-center text-xl font-medium py-5">Get custom package</h2>
                        <div className='pb-3'>
                            <p className='text-center'>Receive a customised</p>
                            <p className='text-center '>package based on</p>
                            <p className='text-center'>your requirement</p>
                        </div>

                    </div>
                </div>

                <div className="relative z-10 card bg-lightweight rounded-[50px] w-72 shadow-xl border">
                    <div className="p-3">
                        <h2 className="text-center text-xl font-medium py-5">Book us</h2>
                        <div className='pb-3'>
                            <p className='text-center'>Pay a small fee to </p>
                            <p className='text-center'> confirm once you are </p>
                            <p className='text-center'> happy</p>
                        </div>

                    </div>
                </div>

                <div className="relative z-10 card bg-green rounded-[50px] w-72 shadow-xl border">
                    <div className="p-3">
                        <h2 className="text-center text-xl font-medium py-5">Relax</h2>
                        <div className='pb-3'>
                            <p className='text-center'>Sit back & relax while</p>
                            <p className='text-center'> we do all the planning & </p>
                            <p className='text-center'> coordination</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Steps
