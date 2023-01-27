import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { fetchUsers } from "./features/users/usersSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchPosts } from "./features/posts/postsSlice";

const container = document.getElementById("root");
const root = createRoot(container);

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
