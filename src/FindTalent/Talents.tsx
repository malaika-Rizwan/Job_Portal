import Sort from "../Findjobs/Sort";
import TalentCard from "./TalentCard";
import { talents } from "../Data/TalentData"; // adjust path if needed

const Talents = () => {
    return (
        <div className="px-5 py-5">
            <div className="flex justify-between mt-5">
                <div className="text-2xl font-semibold">Talents</div>
                <Sort />
            </div>

            {/* Talent cards grid */}
            <div className="flex mt-10 flex-wrap gap-5">
                {talents.map((talent, index) => (
                    <TalentCard key={index} {...talent} />
                ))}
            </div>
        </div>
    );
};

export default Talents;
