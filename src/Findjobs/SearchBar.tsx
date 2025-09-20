import MultiInput from "./MultiInputs";
import { Slider } from "@mantine/core";
import Findjobs from "../Pages/Findjobs";

const SearchBar = () => {
    const dropdownData = [
        {
            placeholder: "Job Title",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-bright-sun-400"
                >
                    <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
                </svg>
            ),
            data: [
                "Digital Marketing",
                "Web Developer",
                "Arts & Design",
                "UI-UX Designer",
                "Content Writing",
                "Data Entry",
                "Customer Support",
                "Sales",
                "Finance",
                "Human Resource",
            ],
        },
        {
            placeholder: "Location",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-bright-sun-400"
                >
                    <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
                </svg>
            ),
            data: [
                "Karachi",
                "Lahore",
                "Islamabad",
                "Rawalpindi",
                "Faisalabad",
                "Multan",
                "Peshawar",
                "Quetta",
                "Sialkot",
                "Gujranwala",
                "Hyderabad",
                "Sukkur",
                "Mardan",
                "Swat",
                "Abbottabad",
                "Nowshera",
            ],
        },

        {
            placeholder: "Experience",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-bright-sun-400"
                >
                    <path d="M12 20h9"/>
                    <path d="M12 4h9"/>
                    <path d="M4 9h16"/>
                    <path d="M4 15h16"/>
                    <path d="M10 4v16"/>
                </svg>
            ),
            data: [
                "Fresher",
                "Less than 1 year",
                "1 - 2 years",
                "2 - 3 years",
                "3 - 5 years",
                "5 - 7 years",
                "7 - 10 years",
                "10+ years",
            ],
        },

        {
            placeholder: "Job Type",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-bright-sun-400"
                >
                    <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                    <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                    <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                    <path d="M14 7l6 0" />
                    <path d="M17 4l0 6" />
                </svg>
            ),
            data: ["Full-time", "Part-time", "Remote", "Contract", "Internship"],
        },
    ];

    return (
        <div className="flex gap-4 w-full items-center">
            {dropdownData.map((item, index) => (
                <div key={index} className="w-1/5">
                    <MultiInput {...item} />
                </div>
            ))}

            {/* Salary Range Slider */}
            <div className="w-1/5">
                <label className="block text-sm font-medium text-mine-shaft-100 mb-2">
                    Salary Range
                </label>
                <Slider
                    color="yellow"
                    min={10000}
                    max={500000}
                    step={5000}
                    defaultValue={100000}
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

export default SearchBar;
