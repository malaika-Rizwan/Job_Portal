import { Tabs } from "@mantine/core";
import Card from "../JobHistory/Card";
import { jobList } from "../Data/JobsData";

const JobHistory = () => {
    return (
        <div className="w-1.5/6 mt-5">
            <h1 className="text-3xl font-bold text-mine-shaft-100 mb-6">
                Job History
            </h1>

            <Tabs variant="outline" radius="lg" defaultValue="applied">
                <Tabs.List className='[&_button]:text-lg [&_button]:font-semibold mb-5 [&_button[data-active="true"]]:text-bright-sun-400'>
                    <Tabs.Tab value="applied">
                        <div className="flex items-center gap-2">
                            <span>Applied</span>
                        </div>
                    </Tabs.Tab>

                    <Tabs.Tab value="save">
                        <div className="flex items-center gap-2">
                            <span>Save</span>
                        </div>
                    </Tabs.Tab>

                    <Tabs.Tab value="offered">
                        <div className="flex items-center gap-2">
                            <span>Offered</span>
                        </div>
                    </Tabs.Tab>

                    <Tabs.Tab value="interviewing">
                        <div className="flex items-center gap-2">
                            <span>Interviewing</span>
                        </div>
                    </Tabs.Tab>
                </Tabs.List>

                {/* Applied */}
                <Tabs.Panel value="applied" pt="xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {jobList.map((job, index) => (
                            <Card key={index} {...job} applied />
                        ))}
                    </div>
                </Tabs.Panel>

                {/* Saved */}
                <Tabs.Panel value="save" pt="xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {jobList.map((job, index) => (
                            <Card key={index} {...job} saved />
                        ))}
                    </div>
                </Tabs.Panel>

                {/* Offered */}
                <Tabs.Panel value="offered" pt="xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {jobList.map((job, index) => (
                            <Card key={index} {...job} offered/>
                        ))}
                    </div>
                </Tabs.Panel>

                {/* Interviewing */}
                <Tabs.Panel value="interviewing" pt="xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {jobList.map((job, index) => (
                            <Card key={index} {...job} interviewing />
                        ))}
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>
    );
};

export default JobHistory;
