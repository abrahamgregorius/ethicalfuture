import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="app bg-indigo-950 min-h-screen">
                <div className="hero"
                    data-aos="fade-up"
                    data-aos-duration="1500">
                    <div className="h-[90vh] flex gap-12 flex-col justify-center items-center">
                        <img src="./grid.png" alt="" className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[90%] md:-translate-y-[50%] w-[300px] md:w-[800px] opacity-20" />
                        <div className="flex gap-4 flex-col justify-center items-center">
                            <div className="chip text-sm md:text-lg border bg-gray-200  shadow-gray-200 py-1 px-3 rounded-full ">
                                <p className="!text-gray-900 font-bold">Future x Humanity</p>
                            </div>
                            <div className="flex gap-3 md:gap-4 flex-col justify-center items-center">
                                <h1 className="text-6xl md:text-8xl font-bold text-center">
                                    Welcome to <span className="!text-green-400">ethicalfuture</span>
                                </h1>
                                <p className="!text-gray-400 md:text-2xl">Decide which way humanity will go</p>

                            </div>
                        </div>

                        <div className="scroll-animate flex flex-col py-2 px-3 rounded-xl border-white opacity-50 justify-center items-center">
                            <p>Scroll down and read</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-icon lucide-arrow-down"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>                        </div>
                    </div>
                </div>

                <div className="section section-1"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <div className="h-[80vh] flex gap-12 flex-col justify-center items-center">
                        <div className="section-head">
                            <h2 className="text-5xl md:text-7xl text-center font-bold">A Decision in <span className="!text-green-400">2048</span></h2>
                        </div>
                        <div className="section-body flex gap-9 justify-center items-center flex-col"
                        >
                            <p className="w-[80%] md:text-xl"
                            >You are part of a hospital ethics board in the <strong>age of AI</strong>.</p>
                            <p className=" w-[80%] md:text-xl"
                            >It is the year of 2048.</p>
                            <p className=" w-[80%] md:text-xl"
                            >Hospitals in current era use AI to help decide treatment priorities due to limited medical tools.</p>
                            <p className=" w-[80%] md:text-xl"
                            >And today, <strong className="text-green-400">YOU</strong> have to choose which policy should be implemented in the hospital.</p>
                        </div>
                    </div>
                </div>

                <div className="section section-2"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <div className="h-[90vh] gap-6 flex flex-col justify-center items-center">
                        <div className="section-head">
                            <h2 className="text-4xl md:text-6xl text-center font-bold">Main Principle of <span className="!text-green-400">Artificial Intelligence System</span></h2>
                        </div>
                        <div className="section-body flex gap-9 justify-center items-center flex-col"
                        >
                            <p className="w-[80%] p-2 mt-4 rounded-xl text-2xl md:text-4xl font-semibold"
                            >What is the main principle that has to be prioritized by the AI?</p>

                            <div className="buttons flex-col gap-5 flex md:flex-row">
                                <Link to="/1">
                                    <div className="button group cursor-pointer p-4 md:min-h-[6rem]
 max-w-[400px] md:max-w-[500px] w-full flex justify-center items-center bg-green-400 hover:bg-green-600 transition duration-500  rounded-xl">
                                        <p className={"!text-black font-semibold text-xl"}>
                                            A. Maximize the number of people saved (Focuses on efficiency and life expectancy)
                                        </p>
                                    </div>
                                </Link>

                                <Link to="/2">
                                    <div className="button group cursor-pointer p-4 md:min-h-[6rem]
 max-w-[400px] md:max-w-[500px] w-full flex justify-center items-center bg-green-400 hover:bg-green-600 transition duration-500  rounded-xl">
                                        <p className={"!text-black font-semibold text-xl"}>
                                            B. Ensure every patient is treated the same (Focuses on human rights and equality)
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )

}