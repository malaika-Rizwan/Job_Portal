import { Avatar, Progress } from "@mantine/core";
import { work } from "./Data";

const Working = () => {
    return (
        <div className="mt-20 pb-5 relative">
            {/* Heading */}
            <div className="text-4xl mb-3 text-center font-semibold text-mine-shaft-100">
                How it <span className="text-bright-sun-400">Works</span>
            </div>

            {/* Subtitle */}
            <div className="text-lg mb-10 text-mine-shaft-300 text-center mx-auto w-1/2">
                Effortlessly navigate through the process and land your dream job.
            </div>

            {/* Content */}
            <div className="flex px-16 justify-between items-center">
                {/* Left Image */}
                <div className="w-[30rem]">
                    <img src="/working/Girl.png" alt="girl" />
                </div>

                {/* Floating Profile Card */}
                <div className="absolute top-[10rem] left-[25rem] w-40 flex flex-col items-center gap-2 border border-bright-sun-400 rounded-xl py-3 px-2 backdrop-blur-md shadow-lg bg-white/10">
                    <Avatar className="!h-16 !w-16" src="avatar2.png" alt="it's me" />
                    <div className="text-sm font-semibold text-mine-shaft-200 text-center">
                        Complete your profile
                    </div>
                    <Progress value={70} color="yellow" size="sm" className="w-full" />
                    <div className="text-xs text-mine-shaft-300">70% completed</div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col gap-10">
                    {work.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                            {/* Icon bubble */}
                            <div className="p-2 bg-bright-sun-300 rounded-full">
                                <img
                                    className="h-12 w-12"
                                    src={`/working/${item.name}.png`}
                                    alt={item.name}
                                />
                            </div>

                            {/* Text */}
                            <div>
                                <div className="text-mine-shaft-200 text-xl font-semibold">
                                    {item.name}
                                </div>
                                <div className="text-mine-shaft-300">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Working;
