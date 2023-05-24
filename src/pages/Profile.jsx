import { Route, Routes } from "react-router-dom";
import SideBar from "../component/SideBar/SideBar";
import DashBoard from "../component/DashBoard/DashBoard";
import Downloads from "../component/Download/Download";

const Profile = () => {
  return (
    <>
      <p>Wellcome Back ! Dear Salar </p>
      <SideBar />
      <Routes>
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="downloads" element={<Downloads />} />
      </Routes>
    </>
  );
};

export default Profile;
