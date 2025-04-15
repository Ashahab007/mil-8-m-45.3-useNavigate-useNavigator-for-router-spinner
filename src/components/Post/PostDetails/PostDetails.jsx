import React from "react";
import { useLoaderData } from "react-router";

const PostDetails = () => {
  const postDetails = useLoaderData();
  console.log(postDetails);

  return <div>Details</div>;
};

export default PostDetails;
