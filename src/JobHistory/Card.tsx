// Card.tsx
import { Button, Divider } from "@mantine/core";
import { IconCalendarMonth } from "@tabler/icons-react";

interface CardProps {
    company: string;
    jobTitle: string;
    applicants: number;
    experience: string;
    jobType: string;
    location: string;
    description: string;
    package: string;
    applied?: boolean;
    saved?: boolean;
    offered?: boolean;
    interviewing?: boolean;
    postedDaysAgo: number;
}

const Card: React.FC<CardProps> = (props) => {
    const handleConfirm = () => {
        alert("Action clicked!");
    };

    const openInterview = () => {
        alert("Open interview schedule!");
    };

    return (
        <div className="bg-mine-shaft-900 rounded-lg flex flex-col gap-3 shadow-md w-72 p-4">
            {/* Top section */}
            <div className="flex justify-between items-start">
                <div className="flex gap-2 items-center">
                    <div className="p-2 rounded-md bg-mine-shaft-800">
                        <img
                            className="h-7"
                            src={`/icons/${props.company}.png`}
                            alt={`${props.company} logo`}
                        />
                    </div>
                    <div>
                        <div className="font-semibold text-mine-shaft-100">{props.jobTitle}</div>
                        <div className="text-xs text-mine-shaft-300">
                            {props.company} &#x2022; {props.applicants} Applications
                        </div>
                    </div>
                </div>

                {/* Bookmark Icon */}
                {props.saved ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-bright-sun-400 cursor-pointer hover:text-bright-sun-500"
                    >
                        <path d="M18 7v14l-6-4-6 4V7a4 4 0 014-4h4a4 4 0 014 4z" />
                    </svg>
                ) : (
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
                        <path d="M18 7v14l-6-4-6 4V7a4 4 0 014-4h4a4 4 0 014 4z" />
                    </svg>
                )}
            </div>

            {/* Tags */}
            <div className="flex gap-2">
                <div className="py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">
                    {props.experience}
                </div>
                <div className="py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">
                    {props.jobType}
                </div>
                <div className="py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">
                    {props.location}
                </div>
            </div>

            {/* Description */}
            <p className="text-xs text-mine-shaft-300 text-justify line-clamp-3">
                {props.description}
            </p>

            {/* Divider */}
            <Divider size="xs" color="mine-shaft-800" />

            {/* Bottom row */}
            <div className="flex justify-between items-center">
                <div className="font-semibold text-mine-shaft-200">&#8360; {props.package}</div>
                <div className="flex gap-1 text-xs items-center text-mine-shaft-400">
                    <IconCalendarMonth size={14} />
                    {props.applied
                        ? "Applied"
                        : props.offered
                            ? "Offered"
                            : props.interviewing
                                ? "Interviewing"
                                : "Posted"}{" "}
                    {props.postedDaysAgo} days ago
                </div>
            </div>

            {/* Actions for Offered */}
            {props.offered && (
                <div className="flex gap-2 mt-2">
                    <Button fullWidth variant="outline" color="yellow" onClick={handleConfirm}>
                        Accept
                    </Button>
                    <Button fullWidth color="yellow" onClick={handleConfirm}>
                        Reject
                    </Button>
                </div>
            )}

            {/* Actions for Interviewing */}
            {props.interviewing && (
                <Button
                    fullWidth
                    variant="light"
                    color="yellow"
                    mt={2}
                    onClick={openInterview}
                    className="flex items-center justify-center gap-2"
                >
                    <span>Sunday, 25 August &bull;</span>
                    <IconCalendarMonth size={18} className="text-bright-sun-400" />
                    <span className="text-mine-shaft-400">10:00 AM</span>
                </Button>
            )}


        </div>
    );
};

export default Card;
