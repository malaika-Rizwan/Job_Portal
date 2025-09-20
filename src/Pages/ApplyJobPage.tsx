import {Button} from "@mantine/core";
import {Link} from "react-router-dom";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";

const ApplyJobPage = () => {
    return    <div className="bg-mine-shaft-950 font-['Poppins'] min-h-screen p-6">
        <Link to="/Jobs" className="flex-1 inline-block my-4">
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
        <ApplyJobComp/>

    </div>
};

export default ApplyJobPage;
