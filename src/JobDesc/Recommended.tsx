import { jobList } from "../Data/JobsData"; // 👈 use the actual export name
import JobCard from "../Findjobs/JobCard";

const Recommended = () => {
    return (
        <div className="w-1/3">
            <div className="text-xl font-semibold mb-6">Recommended Jobs</div>
            <div className="flex flex-col gap-5 justify-between">
                {jobList.slice(0, 6).map((job, index) => (
                    <JobCard key={index} {...job} className="w-full" />
                ))}
            </div>
        </div>
    );
};

export default Recommended;
