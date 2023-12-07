import { FaPlayCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto px-6">

            <div className="hero-bg -z-20 absolute h-screen w-screen object-cover right-40 top-0 xl:-right-20 xl:-top-10 overflow-hidden"></div>

            <div className="flex flex-col xl:flex-row justify-between">
                <div className="max-w-2xl pt-12 xl:pt-24">
                    <h1 className="text-[52px] xl:text-[88px] font-bold leading-tight">
                        Putuk Truno Camp Area
                    </h1>

                    <p className="mt-6">
                        We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
                    </p>

                    <div className="">
                        <div className="py-11 flex items-center gap-2">
                            <div className="flex text-lg gap-1 text-yellow-600">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className="text-xl">
                                <span className="font-semibold">198k</span> Excellent Reviews
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-5 mb-10 xl:mb-0">
                            <button className="w-full md:w-auto flex items-center justify-center gap-x-2 borde px-8 py-4 rounded-full bg-[#30af5b] text-white font-semibold cursor-pointer">
                                Download App
                            </button>

                            <button className="w-full md:w-auto flex items-center justify-center gap-x-2 borde px-8 font-semibold cursor-pointer">
                                <FaPlayCircle className="text-xl text-[#30af5b]" />
                                How we work
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="w-96 md:w-80 lg:w-72 h-60 bg-black rounded-3xl xl:absolute xl:right-44 xl:top-32 px-6 py-10">
                        <div>
                            <p className="text-[#f7f7f7] text-base mb-2 ml-3">
                                Location
                            </p>

                            <input type="text" placeholder="Enter Location" defaultValue='Aguas Calientes' className="bg-transparent text-white text-xl font-semibold border-2 px-3 py-1 rounded-2xl w-full" />
                        </div>

                        <div className="flex justify-between items-center gap-3 mt-8">
                            <div>
                                <p className="text-[#f7f7f7] text-base ml-3">
                                    Distance
                                </p>

                                <p className="text-white text-xl font-semibold pl-3">
                                    173.28 mi
                                </p>
                            </div>

                            <div>
                                <p className="text-[#f7f7f7] text-base ml-3">
                                    Elevation
                                </p>

                                <p className="text-white text-xl font-semibold pl-3">
                                    2.040 km
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;