import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
