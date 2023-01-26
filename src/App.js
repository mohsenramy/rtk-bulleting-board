import React from "react";
import PostsList from "./features/posts/PostsList";
import PostAddFrom from "./features/posts/PostAddFrom";

function App() {
  return (
    <main>
      <PostAddFrom />
      <PostsList />
    </main>
  );
}

export default App;
