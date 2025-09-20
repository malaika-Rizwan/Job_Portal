import { ActionIcon, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { card, skills, desc } from "../Data/JobDescData";

const JobDesc: React.FC<{ edit?: boolean }> = ({ edit }) => {
    return (
        <div className="w-2/3 mx-auto bg-mine-shaft-900 rounded-xl flex flex-col gap-8 shadow-md p-6 mt-6">
            {/* Top section */}
            <div className="flex justify-between items-start">
                {/* Left: Logo + Job info */}
                <div className="flex gap-3 items-center">
                    <div className="p-2 rounded-xl bg-mine-shaft-800">
                        <img className="h-14" src={`/icons/Google.png`} alt="google logo" />
                    </div>
                    <div>
                        <div className="font-semibold text-mine-shaft-100 text-lg">
                            Software Engineer
                        </div>
                        <div className="text-xs text-mine-shaft-300">
                            Google &#x2022; 48 Applications
                        </div>
                    </div>
                </div>

                {/* Right: Apply / Edit + Bookmark/Delete */}
                <div className="flex flex-col items-center gap-3">
                    <Link to="/apply-job">
                        <Button
                            variant="light"
                            className="text-bright-sun-400 border border-bright-sun-400 hover:bg-bright-sun-400/20"
                        >
                            {edit ? "Edit" : "Apply"}
                        </Button>
                    </Link>

                    {edit ? (
                        <Button
                            variant="outline"
                            color="red"
                            className="border-red-500 text-red-500 hover:bg-red-500 stroke={1.5}"
                        >
                            Delete
                        </Button>
                    ) : (
                        <button
                            aria-label="bookmark"
                            className="text-bright-sun-400 hover:text-bright-sun-500"
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M18 7v14l-6-4l-6 4v-14a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4z" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            <hr className="border-t border-mine-shaft-400/45 my-2" />

            {/* Info Cards */}
            <div className="grid grid-cols-4 gap-6 text-center">
                {card.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                        <ActionIcon
                            variant="filled"
                            size="lg"
                            radius="xl"
                            className="!h-10 !w-10 bg-bright-sun-500 text-mine-shaft-900"
                            aria-label={item.name}
                        >
                            <item.icon stroke={1.5} />
                        </ActionIcon>
                        <div className="text-sm text-mine-shaft-100">{item.name}</div>
                        <div className="font-semibold text-mine-shaft-100">{item.value}</div>
                    </div>
                ))}
            </div>

            <hr className="border-t border-mine-shaft-400/45 my-2" />

            {/* Skills */}
            <div>
                <h4 className="text-mine-shaft-100 font-bold text-lg mb-4">Skills</h4>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <hr className="border-t border-mine-shaft-400/45 my-2" />

            {/* Description */}
            <div
                className="prose prose-invert max-w-full text-mine-shaft-300 text-sm [&_h4]:text-mine-shaft-100 [&_h4]:font-bold [&_h4]:text-lg [&_h4]:mb-3 [&_h4]:mt-4 [&_ol]:list-decimal [&_ul]:list-disc [&_ol]:marker:text-bright-sun-400 [&_ul]:marker:text-bright-sun-400 [&_ol]:pl-6 [&_ul]:pl-6 [&_li]:mb-2"
                dangerouslySetInnerHTML={{ __html: desc }}
            />

            {/* Company Section */}
            <div className="mt-6">
                <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <div className="p-2 rounded-xl bg-mine-shaft-800">
                            <img className="h-8" src={`/icons/Google.png`} alt="google logo" />
                        </div>
                        <div>
                            <div className="font-semibold text-mine-shaft-100 text-lg">Google</div>
                            <div className="text-xs text-mine-shaft-300">10k+ Employees</div>
                        </div>
                    </div>

                    <Link to="/Company">
                        <Button
                            variant="light"
                            className="text-bright-sun-400 border border-bright-sun-400 hover:bg-bright-sun-400/20"
                        >
                            Company Page
                        </Button>
                    </Link>
                </div>

                <div className="prose prose-invert max-w-full text-mine-shaft-300 text-sm mt-5">
                    <p>
                        Here at UI HUT, we are a passionate, fun-loving, growing team. We
                        are looking for programmers who want to solve technical challenges
                        and incorporate new technologies into their skillset. You will be
                        engaged across the software development life cycle in a collaborative and agile environment.
                    </p>
                </div>

                <hr className="border-t border-mine-shaft-400/45 my-2" />
            </div>
        </div>
    );
};

export default JobDesc;
