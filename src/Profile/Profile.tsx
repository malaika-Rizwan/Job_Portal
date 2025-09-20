import { useState } from "react";
import {
    Button,
    TextInput as Input,
    Textarea,
    Divider as Separator,
} from "@mantine/core";
import {
    IconPencil as PencilIcon,
    IconCheck as CheckIcon,
    IconPlus as PlusIcon,
    IconBriefcase as BriefcaseIcon,
    IconMapPin as MapPinIcon,
} from "@tabler/icons-react";

import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { profile as profileData } from "../Data/TalentData";

const Profile = () => {
    const [userProfile, setUserProfile] = useState(profileData);
    const [banner, setBanner] = useState("/Profile/banner.jpg");
    const [avatar, setAvatar] = useState("/avatar2.png");

    const [editing, setEditing] = useState({
        info: false,
        about: false,
        skills: false,
    });

    const toggleEdit = (section: keyof typeof editing) => {
        setEditing((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setBanner(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setAvatar(URL.createObjectURL(e.target.files[0]));
        }
    };

    // Experience handlers
    const handleExpUpdate = (id: number, updatedExp: any) => {
        setUserProfile((prev) => ({
            ...prev,
            experience: prev.experience.map((exp) =>
                exp.id === id ? { ...exp, ...updatedExp } : exp
            ),
        }));
    };

    const handleExpDelete = (id: number) => {
        setUserProfile((prev) => ({
            ...prev,
            experience: prev.experience.filter((exp) => exp.id !== id),
        }));
    };

    const handleAddExperience = () => {
        const newExp = {
            id: Date.now(),
            title: "New Position",
            company: "Company Name",
            location: "City, Country",
            startDate: "Month Year",
            endDate: "Present",
            description: "Add your job description here...",
        };
        setUserProfile((prev) => ({
            ...prev,
            experience: [...prev.experience, newExp],
        }));
    };

    // Certification handlers
    const handleCertUpdate = (id: number, updatedCert: any) => {
        setUserProfile((prev) => ({
            ...prev,
            certifications: prev.certifications.map((cert) =>
                cert.id === id ? { ...cert, ...updatedCert } : cert
            ),
        }));
    };

    const handleCertDelete = (id: number) => {
        setUserProfile((prev) => ({
            ...prev,
            certifications: prev.certifications.filter((cert) => cert.id !== id),
        }));
    };

    const handleAddCertification = () => {
        const newCert = {
            id: Date.now(),
            name: "New Certification",
            issuer: "Issuing Organization",
            issueDate: "Month Year",
            certificateId: "CERT123",
        };
        setUserProfile((prev) => ({
            ...prev,
            certifications: [...prev.certifications, newCert],
        }));
    };

    return (
        <div className="w-4/5 mx-auto bg-card rounded-2xl shadow-lg overflow-hidden border border-bright-sun-400">
            {/* Banner + Avatar */}
            <div className="relative">
                <img
                    className="rounded-t-2xl w-full h-40 object-cover"
                    src={banner}
                    alt="Banner"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                    }}
                />
                {editing.info && (
                    <input
                        type="file"
                        accept="image/*"
                        className="absolute top-2 right-2 text-xs bg-background rounded p-1 border border-bright-sun-400"
                        onChange={handleBannerChange}
                    />
                )}
                <div className="absolute left-6 -bottom-16">
                    <img
                        className="rounded-full w-32 h-32 border-8 border-bright-sun-400 object-cover"
                        src={avatar}
                        alt="Avatar"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder.svg";
                        }}
                    />
                    {editing.info && (
                        <input
                            type="file"
                            accept="image/*"
                            className="mt-2 text-xs bg-background rounded p-1 border border-bright-sun-400"
                            onChange={handleAvatarChange}
                        />
                    )}
                </div>
            </div>

            {/* Name + Job Info */}
            <div className="px-6 mt-20 flex justify-between items-start">
                <div className="flex-1">
                    {editing.info ? (
                        <Input
                            type="text"
                            value={userProfile.name}
                            onChange={(e) =>
                                setUserProfile({ ...userProfile, name: e.currentTarget.value })
                            }
                            className="text-2xl font-semibold mb-2 border border-bright-sun-400"
                        />
                    ) : (
                        <h1 className="text-2xl font-semibold text-foreground">
                            {userProfile.name}
                        </h1>
                    )}

                    <div className="flex items-center gap-2 text-muted-foreground mt-2">
                        <BriefcaseIcon size={18} className="text-bright-sun-400" />
                        {editing.info ? (
                            <div className="flex gap-2 flex-1">
                                <Input
                                    type="text"
                                    value={userProfile.role}
                                    onChange={(e) =>
                                        setUserProfile({ ...userProfile, role: e.currentTarget.value })
                                    }
                                    className="text-sm border border-bright-sun-400"
                                    placeholder="Role"
                                />
                                <Input
                                    type="text"
                                    value={userProfile.company}
                                    onChange={(e) =>
                                        setUserProfile({
                                            ...userProfile,
                                            company: e.currentTarget.value,
                                        })
                                    }
                                    className="text-sm border border-bright-sun-400"
                                    placeholder="Company"
                                />
                            </div>
                        ) : (
                            <span>
                                {userProfile.role} · {userProfile.company}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <MapPinIcon size={18} className="text-bright-sun-400" />
                        {editing.info ? (
                            <Input
                                type="text"
                                value={userProfile.location}
                                onChange={(e) =>
                                    setUserProfile({
                                        ...userProfile,
                                        location: e.currentTarget.value,
                                    })
                                }
                                className="text-sm border border-bright-sun-400"
                                placeholder="Location"
                            />
                        ) : (
                            <span>{userProfile.location}</span>
                        )}
                    </div>
                </div>

                <Button
                    onClick={() => toggleEdit("info")}
                    variant="outline"
                    size="sm"
                    className="border-bright-sun-400 text-bright-sun-400 hover:bg-bright-sun-400 hover:text-black"
                >
                    {editing.info ? (
                        <CheckIcon className="h-4 w-4 text-bright-sun-400" />
                    ) : (
                        <PencilIcon className="h-4 w-4 text-bright-sun-400" />
                    )}
                </Button>
            </div>

            {/* About */}
            <div className="px-6 mt-6">
                <Separator className="border-t border-bright-sun-400" />
                <div className="flex justify-between items-center mt-4 mb-2">
                    <h2 className="text-xl font-semibold text-foreground">About</h2>
                    <Button
                        onClick={() => toggleEdit("about")}
                        variant="outline"
                        size="sm"
                        className="border-bright-sun-400 text-bright-sun-400 hover:bg-bright-sun-400 hover:text-black"
                    >
                        {editing.about ? (
                            <CheckIcon className="h-4 w-4 text-bright-sun-400" />
                        ) : (
                            <PencilIcon className="h-4 w-4 text-bright-sun-400" />
                        )}
                    </Button>
                </div>
                {editing.about ? (
                    <Textarea
                        value={userProfile.about}
                        onChange={(e) =>
                            setUserProfile({ ...userProfile, about: e.currentTarget.value })
                        }
                        className="w-full max-h-40 border border-bright-sun-400"
                        rows={6}
                    />
                ) : (
                    <div className="text-sm text-muted-foreground text-justify max-h-40 overflow-y-auto">
                        {userProfile.about}
                    </div>
                )}
            </div>

            {/* Skills */}
            <div className="px-6 mt-6">
                <Separator className="border-t border-bright-sun-400" />
                <div className="flex justify-between items-center mt-4 mb-2">
                    <h2 className="text-xl font-semibold text-foreground">Skills</h2>
                    <Button
                        onClick={() => toggleEdit("skills")}
                        variant="outline"
                        size="sm"
                        className="border-bright-sun-400 text-bright-sun-400 hover:bg-bright-sun-400 hover:text-black"
                    >
                        {editing.skills ? (
                            <CheckIcon className="h-4 w-4 text-bright-sun-400" />
                        ) : (
                            <PencilIcon className="h-4 w-4 text-bright-sun-400" />
                        )}
                    </Button>
                </div>
                {editing.skills ? (
                    <Textarea
                        value={userProfile.skills.join(", ")}
                        onChange={(e) =>
                            setUserProfile({
                                ...userProfile,
                                skills: e.currentTarget.value.split(",").map((s) => s.trim()),
                            })
                        }
                        className="w-full border border-bright-sun-400"
                        placeholder="Enter skills separated by commas"
                    />
                ) : (
                    <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                        {userProfile.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm border border-bright-sun-400"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Experience */}
            <div className="px-6 mt-6">
                <Separator className="border-t border-bright-sun-400" />
                <div className="flex justify-between items-center mt-4 mb-4">
                    <h2 className="text-xl font-semibold text-foreground">Experience</h2>
                    <Button
                        onClick={handleAddExperience}
                        variant="outline"
                        size="sm"
                        className="border-bright-sun-400 text-bright-sun-400 hover:bg-bright-sun-400 hover:text-black"
                    >
                        <PlusIcon className="h-4 w-4 mr-2 text-bright-sun-400" />
                        Add Experience
                    </Button>
                </div>
                <div className="flex flex-col gap-4">
                    {userProfile.experience.map((exp) => (
                        <ExpCard
                            key={exp.id}
                            {...exp}
                            onUpdate={handleExpUpdate}
                            onDelete={handleExpDelete}
                        />
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div className="px-6 mt-6 mb-6">
                <Separator className="border-t border-bright-sun-400" />
                <div className="flex justify-between items-center mt-4 mb-4">
                    <h2 className="text-xl font-semibold text-foreground">Certifications</h2>
                    <Button
                        onClick={handleAddCertification}
                        variant="outline"
                        size="sm"
                        className="border-bright-sun-400 text-bright-sun-400 hover:bg-bright-sun-400 hover:text-black"
                    >
                        <PlusIcon className="h-4 w-4 mr-2 text-bright-sun-400" />
                        Add Certification
                    </Button>
                </div>
                <div className="flex flex-col gap-4">
                    {userProfile.certifications.map((cert) => (
                        <CertiCard
                            key={cert.id}
                            {...cert}
                            onUpdate={handleCertUpdate}
                            onDelete={handleCertDelete}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
