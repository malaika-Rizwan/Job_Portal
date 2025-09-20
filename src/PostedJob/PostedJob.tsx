import { Tabs } from "@mantine/core";
import PostedJobCard from "./PostedJobCard";

const PostedJob = () => {
    return (
        <div className="w-1.5/6 mt-5">
            <h1 className="text-3xl font-bold text-mine-shaft-100 mb-6">Jobs</h1>

            <Tabs variant="pills" defaultValue="active">
                {/* Tabs list as flex row */}
                <Tabs.List className="flex flex-row gap-4 mb-4 [&_[data-active=false]]:bg-mine-shaft-900 font-medium">
                    <Tabs.Tab value="active">Active [10]</Tabs.Tab>
                    <Tabs.Tab value="draft">Drafts [3]</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="active" pt="xs">
                    <PostedJobCard />
                </Tabs.Panel>

                <Tabs.Panel value="draft" pt="xs">
                    Drafts content here
                </Tabs.Panel>
            </Tabs>
        </div>
    );
};

export default PostedJob;
