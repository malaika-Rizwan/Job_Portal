import { Divider, Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Company from "../CompanyProfile/Company";
import SimilierCompany from "../CompanyProfile/SimilierCompany";

const CompanyPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['Poppins'] p-4">
            {/* Top Divider */}
            <Divider size="xs" mx="md" />

            {/* Back Button */}
            <Button
                variant="light"
                color="yellow"
                my="md"
                className="my-5 inline-block"
                leftSection={<IconArrowLeft size={20} />}
                onClick={() => navigate(-1)}
            >
                Back
            </Button>

            {/* Content */}
            <div className="flex gap-5 justify-between">
                {/* Add your company details here */}
                <Company/>
                <SimilierCompany/>
            </div>
        </div>
    );
};

export default CompanyPage;
