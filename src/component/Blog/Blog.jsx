import { Link, useParams } from "react-router-dom";

const Blog = (props) => {
  const params = useParams();
  return (
    <div>
      <p>blog detail - {params.id}</p>
      <Link to="/blogs">go to blog page </Link>
    </div>
  );
};

export default Blog;
