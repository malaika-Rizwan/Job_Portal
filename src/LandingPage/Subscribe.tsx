import React from "react";
import { TextInput, Button } from "@mantine/core";

const Subscribe = () => {
    return (
        <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-10 rounded-xl justify-around">
            {/* Heading */}
            <div className="text-4xl w-2/5 text-center font-semibold text-mine-shaft-100">
                Never want to miss any{" "}
                <span className="text-bright-sun-400">Job News?</span>
            </div>

            {/* Input + Button */}
            <div className="flex gap-4 bg-mine-shaft-700 px-4 py-3 rounded-xl items-center">
                <TextInput
                    variant="unstyled"
                    classNames={{
                        input: "text-mine-shaft-100 font-semibold placeholder:text-mine-shaft-400",
                    }}
                    size="lg"
                    placeholder="Your@email.com"
                />
                <Button
                    className="rounded-lg bg-bright-sun-400 hover:bg-bright-sun-500 text-black"
                    size="lg"
                    variant="filled"
                    color="yellow"
                >
                    Get in touch
                </Button>
            </div>
        </div>
    );
};

export default Subscribe;
