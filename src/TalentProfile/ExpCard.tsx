const ExpCard = (props: any) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="bg-mine-shaft-900 rounded-lg flex flex-col gap-3 shadow-md w-full p-6">
                {/* Top section */}
                <div className="flex justify-between items-start">
                    {/* Left: Logo + Job info */}
                    <div className="flex gap-3 items-center">
                        <div className="p-2 rounded-md bg-mine-shaft-800">
                            <img
                                className="h-9"
                                src={`/icons/${props.company}.png`}
                                alt={`${props.company} Logo`}
                            />
                        </div>
                        <div>
                            <div className="font-semibold text-mine-shaft-100 text-lg">
                                {props.title}
                            </div>
                            <div className="text-sm text-mine-shaft-300">
                                {props.company} • {props.location}
                            </div>
                        </div>
                    </div>

                    {/* Right: Date */}
                    <div className="text-sm text-mine-shaft-400">
                        {props.startDate} - {props.endDate}
                    </div>
                </div>

                {/* Description */}
                <div className="text-sm text-mine-shaft-300 text-justify">
                    {props.description}
                </div>
            </div>
        </div>
    );
};

export default ExpCard;
