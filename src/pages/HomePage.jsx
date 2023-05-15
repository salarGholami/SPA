import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  navigate("./about-us");
  return (
    <>
      <p>this is home page</p>
    </>
  );
};

export default HomePage;
