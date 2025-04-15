import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const postDetails = useLoaderData();
  console.log(postDetails);
  console.log(postDetails.userId);
  const navigate = useNavigate();

  return (
    <div>
      {postDetails.body}
      <div className="text-center mt-10 border rounded-2xl">
        <button
          // 1.3 if go to one step back use -1
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
