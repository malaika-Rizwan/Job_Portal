import Profile from "../Profile/Profile"
const ProfilePage = () => {
    return (
        <div className="bg-mine-shaft-950 font-['Poppins'] min-h-screen p-6">
            <hr className="border-mine-shaft-700 mb-6" />
            <h1 className="text-3xl font-bold text-mine-shaft-100 mb-6">
                Profile
            </h1>
            <Profile/>
        </div>
    );
};

export default ProfilePage;
