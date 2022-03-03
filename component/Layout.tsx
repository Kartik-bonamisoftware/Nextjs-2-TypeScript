import Navbar from "./Navbar";
import Footer from "./Footer";

interface Child {
  children: React.ReactNode;
}

const Layout = ({ children }: Child) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
