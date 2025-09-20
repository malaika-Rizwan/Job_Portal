import { fields } from "../Data/PostJob";
import SelectInput from "../PostJob/SelectInput";
import { TagsInput, Button } from "@mantine/core";

const PostJobT = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-mine-shaft-950">
            <div className="w-2/3 bg-mine-shaft-900 rounded-2xl shadow-lg overflow-hidden p-6">
                {/* Two-column select inputs */}
                <div className="grid grid-cols-2 gap-5">
                    {fields.map((field, index) => (
                        <SelectInput key={index} {...field} />
                    ))}
                </div>

                {/* Skills input */}
                <div className="mt-6">
                    <TagsInput
                        placeholder="Enter skills"
                        splitChars={[",", " ", "|"]}
                        clearable
                        label="Skills"
                        withAsterisk
                    />

                    {/* Description textarea */}
                    <div className="mt-6">
                        <label
                            htmlFor="description"
                            className="block text-mine-shaft-100 font-medium mb-2"
                        >
                            Description
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            rows={5}
                            className="w-full p-3 rounded-lg border border-mine-shaft-700 bg-mine-shaft-900 text-mine-shaft-100 focus:outline-none focus:ring-2 focus:ring-bright-sun-400"
                            placeholder="Write your description here..."
                        ></textarea>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4 mt-6">
                        <Button color="yellow" variant="light">
                            Publish Job
                        </Button>
                        <Button color="yellow" variant="outline">
                            Save as Draft
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostJobT;
