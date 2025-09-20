const CertiCard = (props: any) => {
    return (
        <div className="bg-mine-shaft-900 rounded-lg flex flex-col gap-3 shadow-md w-full p-6">
            {/* Top section */}
            <div className="flex justify-between items-start">
                {/* Left: Logo + Certificate info */}
                <div className="flex gap-3 items-center">
                    <div className="p-2 rounded-md bg-mine-shaft-800">
                        <img
                            className="h-9"
                            src={`/icons/${props.issuer}.png`}
                            alt={`${props.issuer} Logo`}
                        />
                    </div>
                    <div>
                        <div className="font-semibold text-mine-shaft-100 text-lg">
                            {props.name}
                        </div>
                        <div className="text-sm text-mine-shaft-300">{props.issuer}</div>
                    </div>
                </div>

                {/* Right: Date + ID */}
                <div className="text-sm text-mine-shaft-400 text-right">
                    <div>{props.issueDate}</div>
                    <div>{props.certificateId}</div>
                </div>
            </div>
        </div>
    );
};

export default CertiCard;
