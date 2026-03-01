import React, { useState } from "react";
import {
    Menu,
    Group,
    Avatar,
    Switch,
    useMantineTheme,
    useMantineColorScheme,
} from "@mantine/core";
import {
    IconMessageCircle,
    IconPhoto,
    IconSun,
    IconMoonStars,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

function ProfileMenu() {
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    // ✅ hooks at the top, not inside return
    const [opened, setOpened] = useState(false);

    return (
        <Menu shadow="md" width={220} opened={opened} onChange={setOpened}>
            <Menu.Target>
                <div className="flex cursor-pointer items-center gap-3">
                    <div>Malaika</div>
                    <Avatar src="/avatar2.png" alt="it's me" />
                </div>
            </Menu.Target>

            <Menu.Dropdown>
                {/* Profile */}
                <Menu.Item component={Link} to="/profile">
                    <Group gap="sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                        <span>Profile</span>
                    </Group>
                </Menu.Item>

                {/* Messages */}
                <Menu.Item>
                    <Group gap="sm">
                        <IconMessageCircle size={16} />
                        <span>Messages</span>
                    </Group>
                </Menu.Item>

                {/* Resume */}
                <Menu.Item>
                    <Group gap="sm">
                        <IconPhoto size={16} />
                        <span>Resume</span>
                    </Group>
                </Menu.Item>

                {/* Dark mode toggle */}
                <Menu.Item>
                    <Group justify="space-between" w="100%">
                        <Group gap="sm">
                            <IconMoonStars size={16} />
                            <span>Dark Mode</span>
                        </Group>
                        <Switch
                            size="md"
                            checked={colorScheme === "dark"}
                            onChange={() => toggleColorScheme()}
                            onLabel={
                                <IconSun
                                    size={14}
                                    stroke={2.5}
                                    color={theme.colors.yellow[4]}
                                />
                            }
                            offLabel={
                                <IconMoonStars
                                    size={14}
                                    stroke={2.5}
                                    color={theme.colors.blue[6]}
                                />
                            }
                        />
                    </Group>
                </Menu.Item>

                <Menu.Divider />

                {/* Logout */}
                <Menu.Item color="red">
                    <Group gap="sm">
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-logout-2"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
                            <path d="M15 12h-12l3 -3" />
                            <path d="M6 15l-3 -3" />
                        </svg>
                        <span>Logout</span>
                    </Group>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

export default ProfileMenu;
