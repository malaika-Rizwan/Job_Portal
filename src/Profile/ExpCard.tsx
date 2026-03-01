import { useState } from "react";
import { Button, TextInput, Textarea } from "@mantine/core";
import { IconPencil, IconCheck, IconTrash } from "@tabler/icons-react";

interface ExpCardProps {
    id?: number;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    onUpdate: (id: number, updatedExp: any) => void;
    onDelete: (id: number) => void;
}

const ExpCard = ({
                     id = 0,
                     title,
                     company,
                     location,
                     startDate,
                     endDate,
                     description,
                     onUpdate,
                     onDelete,
                 }: ExpCardProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({
        title,
        company,
        location,
        startDate,
        endDate,
        description,
    });

    const handleSave = () => {
        onUpdate(id, editData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditData({ title, company, location, startDate, endDate, description });
        setIsEditing(false);
    };

    return (
        <div className="bg-card border border-bright-sun-400 rounded-lg p-6 shadow-sm">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3 items-center">
                    <div className="p-2 rounded-md bg-muted border border-bright-sun-400">
                        <img
                            className="h-9 w-9 object-contain"
                            src={`/Icons/${company}.png`}
                            alt={`${company} Logo`}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/placeholder.svg";
                            }}
                        />
                    </div>
                    <div className="flex-1">
                        {isEditing ? (
                            <div className="space-y-2">
                                <TextInput
                                    value={editData.title}
                                    onChange={(e) =>
                                        setEditData({ ...editData, title: e.currentTarget.value })
                                    }
                                    placeholder="Job Title"
                                    className="border-bright-sun-400"
                                />
                                <div className="flex gap-2">
                                    <TextInput
                                        value={editData.company}
                                        onChange={(e) =>
                                            setEditData({ ...editData, company: e.currentTarget.value })
                                        }
                                        placeholder="Company"
                                        className="flex-1 border-bright-sun-400"
                                    />
                                    <TextInput
                                        value={editData.location}
                                        onChange={(e) =>
                                            setEditData({ ...editData, location: e.currentTarget.value })
                                        }
                                        placeholder="Location"
                                        className="flex-1 border-bright-sun-400"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="font-semibold text-foreground text-lg">{title}</div>
                                <div className="text-sm text-muted-foreground">
                                    {company} • {location}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Dates + Actions */}
                <div className="flex flex-col items-end gap-2">
                    {isEditing ? (
                        <div className="flex gap-2">
                            <TextInput
                                value={editData.startDate}
                                onChange={(e) =>
                                    setEditData({ ...editData, startDate: e.currentTarget.value })
                                }
                                placeholder="Start Date"
                                className="w-24 text-sm border-bright-sun-400"
                            />
                            <TextInput
                                value={editData.endDate}
                                onChange={(e) =>
                                    setEditData({ ...editData, endDate: e.currentTarget.value })
                                }
                                placeholder="End Date"
                                className="w-24 text-sm border-bright-sun-400"
                            />
                        </div>
                    ) : (
                        <div className="text-sm text-muted-foreground">
                            {startDate} - {endDate}
                        </div>
                    )}

                    <div className="flex gap-2">
                        {isEditing ? (
                            <>
                                <Button onClick={handleSave} size="sm" className="bg-bright-sun-400 text-black">
                                    <IconCheck size={16} className="text-black" />
                                </Button>
                                <Button
                                    onClick={handleCancel}
                                    size="sm"
                                    variant="outline"
                                    className="border-bright-sun-400 text-bright-sun-400"
                                >
                                    Cancel
                                </Button>
                            </>
                        ) : (
                            <Button
                                onClick={() => setIsEditing(true)}
                                size="sm"
                                variant="outline"
                                className="border-bright-sun-400 text-bright-sun-400"
                            >
                                <IconPencil size={16} className="text-bright-sun-400" />
                            </Button>
                        )}
                        <Button
                            onClick={() => onDelete(id)}
                            size="sm"
                            className="bg-bright-sun-400 text-black"
                        >
                            <IconTrash size={16} className="text-black" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Description */}
            {isEditing ? (
                <Textarea
                    value={editData.description}
                    onChange={(e) =>
                        setEditData({ ...editData, description: e.currentTarget.value })
                    }
                    placeholder="Job description..."
                    minRows={4}
                    className="border-bright-sun-400"
                />
            ) : (
                <div className="text-sm text-muted-foreground text-justify">
                    {description}
                </div>
            )}
        </div>
    );
};

export default ExpCard;
