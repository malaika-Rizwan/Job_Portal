import { Button, Divider } from "@mantine/core";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { profile } from "../Data/TalentData";

const Profile = () => {
    return (
        <div className="w-2/3 bg-mine-shaft-900 rounded-2xl shadow-lg overflow-hidden">
            {/* Banner + Avatar */}
            <div className="relative">
                <img
                    className="rounded-t-2xl w-full h-40 object-cover"
                    src="/Profile/banner.jpg"
                    alt="Banner"
                />
                <img
                    className="rounded-full w-32 h-32 border-8 border-mine-shaft-950 absolute left-6 -bottom-16 object-cover"
                    src="/avatar2.png"
                    alt="Avatar"
                />
            </div>

            {/* Name + Role */}
            <div className="px-6 mt-20">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold text-mine-shaft-100">
                        {profile.name}
                    </h1>
                    <Button variant="light" color="yellow">
                        Message
                    </Button>
                </div>

                {/* Role + Company */}
                <div className="flex items-center gap-2 text-mine-shaft-300 mt-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-mine-shaft-300"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                        <path d="M12 12l0 .01" />
                        <path d="M3 13a20 20 0 0 0 18 0" />
                    </svg>
                    <span>
            {profile.role} • {profile.company}
          </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-sm text-mine-shaft-400 mt-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler-map-pin"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                    {profile.location}
                </div>
            </div>

            {/* About */}
            <div className="px-6 mt-6">
                <Divider size="xs" />
                <h2 className="text-xl font-semibold text-mine-shaft-100 mt-4 mb-2">
                    About
                </h2>
                <div className="text-sm text-mine-shaft-300 text-justify space-y-3">
                    {profile.about}
                </div>
            </div>

            {/* Skills */}
            <div className="px-6 mt-6">
                <Divider size="xs" />
                <h2 className="text-xl font-semibold text-mine-shaft-100 mt-4 mb-2">
                    Skills
                </h2>
                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {profile.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-sm"
                        >
              {skill}
            </span>
                    ))}
                </div>
            </div>

            {/* Experience */}
            <div className="px-6 mt-6 mb-6">
                <Divider size="xs" />
                <h2 className="text-xl font-semibold text-mine-shaft-100 mt-4 mb-2">
                    Experience
                </h2>
                <div className="flex flex-col gap-8">
                    {profile.experience.map((exp, index) => (
                        <ExpCard key={index} {...exp} />
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div className="px-6 mt-6 mb-6">
                <Divider size="xs" />
                <h2 className="text-xl font-semibold text-mine-shaft-100 mt-4 mb-2">
                    Certification
                </h2>
                <div className="flex flex-col gap-8">
                    {profile.certifications.map((certi, index) => (
                        <CertiCard key={index} {...certi} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
