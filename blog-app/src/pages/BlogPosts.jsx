import { useLoaderData } from "react-router-dom";
import Posts from "../components/Posts";
import { getPosts } from "../utils/api";

function BlogPostsPage() {
  const postsData = useLoaderData();
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={postsData} />
    </>
  );
}

export default BlogPostsPage;

export function loader() {
  return getPosts();
}
