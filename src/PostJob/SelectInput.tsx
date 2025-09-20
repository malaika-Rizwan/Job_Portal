import { useState } from "react";
import { Input, InputBase, Combobox, useCombobox } from "@mantine/core";

const SelectInput = ({ label, placeholder, options }: any) => {
    const [value, setValue] = useState<string | null>(null);

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    return (
        <Combobox
            store={combobox}
            onOptionSubmit={(val) => {
                setValue(val);
                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>
                <InputBase
                    label={label}
                    withAsterisk
                    component="button"
                    type="button"
                    pointer
                    classNames={{
                        input:
                            "transition-colors duration-200 border rounded-md hover:border-bright-sun-400 cursor-pointer",
                    }}
                    rightSection={<Combobox.Chevron />}
                    rightSectionPointerEvents="none"
                    onClick={() => combobox.toggleDropdown()}
                >
                    {value || <Input.Placeholder>{placeholder}</Input.Placeholder>}
                </InputBase>
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options>
                    {options.map((item: string) => (
                        <Combobox.Option key={item} value={item}>
                            {item}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};

export default SelectInput;
