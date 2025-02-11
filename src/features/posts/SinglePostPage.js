import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";

import { selectPostById } from "./postsSlice";

export const SinglePostPage = ({ match }) => { 
  const { postId } = match.params;

  const post = useSelector((state) => selectPostById(state, postId));//check if the state is needed here or can we use selectPostById(postId) directly

  if(!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  } 

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
        <ReactionButtons post={post} />
      </article>
    </section>
  );

};