const Guide = () => {
    return (
        <div className="xl:mt-36 mb-24">
            <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col xl:flex-row justify-between gap-x-52">
                <div className="flex-1">
                    <p className=" text-lg text-[#30af5b] mb-5">
                        WE ARE HERE FOR YOU
                    </p>
                    <h1 className="text-6xl font-bold mb-10 xl:mb-0">
                        Guide You to Easy Path
                    </h1>
                </div>

                <div className="flex-1">
                    <p className="text-lg">
                        Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain
                    </p>
                </div>
            </div>

            <div className="h-[420px] bg-black relative">
                <img src="https://images.unsplash.com/photo-1598695643539-f47d01094dee?q=80&w=1815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute w-full h-full object-cover top-0 left-0" />

                <div className="relative">
                    <div className="w-72 h-60 bg-white rounded-3xl absolute left-20 xl:left-44 top-20 xl:top-32 px-6 py-10">
                        <div>
                            <p className="text-gray-500 text-base mb-2 ml-3">
                                Location
                            </p>

                            <input type="text" placeholder="Enter Location" defaultValue='Aguas Calientes' className="bg-transparent text-black text-xl font-semibold border-2 px-3 py-1 rounded-2xl w-full" />
                        </div>

                        <div className="flex justify-between items-center gap-3 mt-8">
                            <div>
                                <p className="text-gray-500 text-base ml-3">
                                    Distance
                                </p>

                                <p className="text-black text-xl font-semibold pl-3">
                                    173.28 mi
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-base ml-3">
                                    Elevation
                                </p>

                                <p className="text-black text-xl font-semibold pl-3">
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

export default Guide;