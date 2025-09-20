import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";


const PostedJobDesc = () => {
    return (
        <div className="w-3/4 p-5 mt-5">
            {/* Title + Badge */}
            <h1 className="text-3xl font-bold text-mine-shaft-100 flex items-center gap-2">
                Software Engineer
                <Badge size="sm" color="yellow" className="ml-2">
                    Badge
                </Badge>
            </h1>
            <div className="font-medium text-mine-shaft-300 mb-5"> Lahore</div>

            {/* Tabs */}
            <Tabs
                variant="outline"
                radius="lg"
                defaultValue="overview"
                classNames={{
                    list: "mb-5",
                    tab: "text-lg font-semibold data-[active=true]:text-bright-sun-400",
                }}
            >
                <Tabs.List>
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                    <Tabs.Tab value="invited">Invited</Tabs.Tab>
                </Tabs.List>

                {/* Overview */}
                <Tabs.Panel value="overview" pt="xs" className="[&>div]:w-full">
                    <JobDesc edit />
                </Tabs.Panel>

                {/* Applicants */}
                <Tabs.Panel value="applicants" pt="xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                        {talents.map(
                            (talent, index) =>
                                index < 6 && <TalentCard key={index} {...talent} posted />
                        )}
                    </div>
                </Tabs.Panel>

                {/* Invited */}
                <Tabs.Panel value="invited" pt="xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                        {talents.map(
                            (talent, index) =>
                                index < 6 && <TalentCard key={index} {...talent} invited />
                        )}
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>
    );
};

export default PostedJobDesc;
