import { Link } from "react-router-dom";

export default function OutcomeFour() {
    return (
        <>
            <div className="app bg-indigo-950 min-h-screen">
                <div className="section section-1"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <div className="h-[90vh] flex gap-12 flex-col justify-center items-center">
                        <div className="section-head">
                            <h2 className="text-5xl md:text-7xl text-center font-bold">You've chosen <span className="!text-green-400">Humane but Imperfect System</span></h2>
                        </div>
                        <div className="section-body flex gap-9 justify-center items-center flex-col"
                        >
                            <p className="w-[80%] md:text-xl"
                            >The system emphasizes equality, transparency, and ethical oversight.</p>
                            <p className="w-[80%] md:text-xl"
                            >Outcomes feel more just and socially acceptable, even if the total number of lives saved is not maximized.</p>
                        </div>
                    </div>
                </div>

                <div className="section section-2"
                    data-aos="fade-up"
                    data-aos-duration="1500">
                    <div className="section-body flex gap-9 justify-center items-center flex-col">
                        <h2 className="w-[80%] text-3xl md:text-5xl font-semibold"
                        >Fairer. More trusted. Not always the most efficient.</h2>

                        <p className="w-[80%] text-xl md:text-3xl font-semibold">World Statistic 2050</p>
                        <div className="grid p-4 md:p-0 max-w-[800px] grid-cols-1 gap-3 md:grid-cols-4">
                            <div className="grid-item rounded-xl p-4 border-2 flex justify-center items-center flex-col border-red-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator-icon lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2" /><line x1="8" x2="16" y1="6" y2="6" /><line x1="16" x2="16" y1="14" y2="18" /><path d="M16 10h.01" /><path d="M12 10h.01" /><path d="M8 10h.01" /><path d="M12 14h.01" /><path d="M8 14h.01" /><path d="M12 18h.01" /><path d="M8 18h.01" /></svg>
                                <p>88% of citizens say they understand how the prioritization system works</p>
                            </div>

                            <div className="grid-item rounded-xl p-4 border-2 flex justify-center items-center flex-col border-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-timer-icon lucide-timer"><line x1="10" x2="14" y1="2" y2="2" /><line x1="12" x2="15" y1="14" y2="11" /><circle cx="12" cy="14" r="8" /></svg>
                                <p>Public trust in hospitals reaches 81%</p>
                            </div>
                            <div className="grid-item rounded-xl p-4 border-2 flex justify-center items-center flex-col border-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-skull-icon lucide-skull"><path d="m12.5 17-.5-1-.5 1h1z" /><path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" /><circle cx="15" cy="12" r="1" /><circle cx="9" cy="12" r="1" /></svg>
                                <p>Average waiting time increases by 15% compared to full-efficiency systems</p>
                            </div>
                            <div className="grid-item rounded-xl p-4 border-2 flex justify-center items-center flex-col border-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-person-standing-icon lucide-person-standing"><circle cx="12" cy="5" r="1" /><path d="m9 20 3-6 3 6" /><path d="m6 8 6 2 6-2" /><path d="M12 10v4" /></svg>
                                <p>Countries using this model rank highest in global patient satisfaction</p>
                            </div>

                        </div>


                    </div>



                </div>

                <div className="section section-3"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <div className="h-[90vh] gap-6 flex flex-col justify-center items-center">
                        <div className="section-head">
                            <h2 className="text-4xl md:text-6xl text-center font-bold">You have successfully reach <span className="text-green-400">the end</span></h2>
                        </div>
                        <div className="section-body flex gap-9 justify-center items-center flex-col"
                        >
                            <div className="buttons flex-col gap-5 flex md:flex-row">
                                <Link to="/">
                                    <div className="button group cursor-pointer py-4 px-8 md:min-h-[4rem] max-w-[400px] md:max-w-[600px] w-full flex justify-center items-center bg-green-400 hover:bg-green-600 transition duration-500  rounded-xl">
                                        <p className={"!text-black font-semibold text-xl"}>
                                            Try other path
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