import React from "react";
import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "./Data";

const Testimonial = () => {
    return (
        <div className="mt-20">
            {/* Heading */}
            <div className="text-4xl mb-8 text-center font-semibold text-mine-shaft-100">
                What <span className="text-bright-sun-400">Users</span> Say About Us?
            </div>

            {/* Testimonials Grid */}
            <div className="flex flex-wrap justify-evenly gap-6">
                {testimonials.map((data, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-3 w-[23%] min-w-[250px] border border-bright-sun-200 rounded-xl p-5 shadow-md bg-white/5"
                    >
                        {/* Avatar + Name */}
                        <div className="flex items-center gap-3">
                            <Avatar src="/avatar2.png" alt={data.name} className="!h-14 !w-14" />
                            <div className="text-lg text-mine-shaft-200 font-semibold">{data.name}</div>
                        </div>

                        {/* Rating */}
                        <Rating value={data.rating} fractions={2} readOnly />

                        {/* Testimonial Text */}
                        <div className="text-sm text-mine-shaft-300">{data.testimonial}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
