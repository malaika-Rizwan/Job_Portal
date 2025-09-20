import PostJobT from "../PostJob/PostJobT";

const PostJobPage = () => {
    return (
        <div className="bg-mine-shaft-950 font-['Poppins'] min-h-screen p-6">
            <h1 className="text-3xl font-bold text-mine-shaft-100 mb-6">
                Post Job
            </h1>
            <PostJobT/>
        </div>
    );
};

export default PostJobPage;
