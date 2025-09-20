import SearchBar from "../Findjobs/SearchBar";
import Jobs from "../Findjobs/Jobs";
import { Divider } from "@mantine/core"; // ✅ Import Divider

const Findjobs = () => {
    return (
        <div className="bg-mine-shaft-950 font-['Poppins']">
            <Divider size="xs" mx="md" />

            <SearchBar />




            <Divider size="xs" mx="md" />

            <Jobs/>

        </div>
    );
};

export default Findjobs;
