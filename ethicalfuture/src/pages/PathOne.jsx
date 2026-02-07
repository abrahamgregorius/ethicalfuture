import { Link } from "react-router-dom";
import BackBtn from "../component/BackBtn";
import { useEffect } from "react";

export default function PathOne() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
                            <h2 className="text-5xl md:text-7xl text-center font-bold">You've chosen <span className="!text-green-400">Efficiency</span></h2>
                        </div>
                        <div className="section-body flex gap-9 justify-center items-center flex-col"
                        >
                            <p className="w-[80%] md:text-xl"
                            >You have chosen efficiency over equality.</p>
                            <p className="w-[80%] md:text-xl"
                            >AI is designed to save as many lives as possible based on statistical data.</p>
                            <p className="w-[80%] md:text-xl"
                            >To improve accuracy, AI requests access to the patient's genetic data and family history.</p>
                        </div>
                    </div>
                </div>

                <div className="section section-2"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <div className="h-[90vh] gap-6 flex flex-col justify-center items-center">
                        <div className="section-head">
                            <h2 className="text-4xl md:text-6xl text-center font-bold">The AI is requesting further use of <span className="!text-green-400">data</span></h2>
                        </div>
                        <div className="section-body flex gap-9 justify-center items-center flex-col"
                        >
                            <p className="w-[80%] p-2 mt-4 rounded-xl text-2xl font-semibold"
                            >Grant the AI access to to the patient's genetic data and family history?</p>

                            <div className="buttons flex-col gap-5 flex md:flex-row">
                                <Link to="/1/1">
                                    <div className="button group cursor-pointer p-4 md:min-h-[6rem] max-w-[400px] md:max-w-[500px] w-full flex justify-center items-center bg-green-400 hover:bg-green-600 transition duration-500  rounded-xl">
                                        <p className={"!text-black font-semibold text-xl"}>
                                            A. Yes, use all available data
                                        </p>
                                    </div>
                                </Link>

                                <Link to="/1/2">
                                    <div className="button group cursor-pointer p-4 md:min-h-[6rem] max-w-[400px] md:max-w-[500px] w-full flex justify-center items-center bg-green-400 hover:bg-green-600 transition duration-500  rounded-xl">
                                        <p className={"!text-black font-semibold text-xl"}>
                                            B. No, limit to general medical data only
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