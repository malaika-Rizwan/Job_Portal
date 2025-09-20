import { useState } from "react";
import { Combobox, useCombobox } from "@mantine/core";

const opt = [
    "Relevance",
    "Most Recent",
    "Salary (Low to High)",
    "Salary (High to Low)",
];

const Sort = () => {
    const [selected, setSelected] = useState("");
    const combobox = useCombobox();

    return (
        <Combobox
            store={combobox}
            position="bottom-start"
            withArrow
            onOptionSubmit={(val) => {
                setSelected(val);
                combobox.closeDropdown();
            }}
        >
            {/* Trigger (button that opens dropdown) */}
            <Combobox.Target>
                <div
                    className="border border-bright-sun-400 cursor-pointer flex items-center gap-2 text-sm p-2 rounded w-fit"
                    onClick={() => combobox.toggleDropdown()}
                >
          <span className="text-mine-shaft-100">
            {selected || "Sort by..."}
          </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-bright-sun-400"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 8h4v4h-4z" />
                        <path d="M6 4v4" />
                        <path d="M6 12v8" />
                        <path d="M10 14h4v4h-4z" />
                        <path d="M12 4v10" />
                        <path d="M12 18v2" />
                        <path d="M16 5h4v4h-4z" />
                        <path d="M18 4v1" />
                        <path d="M18 9v11" />
                    </svg>
                </div>
            </Combobox.Target>

            {/* Dropdown (list of options) */}
            <Combobox.Dropdown>
                <Combobox.Options>
                    {opt.map((item) => (
                        <Combobox.Option value={item} key={item}>
                            {item}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};

export default Sort;
