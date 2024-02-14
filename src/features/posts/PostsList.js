import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";
import { Spinner } from "../../components/Spinner";

import { selectAllPosts, fetchPosts } from "./postsSlice";

const PostExcerpt = ({ post }) => { 
  return (
    <article className="post-excerpt">
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>

      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  );
};

export const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
   }, [postStatus, dispatch]);

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));//needs to be immutable, so we use slice() to create a copy of the array before sorting it.

  const renderedPosts = orderedPosts.map((post) => (
    <PostExcerpt key={post.id} post={post} />
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};