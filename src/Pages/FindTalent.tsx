import { Divider } from "@mantine/core";
import SearchBarT from "../FindTalent/SearchBarT";
import TalentCard from "../FindTalent/TalentCard";
import { talents } from "../Data/TalentData"; // ✅ Import your data

const FindTalent = () => {
    return (
        <div className="bg-mine-shaft-950 font-['Poppins'] min-h-screen">
            <Divider size="xs" mx="md" />

            {/* Search Bar */}
            <div className="p-6">
                <SearchBarT />
            </div>

            <Divider size="xs" mx="md" />

            {/* Talent Cards */}
            <div className="p-6 flex flex-wrap gap-6 justify-center">
                {talents.map((talent, index) => (
                    <TalentCard key={index} {...talent} />
                ))}
            </div>
        </div>
    );
};

export default FindTalent;
