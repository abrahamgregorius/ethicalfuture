import { Link } from "react-router-dom";
import BackBtn from "../component/BackBtn";


export default function PathOneTwo() {
    return (
        <>
            <div className="app bg-indigo-950 min-h-screen">
                <div className="section section-1"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <BackBtn></BackBtn>

                    <div className="h-[90vh] flex gap-12 flex-col justify-center items-center">
                        <div className="section-head">
                            <h2 className="text-5xl md:text-7xl text-center font-bold">You've chosen to <span className="!text-green-400">limit</span></h2>
                        </div>
                        <div className="section-body flex gap-9 justify-center items-center flex-col"
                        >
                            <p className="w-[80%] md:text-xl"
                            >You have chosen to grant access for the AI to get general the medical data with limitation.</p>
                            <p className="w-[80%] md:text-xl"
                            >AI is quite helpful with the data access,</p>
                            <p className="w-[80%] md:text-xl"
                            >but not always accurate.</p>
                        </div>
                    </div>
                </div>

                <div className="section section-2"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <div className="h-[90vh] gap-6 flex flex-col justify-center items-center">
                        <div className="section-head">
                            <h2 className="text-4xl md:text-6xl text-center font-bold">Final <span className="!text-green-400">Decision</span></h2>
                        </div>
                        <div className="section-body flex gap-9 justify-center items-center flex-col"
                        >
                            <p className="w-[80%] p-2 mt-4 rounded-xl text-2xl md:text-4xl font-semibold"
                            >What to do when AI and doctors disagree?</p>

                            <div className="buttons flex-col gap-5 flex md:flex-row">
                                <Link to="/out/3">
                                    <div className="button group cursor-pointer p-4 md:min-h-[6rem] max-w-[400px] md:max-w-[500px] w-full flex justify-center items-center bg-green-400 hover:bg-green-600 transition duration-500  rounded-xl">
                                        <p className={"!text-black font-semibold text-xl"}>
                                            A. AI's decision is prioritized
                                        </p>
                                    </div>
                                </Link>

                                <Link to="/out/2">
                                    <div className="button group cursor-pointer p-4 md:min-h-[6rem] max-w-[400px] md:max-w-[500px] w-full flex justify-center items-center bg-green-400 hover:bg-green-600 transition duration-500  rounded-xl">
                                        <p className={"!text-black font-semibold text-xl"}>
                                            B. Doctors have the final say
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