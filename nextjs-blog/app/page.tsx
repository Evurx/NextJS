
import Link from "next/link";
import getPostMetadata from "../componets/getPostMetadata";
import PostPreview from "../componets/PostPreview";





const HomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key = {post.slug} {...post}/>
    ));
    return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
};

export default HomePage;