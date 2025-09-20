import { Divider} from "@mantine/core";
import JobHistory from "../JobHistory/JobHistory";
const JobHistoryPage = () => {
    return (
        <div className="bg-mine-shaft-950 font-['Poppins'] min-h-screen p-6">
            {/* Top Divider */}
            <Divider size="xs" />
            <div className=" gap-5 my-5"></div>
            <JobHistory/>
        </div>  // ✅ this closes the root <div>
    );
};

export default JobHistoryPage;


