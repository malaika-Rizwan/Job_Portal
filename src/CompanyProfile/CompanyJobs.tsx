import JobCard from "../Findjobs/JobCard";
import { jobList } from "../Data/JobsData";

const CompanyJobs = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {jobList.map((job, index) => (
                <JobCard key={index} {...job} />
            ))}
        </div>
    );
};

export default CompanyJobs;
