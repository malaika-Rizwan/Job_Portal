import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import Findjobs from "./Pages/Findjobs";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import FindTalent from "./Pages/FindTalent";
import TalentProfile from "./FindTalent/TalentProfile";
import PostJobPage from "./Pages/PostJobPage";
import JobDesPage from "./Pages/JobDesPage";
import ApplyJobPage from "./Pages/ApplyJobPage";
import CompanyPage from "./Pages/CompanyPage";
import PostedJobs from "./Pages/PostedJobs";  // ✅ FIXED import
import JobHistoryPage  from "./Pages/JobHistoryPage";
import SignupPage from "./Pages/SignupPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
    const theme = createTheme({
        focusRing: "never",
        primaryColor: "bright-sun",
        primaryShade: 4,
        colors: {
            "bright-sun": [
                "#fffbeb",
                "#fff3c6",
                "#ffe588",
                "#ffd149",
                "#ffbd20",
                "#f99b07",
                "#dd7302",
                "#b75006",
                "#943c0c",
                "#7a330d",
                "#461902",
            ],
            "mine-shaft": [
                "#f6f6f6",
                "#e7e7e7",
                "#d1d1d1",
                "#b0b0b0",
                "#888888",
                "#6d6d6d",
                "#5d5d5d",
                "#4f4f4f",
                "#454545",
                "#3d3d3d",
                "#2d2d2d",
            ],
        },
        fontFamily: "Poppins, sans-serif",
    });

    return (
        <MantineProvider defaultColorScheme="dark" theme={theme}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/find-jobs" element={<Findjobs />} />
                    <Route path="/find-talent" element={<FindTalent />} />
                    <Route path="/company" element={<CompanyPage />} />
                    <Route path="/posted-jobs" element={<PostedJobs/>} />
                    <Route path="/jobs" element={<JobDesPage />} />
                    <Route path="/apply-job" element={<ApplyJobPage />} />
                    <Route path="/post-jobs" element={<PostJobPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/login" element={<SignupPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/job-history" element={<JobHistoryPage />} />
                    <Route path="/talent-profile" element={<TalentProfile />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App;
