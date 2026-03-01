import React from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { jobCategory } from "./Data";

const JobCategory: React.FC = () => {
    const autoplay = Autoplay({ delay: 3000, stopOnMouseEnter: true });

    return (
        <div className="mt-20 pb-20">
            <div className="text-4xl mb-3 text-center font-semibold text-mine-shaft-100">
                Browse <span className="text-bright-sun-400">Job</span> Category
            </div>
            <div className="text-lg mb-10 text-mine-shaft-300 text-center mx-auto w-1/2">
                Explore diverse job opportunities tailored to your skills. Start your career journey today!
            </div>

            <Carousel
                withIndicators={false} // removes bottom scroll dots
                height="auto"
                slideSize="22%"
                slideGap="md"
                orientation="horizontal"
                plugins={[autoplay]}
                className="mt-10 overflow-visible"
                classNames={{
                    control:
                        "bg-bright-sun-400 text-mine-shaft-100 hover:bg-bright-sun-500 cursor-pointer w-16 h-16 rounded-full flex items-center justify-center shadow-lg text-3xl",
                    indicator:
                        "bg-mine-shaft-400 w-2 h-2 transition-all data-[active]:bg-bright-sun-400",
                }}
            >
                {jobCategory.map((category, index) => (
                    <Carousel.Slide key={index}>
                        <div className="flex flex-col gap-2 border border-bright-sun-400 items-center justify-center w-64 text-center bg-mine-shaft-900 rounded-xl shadow-md p-5 my-5 transition duration-300 ease-in-out hover:shadow-[0_0_15px_4px_#FFD700] hover:scale-105 cursor-pointer">
                            <div className="p-3 bg-bright-sun-400 rounded-full mb-3">
                                <img className="h-10 w-10" src={`/Category/${category.name}.png`} alt={category.name} />
                            </div>
                            <div className="text-mine-shaft-200 text-xl font-semibold mb-2">{category.name}</div>
                            <div className="text-mine-shaft-300 text-sm mb-2">{category.desc}</div>
                            <div className="text-mine-shaft-400 text-md">{category.jobs}+ new jobs posted</div>
                        </div>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>
    );
};

export default JobCategory;
