import React from "react";
import PostsList from "./features/posts/PostsList";
import PostAddFrom from "./features/posts/PostAddFrom";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SinglePostPage from "./features/posts/SinglePostPage";
import PostEditFormPage from "./features/posts/PostEditFormPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<PostAddFrom />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<PostEditFormPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
