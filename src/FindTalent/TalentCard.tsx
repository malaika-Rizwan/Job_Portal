// TalentCard.tsx
import { Divider, Button, Modal, Card, Text } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { IconCalendarMonth, IconClock } from "@tabler/icons-react";
import { useState } from "react";

interface TalentCardProps {
    invited?: boolean;
    posted?: boolean;
    name: string;
    role: string;
    company: string;
    topSkills: string[];
    about: string;
    expectedCtc: string;
    location: string;
    image: string;
}

const TalentCard = (props: TalentCardProps) => {
    const [opened, { open, close }] = useDisclosure(false);

    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState<string | null>(null);

    const handleDateChange = (val: any) => {
        if (!val) return setDate(null);
        if (val instanceof Date) return setDate(val);
        if (typeof val === "string") {
            const parsed = new Date(val);
            return setDate(isNaN(parsed.getTime()) ? null : parsed);
        }
        setDate(null);
    };

    const handleTimeChange = (val: any) => {
        if (!val) return setTime(null);
        if (typeof val === "object" && "currentTarget" in val) {
            setTime(val.currentTarget?.value ?? null);
            return;
        }
        setTime(String(val));
    };

    const handleConfirm = () => {
        if (!date || !time) {
            alert("Please select both date and time.");
            return;
        }

        const [hoursRaw, minutesRaw] = time.split(":").map(Number);
        const finalDate = new Date(date);
        finalDate.setHours(isNaN(hoursRaw) ? 0 : hoursRaw);
        finalDate.setMinutes(isNaN(minutesRaw) ? 0 : minutesRaw);
        finalDate.setSeconds(0);
        finalDate.setMilliseconds(0);

        console.log("Scheduled Meeting:", finalDate.toISOString());
        close();
    };

    return (
        <div
            className="bg-mine-shaft-900 rounded-xl flex flex-col gap-3 shadow-md
            w-[22rem] md:w-[24rem] p-6
            border border-transparent hover:border-bright-sun-400
            transition duration-300"
        >
            {/* Top section */}
            <div className="flex justify-between items-start">
                <div className="flex gap-3 items-center">
                    <div className="p-2 rounded-full bg-mine-shaft-800">
                        <img
                            className="h-12 w-12 rounded-full object-cover"
                            src={`/${props.image}.png`}
                            alt={props.name}
                        />
                    </div>
                    <div>
                        <div className="font-semibold text-lg text-mine-shaft-100">
                            {props.name}
                        </div>
                        <div className="text-sm text-mine-shaft-300">
                            {props.role} • {props.company}
                        </div>
                    </div>
                </div>

                {/* Heart icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler-heart text-bright-sun-400 cursor-pointer"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
                {props.topSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="py-1 px-3 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-sm"
                    >
                        {skill}
                    </div>
                ))}
            </div>

            {/* About */}
            <p className="text-sm text-mine-shaft-300 text-justify line-clamp-4">
                {props.about}
            </p>

            {/* Divider */}
            <Divider size="xs" color="mine-shaft-800" />

            {/* Location & CTC */}
            {!props.invited && (
                <div className="flex justify-between items-center">
                    <div className="font-semibold text-mine-shaft-200">{props.expectedCtc}</div>
                    <div className="flex gap-1 text-sm items-center text-mine-shaft-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler-map-pin"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        {props.location}
                    </div>
                </div>
            )}

            {/* Divider */}
            <Divider size="xs" color="mine-shaft-800" />

            {/* Bottom Buttons */}
            <div className="flex gap-3">
                {!props.invited ? (
                    <>
                        <Link to="/talent-profile" className="flex-1">
                            <Button fullWidth variant="filled" color="yellow">
                                View Profile
                            </Button>
                        </Link>
                        {props.posted && (
                            <Button
                                onClick={open}
                                rightSection={<IconCalendarMonth size={18} />}
                                fullWidth
                                variant="light"
                                color="yellow"
                            >
                                Schedule
                            </Button>
                        )}
                    </>
                ) : (
                    <>
                        <Button fullWidth variant="filled" color="green">
                            Accept
                        </Button>
                        <Button fullWidth variant="outline" color="red">
                            Reject
                        </Button>
                    </>
                )}
            </div>

            {/* Schedule Modal */}
            <Modal opened={opened} onClose={close} title="Schedule meeting" centered>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Text className="mb-3 font-medium">Set date and time for meeting</Text>
                    <DateInput
                        value={date}
                        onChange={handleDateChange}
                        label="Date"
                        placeholder="Pick date"
                        popoverProps={{ styles: { dropdown: { width: 220 } } }}
                    />
                    <TimeInput
                        value={time ?? undefined}
                        onChange={handleTimeChange}
                        label="Time"
                        placeholder="Pick time"
                        mt="md"
                        leftSection={<IconClock size={16} />}
                    />
                    <Button fullWidth mt="lg" color="yellow" onClick={handleConfirm}>
                        Confirm
                    </Button>
                </Card>
            </Modal>
        </div>
    );
};

export default TalentCard;
