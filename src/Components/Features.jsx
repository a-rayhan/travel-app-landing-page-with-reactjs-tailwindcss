import { FaMapLocationDot } from "react-icons/fa6";
import Phone from '../assets/phone.png';

const Features = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 xl:pt-14 pb-24">
            <div className="flex">
                <div className="hidden xl:block">
                    <img src={Phone} alt="" />
                </div>

                <div className="flex-1">
                    <h1 className="text-5xl md:text-6xl font-bold mb-10">
                        Our Features
                    </h1>

                    <div className="grid lg:grid-cols-2 gap-10">
                        <div>
                            <div className='bg-[#30af5b] w-20 h-20 rounded-full flex justify-center items-center mb-5'>
                                <FaMapLocationDot className='text-2xl text-white' />
                            </div>

                            <h2 className="text-3xl font-semibold mb-5">
                                Real Maps Can Be Offline
                            </h2>

                            <p className="text-lg">
                                We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location
                            </p>
                        </div>
                        <div>
                            <div className='bg-[#30af5b] w-20 h-20 rounded-full flex justify-center items-center mb-5'>
                                <FaMapLocationDot className='text-2xl text-white' />
                            </div>

                            <h2 className="text-3xl font-semibold mb-5">
                                Real Maps Can Be Offline
                            </h2>

                            <p className="text-lg">
                                We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location
                            </p>
                        </div>
                        <div>
                            <div className='bg-[#30af5b] w-20 h-20 rounded-full flex justify-center items-center mb-5'>
                                <FaMapLocationDot className='text-2xl text-white' />
                            </div>

                            <h2 className="text-3xl font-semibold mb-5">
                                Real Maps Can Be Offline
                            </h2>

                            <p className="text-lg">
                                We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location
                            </p>
                        </div>
                        <div>
                            <div className='bg-[#30af5b] w-20 h-20 rounded-full flex justify-center items-center mb-5'>
                                <FaMapLocationDot className='text-2xl text-white' />
                            </div>

                            <h2 className="text-3xl font-semibold mb-5">
                                Real Maps Can Be Offline
                            </h2>

                            <p className="text-lg">
                                We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;