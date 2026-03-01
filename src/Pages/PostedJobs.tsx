import { Divider } from "@mantine/core";
import PostedJob from "../PostedJob/PostedJob";   // Tabs + Job Cards
import PostedJobDesc from "../PostedJob/PostedJobDesc";

const PostedJobPage = () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['Poppins'] p-4">
            {/* Top Divider */}
            <Divider size="xs" mx="md" />

            {/* Back Button (optional) */}

            {/* Content */}
            <div className="flex gap-5 justify-between">
                {/* Left side: job list */}
                <PostedJob />

                {/* Right side: job description */}
                <PostedJobDesc />
            </div>
        </div>
    );
};

export default PostedJobPage;
