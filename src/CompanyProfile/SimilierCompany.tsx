import { useState } from "react";
import { similar } from "../Data/Company";
import CompanyCard from "./Companycard";

const SimilarCompanies = () => {
    const [showAll, setShowAll] = useState(false);

    const displayedCompanies = showAll ? similar : similar.slice(0, 6);

    return (
        <div className="w-1/4">
            <div className="bg-mine-shaft-900 rounded-lg p-4">
                <div className="text-lg font-semibold mb-4 text-mine-shaft-100">
                    Similar Companies
                </div>

                <div className="flex flex-col gap-4">
                    {displayedCompanies.length > 0 ? (
                        displayedCompanies.map((company, index) => (
                            <CompanyCard key={index} {...company} />
                        ))
                    ) : (
                        <p className="text-gray-400">No similar companies found.</p>
                    )}
                </div>

                {similar.length > 6 && (
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-4 py-2 bg-bright-sun-400 text-black font-medium rounded-lg hover:bg-bright-sun-300 transition"
                        >
                            {showAll ? "Show Less" : "View All"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SimilarCompanies;
