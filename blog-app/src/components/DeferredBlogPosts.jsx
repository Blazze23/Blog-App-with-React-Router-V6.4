import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { getSlowPosts } from "../utils/api";
import Posts from "./Posts";

function DeferredBlogPosts() {
  const postData = useLoaderData();

  return (
    <>
      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={postData.posts}
          errorElement={<p>Error loading blog posts.</p>}
        >
          {(loadedPosts) => <Posts blogPosts={loadedPosts} />}
        </Await>
      </Suspense>
    </>
  );
}

export default DeferredBlogPosts;

export async function loader() {
  return defer({ posts: getSlowPosts() });
}
