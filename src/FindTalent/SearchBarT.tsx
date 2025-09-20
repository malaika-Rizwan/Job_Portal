import MultiInput from "../Findjobs/MultiInputs";
import { Slider } from "@mantine/core";
import { searchFields } from "../Data/TalentData"; // adjust path if needed

const SearchBarT = () => {
    return (
        <div className="flex flex-wrap items-end gap-5 w-full">
            {/* New Find Talent input */}
            <div className="flex-1 min-w-[200px]">
                <MultiInput
                    placeholder="Find Talent"
                    icon={
                        <span className="text-bright-sun-400">
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
                  className="icon icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </span>
                    }
                    data={[]} // no options for now
                />
            </div>

            {/* Other Search Fields */}
            {searchFields.map((field, index) => (
                <div key={index} className="flex-1 min-w-[200px]">
                    <MultiInput
                        placeholder={field.title}
                        icon={<field.icon size={20} className="text-bright-sun-400" />}
                        data={field.options}
                    />
                </div>
            ))}

            {/* Salary Range Slider */}
            <div className="flex-1 min-w-[220px]">
                <label className="block text-sm font-medium text-mine-shaft-100 mb-2">
                    Salary Range
                </label>
                <Slider
                    color="yellow"
                    min={10000}
                    max={500000}
                    step={5000}
                    defaultValue={100000}
                    label={(val) => `Rs${(val / 1000).toFixed(0)}k`}
                    marks={[
                        { value: 10000, label: "10k" },
                        { value: 100000, label: "100k" },
                        { value: 250000, label: "250k" },
                        { value: 500000, label: "500k" },
                    ]}
                />
            </div>
        </div>
    );
};

export default SearchBarT;
