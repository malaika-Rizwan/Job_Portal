import { activeJobs } from "../Data/PostedJob";

const PostedJobCard = () => {
    return (
        <div className="flex flex-col gap-5 mt-5">
            {activeJobs.map((job, index) => (
                <div
                    key={index}
                    className="bg-mine-shaft-900 rounded-xl p-3 border-l-2 border-bright-sun-400"
                >
                    <div className="text-sm text-mine-shaft-100 font-semibold">{job.jobTitle}</div>
                    <div className="text-xs text-mine-shaft-300 font-medium">{job.location}</div>
                    <div className="text-xs text-mine-shaft-300">{job.posted}</div>
                </div>
            ))}
        </div>
    );
};

export default PostedJobCard;
