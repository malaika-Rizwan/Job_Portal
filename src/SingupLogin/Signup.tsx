import { useState } from "react";
import { Link } from "react-router-dom";

import { IconLock, IconEye, IconEyeOff } from "@tabler/icons-react"; // Mantine (Tabler) icons

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="w-full max-w-md mx-auto px-2 flex flex-col justify-start pt-2 text-white font-['Poppins']">
            {/* Heading */}
            <h1 className="text-3xl font-bold mb-2 text-mine-shaft-200">Create Account</h1>
            {/* Full Name */}
            <label className="mb-2 font-medium">
                Full Name <span className="text-red-500">*</span>
            </label>
            <input
                type="text"
                placeholder="Enter your full name"
                className="mb-4 p-3 rounded-lg bg-mine-shaft-900 border border-gray-600 focus:outline-none focus:border-bright-sun-400"
            />

            {/* Email */}
            <label className="mb-2 font-medium">
                Email <span className="text-red-500">*</span>
            </label>
            <input
                type="email"
                placeholder="Enter your email"
                className="mb-4 p-3 rounded-lg bg-mine-shaft-900 border border-gray-600 focus:outline-none focus:border-bright-sun-400"
            />

            {/* Password */}
            <label className="mb-2 font-medium">
                Password <span className="text-red-500">*</span>
            </label>
            <div className="relative mb-4">
                <IconLock className="absolute left-3 top-3.5 text-gray-400" size={20} />
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
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

            {/* Confirm Password */}
            <label className="mb-2 font-medium">
                Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative mb-4">
                <IconLock className="absolute left-3 top-3.5 text-gray-400" size={20} />
                <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className="w-full p-3 pl-10 pr-10 rounded-lg bg-mine-shaft-900 border border-gray-600 focus:outline-none focus:border-bright-sun-400"
                />
                <button
                    type="button"
                    className="absolute right-3 top-3.5 text-gray-400"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                    {showConfirmPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                </button>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center gap-2 mb-6">
                <input type="checkbox" className="w-4 h-4 accent-bright-sun-400" />
                <span className="text-sm">
          I agree to the{" "}
                    <Link to="/terms" className="text-bright-sun-400">
            Terms & Conditions
          </Link>
        </span>
            </div>

            {/* Signup Button */}
            <button className="w-full bg-bright-sun-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition">
                Sign Up
            </button>

            {/* Already have an account */}
            <p className="text-sm text-gray-400 mt-6 text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-bright-sun-400 font-medium">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Signup;
