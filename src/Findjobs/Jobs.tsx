import { useState } from "react";
import JobCard from "./JobCard";
import Sort from "./Sort";
import { jobList } from "../Data/JobsData"; // ✅ Import directly

const Jobs = () => {
    const [jobs] = useState(jobList); // ✅ no fetch needed

    return (
        <div className="p-5">
            <div className="flex justify-between items-center mb-4">
                <div className="text-2xl font-semibold mt-7 flex-wrap gap-5">Recommended Jobs</div>
                <Sort />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {jobs.map((job, index) => (
                    <JobCard key={index} {...job} />
                ))}
            </div>
        </div>
    );
};

export default Jobs;
