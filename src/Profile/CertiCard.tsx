import { useState } from "react";
import { Button, TextInput } from "@mantine/core";
import { IconCheck, IconPencil, IconTrash } from "@tabler/icons-react";

interface CertiCardProps {
    id?: number;
    name: string;
    issuer: string;
    issueDate: string;
    certificateId: string;
    onUpdate: (id: number, updatedCert: any) => void;
    onDelete: (id: number) => void;
}

const CertiCard = ({
                       id = 0,
                       name,
                       issuer,
                       issueDate,
                       certificateId,
                       onUpdate,
                       onDelete,
                   }: CertiCardProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({
        name,
        issuer,
        issueDate,
        certificateId,
    });

    const handleSave = () => {
        onUpdate(id, editData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditData({ name, issuer, issueDate, certificateId });
        setIsEditing(false);
    };

    return (
        <div className="bg-card border border-bright-sun-400 rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start">
                <div>
                    {isEditing ? (
                        <>
                            <TextInput
                                value={editData.name}
                                onChange={(e) =>
                                    setEditData({ ...editData, name: e.currentTarget.value })
                                }
                                placeholder="Certificate Name"
                            />
                            <TextInput
                                value={editData.issuer}
                                onChange={(e) =>
                                    setEditData({ ...editData, issuer: e.currentTarget.value })
                                }
                                placeholder="Issuer"
                            />
                        </>
                    ) : (
                        <div>
                            <div className="font-semibold text-bright-sun-400">{name}</div>
                            <div className="text-sm text-muted-foreground">{issuer}</div>
                        </div>
                    )}
                </div>

                <div className="flex gap-2">
                    {isEditing ? (
                        <>
                            <Button
                                onClick={handleSave}
                                size="xs"
                                className="!border !border-bright-sun-400 !text-bright-sun-400 hover:!bg-bright-sun-400 hover:!text-black"
                            >
                                <IconCheck size={16} />
                            </Button>
                            <Button
                                onClick={handleCancel}
                                size="xs"
                                variant="outline"
                                className="!border !border-bright-sun-400 !text-bright-sun-400 hover:!bg-bright-sun-400 hover:!text-black"
                            >
                                Cancel
                            </Button>
                        </>
                    ) : (
                        <Button
                            onClick={() => setIsEditing(true)}
                            size="xs"
                            variant="outline"
                            className="!border !border-bright-sun-400 !text-bright-sun-400 hover:!bg-bright-sun-400 hover:!text-black"
                        >
                            <IconPencil size={16} />
                        </Button>
                    )}
                    <Button
                        onClick={() => onDelete(id)}
                        size="xs"
                        className="!bg-bright-sun-400 !text-black hover:!opacity-80"
                    >
                        <IconTrash size={16} />
                    </Button>
                </div>
            </div>

            <div className="text-sm text-muted-foreground mt-2">
                {isEditing ? (
                    <>
                        <TextInput
                            value={editData.issueDate}
                            onChange={(e) =>
                                setEditData({ ...editData, issueDate: e.currentTarget.value })
                            }
                            placeholder="Issue Date"
                        />
                        <TextInput
                            value={editData.certificateId}
                            onChange={(e) =>
                                setEditData({
                                    ...editData,
                                    certificateId: e.currentTarget.value,
                                })
                            }
                            placeholder="Certificate ID"
                        />
                    </>
                ) : (
                    <span>
            {issueDate} • {certificateId}
          </span>
                )}
            </div>
        </div>
    );
};

export default CertiCard;
