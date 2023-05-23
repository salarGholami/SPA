import { useParams } from "react-router-dom";

const PostPage = () => {
  const params = useParams();
  const paramsId = params.id || 1;

  return (
    <div>
      <h2>Postes deteail - {paramsId}</h2>
      <div>{JSON.stringify(paramsId)}</div>
    </div>
  );
};

export default PostPage;
