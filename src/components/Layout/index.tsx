import { FC } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
