import Nav from "./Nav";
import Meta from "./Meta";
import Header from "./Header";
import Carousel from "./Carousel";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
