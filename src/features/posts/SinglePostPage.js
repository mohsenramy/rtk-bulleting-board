import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import { selectPostByID } from "./postsSlice";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostByID(state, Number(postId)));
  if (!post) {
    return (
      <section>
        <h2>Post was not found!</h2>
      </section>
    );
  }

  return (
    <article key={post.id}>
      <h3>
        {post.title} {post.id}
      </h3>
      <p>{post.body}</p>
      <p className="postCredit">
        <Link to={`/post/edit/${postId}`}>Edit Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default SinglePostPage;
