import {companyData} from "../Data/Company";

const AboutComp = () => {
    const company: { [key: string]: any } = companyData;

    return (
        <div className="flex flex-col gap-5">
            {Object.keys(company).map((key, index) =>
                    key !== "Name" && (
                        <div key={index} className="mb-4">
                            {/* Key heading */}
                            <div className="font-semibold text-xl mb-3">{key}</div>

                            {/* Specialties list */}
                            {key === "Specialties" ? (
                                <div className="text-sm text-mine-shaft-300 text-justify flex flex-wrap gap-2">
                                    {company[key].map((item: string, idx: number) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-mine-shaft-800 rounded-md text-mine-shaft-100"
                                        >
                    • {item}
                  </span>
                                    ))}
                                </div>
                            ) : key === "Website" ? (
                                // Website link
                                <a
                                    href={company[key]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-bright-sun-400 underline"
                                >
                                    {company[key]}
                                </a>
                            ) : (
                                // Default case
                                <div className="text-sm text-mine-shaft-300 text-justify">
                                    {company[key]}
                                </div>
                            )}
                        </div>
                    )
            )}
        </div>
    );
};

export default AboutComp;
