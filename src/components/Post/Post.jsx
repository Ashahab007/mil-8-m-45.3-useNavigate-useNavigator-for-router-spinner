import React from "react";
import { NavLink } from "react-router";

const Post = ({ post }) => {
  console.log(post);
  const { userId, title, body } = post;
  return (
    <div className="border border-amber-400 rounded-2xl mt-4 p-10">
      <h3>Title: {title}</h3>
      <div className="text-center mt-5">
        <NavLink
          to={`/posts/${userId}`}
          className="btn bg-amber-300 border-amber-300 p-2 rounded-2xl"
        >
          Show Details
        </NavLink>
      </div>
    </div>
  );
};

export default Post;
