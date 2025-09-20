import JobDesc from "../JobDesc/JobDesc";
import Recommended from "../JobDesc/Recommended";
import { Divider, Button } from "@mantine/core";
import { Link } from "react-router-dom";

const JobDesPage = () => {
    return (
        <div className="bg-mine-shaft-950 font-['Poppins'] min-h-screen p-6">
            {/* Top Divider */}
            <Divider size="xs" />

            {/* Back Button */}
            <Link to="/find-jobs" className="flex-1 inline-block my-4">
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

            <div className="flex gap-5 justify-around">


                    <JobDesc />


                    <Recommended />


            </div>
        </div>  // ✅ this closes the root <div>
    );
};

export default JobDesPage;
