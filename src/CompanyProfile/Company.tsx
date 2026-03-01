import { Avatar, Tabs } from "@mantine/core";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees"; // make sure this exists

const Company = () => {
    return (
        <div className="w-3/4">
            {/* Banner + Avatar */}
            <div className="relative">
                <img
                    className="rounded-t-2xl w-full h-40 object-cover"
                    src="/Profile/banner.jpg"
                    alt="Banner"
                />
                <img
                    className="rounded-3xl bg-mine-shaft-900 p-2 w-32 h-32 border-8 border-mine-shaft-950 absolute left-6 -bottom-16 object-cover"
                    src="/Google.png"
                    alt="Avatar"
                />
            </div>

            {/* Name + Role */}
            <div className="px-6 mt-20">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold text-mine-shaft-100">Google</h1>

                    {/* Avatar Group */}
                    <Avatar.Group spacing="sm">
                        <Avatar src="/avatar2.png" radius="xl" />
                        <Avatar src="/avatar3.png" radius="xl" />
                        <Avatar src="/avatar4.png" radius="xl" />
                        <Avatar radius="xl">+10k</Avatar>
                    </Avatar.Group>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-mine-shaft-300 mt-2">
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
                        className="icon icon-tabler icon-tabler-map-pin"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                    <span>Lahore</span>
                </div>

                <hr className="my-4 border-mine-shaft-800" />

                {/* Tabs Section */}
                <Tabs variant="outline" radius="lg" defaultValue="about">
                    <Tabs.List
                        className='[&_button]:text-lg [&_button]:font-semibold mb-5 [&_button[data-active="true"]]:text-bright-sun-400'
                    >
                        <Tabs.Tab value="about">
                            <div className="flex items-center gap-2">
                                <span>About</span>
                            </div>
                        </Tabs.Tab>

                        <Tabs.Tab value="jobs">
                            <div className="flex items-center gap-2">
                                <span>Jobs</span>
                            </div>
                        </Tabs.Tab>

                        <Tabs.Tab value="employees">
                            <div className="flex items-center gap-2">
                                <span>Employees</span>
                            </div>
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="about" pt="xs">
                        <AboutComp />
                    </Tabs.Panel>

                    <Tabs.Panel value="jobs" pt="xs">
                       <CompanyJobs/>
                    </Tabs.Panel>

                    <Tabs.Panel value="employees" pt="xs">
                       <CompanyEmployees/>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    );
};

export default Company;
