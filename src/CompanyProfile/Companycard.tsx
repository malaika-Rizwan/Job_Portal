import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

interface CompanyCardProps {
    name: string;
    employees: number;
}

const CompanyCard = ({ name, employees }: CompanyCardProps) => {
    return (
        <div className="flex justify-between items-start bg-mine-shaft-900 p-4 rounded-lg shadow-md hover:shadow-bright-sun-400/50 transition">
            {/* Left: Logo + Info */}
            <div className="flex gap-2 items-center">
                <div className="p-2 rounded-md bg-mine-shaft-800">
                    <img
                        className="h-7 w-7 object-contain"
                        src={`/Icons/${name}.png`}
                        alt={name}
                    />
                </div>
                <div>
                    <div className="font-semibold text-mine-shaft-100">{name}</div>
                    <div className="text-xs text-mine-shaft-300">{employees} Employees</div>
                </div>
            </div>

            {/* Right: External link icon */}
            <ActionIcon
                variant="subtle"
                color="bright-sun"
                aria-label="Open company"
            >
                <IconExternalLink size={20} stroke={1.5} />
            </ActionIcon>
        </div>
    );
};

export default CompanyCard;
