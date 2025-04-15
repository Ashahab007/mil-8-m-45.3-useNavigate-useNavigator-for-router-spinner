import { NavLink, useNavigate } from "react-router";

const Post = ({ post }) => {
  /* 1.1 Using useNavigate helps to go programmatically in the browse */
  const { id, title, body } = post;

  const navigate = useNavigate();

  const handleNavigate = () => {
    // 1.2 use the specific path to navigate like /home or /post or show details page
    navigate(`/posts/${id}`);
  };
  console.log(post);
  return (
    <div className="border border-amber-400 rounded-2xl mt-4 p-10">
      <h3>Title: {title}</h3>
      <div className="text-center mt-5">
        <NavLink
          to={`/posts/${id}`}
          className="btn bg-amber-300 border-amber-300 p-2 rounded-2xl"
        >
          <button className="btn">Show Details</button>
        </NavLink>

        <button
          onClick={handleNavigate}
          className="ml-3 bg-amber-800 text-white p-2 rounded-2xl"
        >
          Details of: {id}
        </button>
      </div>
    </div>
  );
};

export default Post;
