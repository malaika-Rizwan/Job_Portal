import { Divider } from "@mantine/core";
import { Link } from "react-router-dom"; // ✅ make sure to import Link

const JobCard = (props: any) => {
    return (
        <Link
            to="/Jobs"
            className="bg-mine-shaft-900 rounded-lg flex flex-col gap-3 shadow-md w-72 p-4
                       border border-transparent hover:border-bright-sun-400
                       transition-all duration-300"
        >
            {/* Top section */}
            <div className="flex justify-between items-start">
                {/* Left: Logo + Job info */}
                <div className="flex gap-2 items-center">
                    <div className="p-2 rounded-md bg-mine-shaft-800">
                        <img
                            className="h-7"
                            src={`/Icons/${props.company}.png`}
                            alt={`${props.company} logo`}
                        />
                    </div>
                    <div>
                        <div className="font-semibold text-mine-shaft-100">
                            {props.jobTitle}
                        </div>
                        <div className="text-xs text-mine-shaft-300">
                            {props.company} &#x2022; {props.applicants} Applications
                        </div>
                    </div>
                </div>

                {/* Right: Bookmark Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-bright-sun-400 cursor-pointer hover:text-bright-sun-500"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                </svg>
            </div>

            {/* Tags */}
            <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs">
                <div>{props.experience}</div>
                <div>{props.jobType}</div>
                <div>{props.location}</div>
            </div>

            {/* Description */}
            <p className="text-xs text-mine-shaft-300 text-justify line-clamp-3">
                {props.description}
            </p>

            {/* Divider */}
            <Divider size="xs" color="mine-shaft-800" />

            {/* Bottom row: Salary + Time */}
            <div className="flex justify-between items-center">
                <div className="font-semibold text-mine-shaft-200">
                    &#8360; {props.package}
                </div>
                <div className="flex gap-1 text-xs items-center text-mine-shaft-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-mine-shaft-400"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M12 7v5l3 3" />
                    </svg>
                    {props.postedDaysAgo} days ago
                </div>
            </div>
        </Link>
    );
};

export default JobCard;
