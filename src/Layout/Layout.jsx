import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import style from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={style.layoutConatiner}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
