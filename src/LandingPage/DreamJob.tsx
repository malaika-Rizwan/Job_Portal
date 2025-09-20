import { TextInput, Avatar } from "@mantine/core";
import React from "react";

export const DreamJob: React.FC = () => {
    return (
        <div className="flex items-center px-16 py-12">
            {/* Left Side: Text */}
            <div className="flex flex-col w-[45%] gap-4">
                <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
                    Find Your <span>Dream</span> <span>Job with Us</span>
                </div>

                <div className="text-lg text-mine-shaft-200">
                    Good life begins with good company. Start exploring thousands of jobs
                    in one place.
                </div>

                {/* Search Bar */}
                <div className="flex gap-3 mt-5">
                    <TextInput
                        variant="unstyled"
                        label="Job Title"
                        placeholder="Software Engineer"
                        classNames={{
                            input:
                                "bg-mine-shaft-800 rounded-lg p-2 text-mine-shaft-100 placeholder-mine-shaft-400",
                            label: "text-mine-shaft-100 text-sm mb-1",
                        }}
                    />
                    <TextInput
                        variant="unstyled"
                        label="Job Type"
                        placeholder="Full time"
                        classNames={{
                            input:
                                "bg-mine-shaft-800 rounded-lg p-2 text-mine-shaft-100 placeholder-mine-shaft-400",
                            label: "text-mine-shaft-100 text-sm mb-1",
                        }}
                    />
                    <button className="flex items-center justify-center px-4 bg-bright-sun-400 text-mine-shaft-950 rounded-lg hover:bg-bright-sun-500 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Right Side: Image + Floating Cards */}
            <div className="flex flex-col w-[55%] items-center justify-center relative">
                {/* Image */}
                <div className="w-[30rem]">
                    <img src="/Boy.png" alt="Illustration of job search" />
                </div>

                {/* Floating Card: Jobs Stat */}
                <div className="absolute right-5 top-1/2 border border-bright-sun-400 rounded-lg p-3 backdrop-blur-md bg-black/30">
                    <div className="text-center text-mine-shaft-100">10k+ got jobs</div>
                    <Avatar.Group>
                        <Avatar src="/avatar2.png" />
                        <Avatar src="/avatar3.png" />
                        <Avatar src="/avatar4.png" />
                        <Avatar>+5</Avatar>
                    </Avatar.Group>
                </div>

                {/* Floating Card: Job Info */}
                <div className="absolute left-5 top-1/4 border border-bright-sun-400 rounded-lg p-3 backdrop-blur-md bg-black/30 flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg flex items-center justify-center">
                            <img src="/Google.png" alt="Google Logo" />
                        </div>
                        <div className="text-sm text-mine-shaft-100">
                            Software Engineer
                            <div className="text-xs text-mine-shaft-200">Pakistan</div>
                        </div>
                    </div>
                    <div className="flex gap-4 text-xs text-mine-shaft-200">
                        <span>1 day ago</span>
                        <span>100 applications</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


