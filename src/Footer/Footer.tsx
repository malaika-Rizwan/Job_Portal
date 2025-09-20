import { footerLinks } from "../LandingPage/Data";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    // Hide footer on login & signup pages
    if (location.pathname === "/signup" || location.pathname === "/login") {
        return null;
    }



    return (
        <div className="pt-20 pb-5 flex flex-col md:flex-row justify-between px-6 md:px-20 bg-mine-shaft-950 font-['Poppins'] gap-10">
            {/* Brand + Description */}
            <div className="flex flex-col gap-4 w-full md:w-1/4">
                <div className="flex gap-2 text-bright-sun-400 items-center">
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
                        <path d="M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2" />
                        <path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    </svg>
                    <div className="text-xl font-semibold">JobHook</div>
                </div>
                <div className="text-sm text-mine-shaft-300">
                    Job portal with user profile, skills update, certificates, work
                    experience, and admin job postings.
                </div>

                {/* Social Icons */}
                <div className="flex gap-3 text-bright-sun-400 items-center [&>div]:bg-mine-shaft-700 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer">
                    {/* GitHub */}
                    <div>
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
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                    </div>
                    {/* LinkedIn */}
                    <div>
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
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M8 11v5" />
                            <path d="M8 8v.01" />
                            <path d="M12 16v-5" />
                            <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                            <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                        </svg>
                    </div>
                    {/* TikTok */}
                    <div>
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
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="w-full md:w-3/4 flex flex-wrap justify-around text-mine-shaft-100 gap-6">
                {footerLinks.map((section, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className="text-lg font-semibold mb-2 text-bright-sun-400 hover:transition duration-300 ease-out">
                            {section.title}
                        </div>
                        {section.links.map((link, i) => (
                            <div
                                key={i}
                                className="text-mine-shaft-300 text-sm mb-1 hover:text-bright-sun-400 cursor-pointer"
                            >
                                {link}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;
