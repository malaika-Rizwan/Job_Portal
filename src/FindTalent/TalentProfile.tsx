import { Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile"; // ✅ fixed typo in path
import Recommend from "../TalentProfile/Recommend";

const TalentProfile = () => {
    return (
        <div className="bg-mine-shaft-950 font-['Poppins'] min-h-screen p-6">
            {/* Top Divider */}
            <Divider size="xs" />

            {/* Back Button */}
            <Link to="/find-talent" className="flex-1 inline-block my-4">
                <Button
                    leftSection={
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
                            className="icon icon-tabler icon-tabler-arrow-left"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12h14" />
                            <path d="M5 12l6 6" />
                            <path d="M5 12l6 -6" />
                        </svg>
                    }
                    variant="light"
                    color="yellow"
                >
                    Back
                </Button>
            </Link>



            {/* Profile Section */}
            <div className="flex gap-5 mt-6">
                <Profile{...Profile} />
                <Recommend/>
            </div>
        </div>
    );
};

export default TalentProfile;
