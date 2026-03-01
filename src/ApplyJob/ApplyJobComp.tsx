import { Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";

const ApplyJobComp = () => {
    return (
        <div>
            <Divider size="xs" />

            {/* Back Button */}

            <div className="w-2/3 bg-mine-shaft-900 rounded-xl flex flex-col gap-8 shadow-md p-6 mt-6">
                {/* Top section */}
                <div className="flex justify-between items-start">
                    {/* Left: Logo + Job info */}
                    <div className="flex gap-3 items-center">
                        <div className="p-2 rounded-xl bg-mine-shaft-800">
                            <img className="h-14" src={`/Icons/Google.png`} alt="google logo" />
                        </div>
                        <div>
                            <div className="font-semibold text-mine-shaft-100 text-lg">
                                Software Engineer
                            </div>
                            <div className="text-xs text-mine-shaft-300">
                                Google &#x2022; 48 Applications
                            </div>
                        </div>
                    </div>

                    {/* Right: Apply then bookmark */}
                    <div className="flex flex-col items-center gap-3">
                        <Link to="/apply-job">
                            <Button
                                variant="light"
                                className="text-bright-sun-400 border border-bright-sun-400 hover:bg-bright-sun-400/20"
                            >
                                Apply
                            </Button>
                        </Link>

                        <button
                            aria-label="bookmark"
                            className="text-bright-sun-400 hover:text-bright-sun-500"
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyJobComp;
