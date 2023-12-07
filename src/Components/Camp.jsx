import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FaMapLocationDot } from "react-icons/fa6";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Camp = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
            <Swiper
                breakpoints={{
                    576: {
                        width: 576,
                        slidesPerView: 1,
                    },
                    1023: {
                        width: 1023,
                        slidesPerView: 2,
                    },
                }}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='mb-16 relative cursor-pointer'>
                    <div className="h-[280px] md:h-[400px] bg-black rounded-3xl relative">
                        <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover rounded-3xl' />
                        <div className='w-full h-full rounded-3xl bg-black opacity-40 absolute top-0 left-0'></div>
                        <div className='flex items-center gap-5 absolute top-8 left-8'>
                            <div className='bg-[#30af5b] w-16 h-16 rounded-full flex justify-center items-center'>
                                <FaMapLocationDot className='text-2xl text-white' />
                            </div>

                            <div>
                                <p className='text-xl font-semibold text-white'>
                                    Putuk Truno Camp
                                </p>
                                <p className='text-[#f7f7f7] text-sm'>
                                    India
                                </p>
                            </div>
                        </div>

                        <div className='absolute bottom-6 left-8 flex items-center gap-6'>
                            <div className='flex'>
                                <div className='bg-[#30af5b] w-10 h-10 rounded-full border-2 border-white'></div>
                                <div className='bg-[#30af5b] w-10 h-10 rounded-full border-2 border-white -ml-4'></div>
                                <div className='bg-[#30af5b] w-10 h-10 rounded-full border-2 border-white -ml-4'></div>
                                <div className='bg-[#30af5b] w-10 h-10 rounded-full border-2 border-white -ml-4'></div>
                            </div>

                            <p className='text-white text-base font-medium'>
                                50+ Joined
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-16 relative cursor-pointer'>
                    <div className="h-[280px] md:h-[400px] bg-black rounded-3xl relative">
                        <img src="https://plus.unsplash.com/premium_photo-1686836995093-98a744c77b1e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover rounded-3xl' />
                        <div className='w-full h-full rounded-3xl bg-black opacity-40 absolute top-0 left-0'></div>
                        <div className='flex items-center gap-5 absolute top-8 left-8'>
                            <div className='bg-[#30af5b] w-16 h-16 rounded-full flex justify-center items-center'>
                                <FaMapLocationDot className='text-2xl text-white' />
                            </div>

                            <div>
                                <p className='text-xl font-semibold text-white'>
                                    Putuk Truno Camp
                                </p>
                                <p className='text-[#f7f7f7] text-sm'>
                                    India
                                </p>
                            </div>
                        </div>

                        <div className='absolute bottom-6 left-8 flex items-center gap-6'>
                            <div className='flex'>
                                <div className='bg-[#30af5b] w-10 h-10 rounded-full border-2 border-white'></div>
                                <div className='bg-[#30af5b] w-10 h-10 rounded-full border-2 border-white -ml-4'></div>
                                <div className='bg-[#30af5b] w-10 h-10 rounded-full border-2 border-white -ml-4'></div>
                                <div className='bg-[#30af5b] w-10 h-10 rounded-full border-2 border-white -ml-4'></div>
                            </div>

                            <p className='text-white text-base font-medium'>
                                50+ Joined
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-16 relative cursor-pointer'>
                    <div className="h-[280px] md:h-[400px] bg-black rounded-3xl relative">
                        <img src="https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover rounded-3xl' />
                        <div className='w-full h-full rounded-3xl bg-black opacity-40 absolute top-0 left-0'></div>
                        <div className='flex items-center gap-5 absolute top-8 left-8'>
                            <div className='bg-[#30af5b] w-16 h-16 rounded-full flex justify-center items-center'>
                                <FaMapLocationDot className='text-2xl text-white' />
                            </div>

                            <div>
                                <p className='text-xl font-semibold text-white'>
                                    Putuk Truno Camp
                                </p>
                                <p className='text-[#f7f7f7] text-sm'>
                                    India
                                </p>
                            </div>
                        </div>

                        <div className='absolute bottom-6 left-8 flex items-center gap-6'>
                            <div className='flex'>
                                <div className='bg-[#30af5b] w-10 h-10 rounded-full border-2 border-white'></div>
                                <div className='bg-[#30af5b] w-10 h-10 rounded-full border-2 border-white -ml-4'></div>
                                <div className='bg-[#30af5b] w-10 h-10 rounded-full border-2 border-white -ml-4'></div>
                                <div className='bg-[#30af5b] w-10 h-10 rounded-full border-2 border-white -ml-4'></div>
                            </div>

                            <p className='text-white text-base font-medium'>
                                50+ Joined
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-16 relative cursor-pointer'>
                    <div className="h-[280px] md:h-[400px] bg-black rounded-3xl relative">
                        <img src="https://images.unsplash.com/photo-1471115853179-bb1d604434e0?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover rounded-3xl' />
                        <div className='w-full h-full rounded-3xl bg-black opacity-40 absolute top-0 left-0'></div>
                        <div className='flex items-center gap-5 absolute top-8 left-8'>
                            <div className='bg-[#30af5b] w-16 h-16 rounded-full flex justify-center items-center'>
                                <FaMapLocationDot className='text-2xl text-white' />
                            </div>

                            <div>
                                <p className='text-xl font-semibold text-white'>
                                    Putuk Truno Camp
                                </p>
                                <p className='text-[#f7f7f7] text-sm'>
                                    India
                                </p>
                            </div>
                        </div>

                        <div className='absolute bottom-6 left-8 flex items-center gap-6'>
                            <div className='flex'>
                                <div className='bg-[#30af5b] w-10 h-10 rounded-full border-2 border-white'></div>
                                <div className='bg-[#30af5b] w-10 h-10 rounded-full border-2 border-white -ml-4'></div>
                                <div className='bg-[#30af5b] w-10 h-10 rounded-full border-2 border-white -ml-4'></div>
                                <div className='bg-[#30af5b] w-10 h-10 rounded-full border-2 border-white -ml-4'></div>
                            </div>

                            <p className='text-white text-base font-medium'>
                                50+ Joined
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='bg-[#30af5b] p-14 rounded-3xl xl:absolute -bottom-10 right-20 z-50 xl:max-w-md'>
                <p className='text-3xl md:text-5xl xl:text-4xl text-white font-medium leading-tight mb-5'>
                    <span className='font-bold'> Feeling Lost</span> And Not Knowing The Way?
                </p>

                <p className='text-white md:text-lg'>
                    Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
                </p>
            </div>
        </div>
    );
};

export default Camp;