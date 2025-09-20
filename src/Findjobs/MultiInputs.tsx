import React, { useMemo, useState } from "react";
import { MultiSelect } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

type RawOption =
    | string
    | { value?: string; label: string; disabled?: boolean };

type MultiInputProps = {
    placeholder?: string;
    label?: string;
    data?: RawOption[];
    icon?: React.ReactNode;
};

export default function MultiInput({
                                       placeholder = "Select...",
                                       label,
                                       data = [],
                                       icon,
                                   }: MultiInputProps) {
    const [selected, setSelected] = useState<string[]>([]); // ✅ keep track of selected values

    // normalize incoming data
    const normalized = useMemo(
        () =>
            (data || []).map((d, i) => {
                if (typeof d === "string") {
                    return {
                        value: `${d.toLowerCase().replace(/\s+/g, "-")}-${i}`,
                        label: d,
                    };
                }
                return {
                    value: d.value ?? `${d.label.toLowerCase().replace(/\s+/g, "-")}-${i}`,
                    label: d.label,
                    disabled: d.disabled,
                };
            }),
        [data]
    );

    const optionsFilter = ({ options, search }: { options: any[]; search: string }) => {
        const splitted = (search || "").toLowerCase().trim().split(/\s+/).filter(Boolean);
        if (!splitted.length) return options;
        return (options || []).filter((option: any) => {
            const words = String(option.label || "").toLowerCase().trim().split(/\s+/);
            return splitted.every((s) => words.some((w: string) => w.includes(s)));
        });
    };

    const renderOption = ({ option, checked }: { option: any; checked: boolean }) => (
        <div
            className={`flex items-center gap-2 px-2 py-1 ${option.disabled ? "opacity-50" : ""}`}
        >
            <input
                type="checkbox"
                checked={checked} // ✅ use Mantine’s checked directly
                readOnly
                disabled={option.disabled}
                className="w-4 h-4 rounded text-bright-sun-400"
                style={{ accentColor: "currentColor" }}
            />
            <span>{option.label}</span>
        </div>
    );

    const leftSection = (
        <div className="flex items-center">
            <div className="bg-mine-shaft-900 text-bright-sun-400 rounded-full mr-1 p-1">
                {icon ?? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icon-tabler-search"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                )}
            </div>
        </div>
    );

    return (
        <MultiSelect
            label={label}
            placeholder={placeholder}
            searchable
            variant="unstyled"
            data={normalized}
            value={selected} // ✅ start empty (all unchecked)
            onChange={setSelected}
            filter={optionsFilter as any}
            withCheckIcon={false}
            renderOption={renderOption as any}
            leftSection={leftSection}
            leftSectionWidth={40}
            rightSection={<IconChevronDown size={18} className="text-bright-sun-400" />}
            rightSectionWidth={30}
            comboboxProps={{ withinPortal: true }}
        />
    );
}
