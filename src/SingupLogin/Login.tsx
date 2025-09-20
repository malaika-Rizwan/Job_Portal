import { useState } from "react";
import { Link } from "react-router-dom";
import { IconLock, IconEye, IconEyeOff, IconMail } from "@tabler/icons-react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-[90vh] px-20 flex flex-col justify-center bg-mine-shaft-950 font-['Poppins'] text-white w-full">
            {/* Heading */}
            <h1 className="text-3xl font-bold mb-6">Login</h1>

            {/* Email */}
            <label className="mb-2 font-medium">
                Email <span className="text-red-500">*</span>
            </label>
            <div className="relative mb-4">
                <IconMail className="absolute left-3 top-3.5 text-gray-400" size={20} />
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 pl-10 rounded-lg bg-mine-shaft-900 border border-gray-600 focus:outline-none focus:border-bright-sun-400"
                />
            </div>

            {/* Password */}
            <label className="mb-2 font-medium">
                Password <span className="text-red-500">*</span>
            </label>
            <div className="relative mb-4">
                <IconLock className="absolute left-3 top-3.5 text-gray-400" size={20} />
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full p-3 pl-10 pr-10 rounded-lg bg-mine-shaft-900 border border-gray-600 focus:outline-none focus:border-bright-sun-400"
                />
                <button
                    type="button"
                    className="absolute right-3 top-3.5 text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                </button>
            </div>

            {/* Remember me + Forgot password */}
            <div className="flex items-center justify-between mb-6">
                <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="w-4 h-4 accent-bright-sun-400" />
                    Remember me
                </label>
                <Link to="/forgot-password" className="text-sm text-bright-sun-400 hover:underline">
                    Forgot Password?
                </Link>
            </div>

            {/* Login Button */}
            <button className="w-full bg-bright-sun-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition">
                Login
            </button>

            {/* Signup link */}
            <p className="text-sm text-gray-400 mt-6">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-bright-sun-400 font-medium">
                    SignUp
                </Link>
            </p>
        </div>
    );
};

export default Login;
