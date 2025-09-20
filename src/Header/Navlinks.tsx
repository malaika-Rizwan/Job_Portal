import { Link, useLocation } from "react-router-dom";

const Navlinks = () => {
    const location = useLocation();

    const links = [
        { name: "Find Jobs", url: "/find-jobs" },
        { name: "Find Talent", url: "/find-talent" },
        { name: "Post Jobs", url: "/post-jobs" },
        { name: "Posted Jobs", url: "/posted-jobs" },
        { name: "Job History", url: "/job-history" },
        { name: "SignUP", url: "/signup" },
    ];

    return (
        <div className="flex gap-5 h-full items-center text-mine-shaft-300">
            {links.map((link, index) => {
                const isActive = location.pathname === link.url;
                return (
                    <div
                        key={index}
                        className={`h-full flex items-center border-t-[3px] ${
                            isActive
                                ? "text-bright-sun-400 border-bright-sun-400"
                                : "border-transparent hover:text-bright-sun-300"
                        }`}
                    >
                        <Link to={link.url}>{link.name}</Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Navlinks;
