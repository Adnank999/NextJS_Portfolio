import Footer from "./Footer/Footer";
import Header from "./Header/Header"
import "../styles/global.css"



const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;