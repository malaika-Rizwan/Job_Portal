import { useLocation } from "react-router-dom";
import Signup from "../SingupLogin/Signup";
import Login from "../SingupLogin/Login";

const SignupPage = () => {
    const location = useLocation();
    const isSignup = location.pathname === "/signup";

    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins'] overflow-hidden">
            <div
                className={`flex w-[200vw] h-[100vh] transition-transform duration-1000 ease-in-out
        ${isSignup ? "-translate-x-1/2" : "translate-x-0"}`}
            >
                {/* ================= LOGIN PAGE ================= */}
                {/* ================= LOGIN PAGE ================= */}
                <div className="w-[100vw] h-full flex relative">
                    {/* Left 50% = Login form */}
                    <div className="w-1/2 h-full flex items-center justify-start">
                        <Login />
                    </div>

                    {/* Right 50% = Branding Card */}
                    <div
                        className={`w-1/2 h-full flex flex-col justify-center items-start gap-2 bg-mine-shaft-900 transition-all duration-1000 ease-in-out
    ${isSignup ? "translate-x-full opacity-0" : "translate-x-0 opacity-100 rounded-l-[200px]"}`}
                    >
                        <div className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 text-bright-sun-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2" />
                                <path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            </svg>
                            <h1 className="text-6xl font-semibold text-bright-sun-400">
                                JobHook
                            </h1>
                        </div>
                        <p className="text-2xl text-mine-shaft-200 font-semibold">
                            Find the job made for you
                        </p>
                    </div>
                </div>

                {/* ================= SIGNUP PAGE ================= */}
                <div className="w-[100vw] h-full flex relative">
                    {/* Left 50% = Branding Card */}
                    <div
                        className={`w-1/2 h-full flex flex-col justify-center items-start gap-6 p-10 bg-mine-shaft-900 transition-all duration-1000 ease-in-out
            ${isSignup ? "translate-x-0 opacity-100 rounded-r-[200px]" : "-translate-x-full opacity-0"}`}
                    >
                        <div className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 text-bright-sun-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2" />
                                <path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            </svg>
                            <h1 className="text-6xl font-semibold text-bright-sun-400">
                                JobHook
                            </h1>
                        </div>
                        <p className="text-2xl text-mine-shaft-200 font-semibold">
                            Find the job made for you
                        </p>
                    </div>

                    {/* Right 50% = Signup form */}
                    <div className="w-1/2 h-full flex items-center justify-center pr-10">
                        <Signup />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
