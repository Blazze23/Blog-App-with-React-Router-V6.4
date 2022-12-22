import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DeferredBlogPosts, {
  loader as deferredPostsLoader,
} from "./components/DeferredBlogPosts";
import BlogLayout from "./pages/BlogLayout";
// import BlogPostsPage, { loader as blogPostsLoader } from "./pages/BlogPosts";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import NewPostPage, { action as newPostAction } from "./pages/NewPost";
import PostDetailPage, { loader as postDetailLoader } from "./pages/PostDetail";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        {/* <Route index element={<BlogPostsPage />} loader={blogPostsLoader} /> */}
        <Route
          index
          element={<DeferredBlogPosts />}
          loader={deferredPostsLoader}
        />
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={postDetailLoader}
        />
        <Route
          path="/blog/new"
          element={<NewPostPage />}
          action={newPostAction}
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
