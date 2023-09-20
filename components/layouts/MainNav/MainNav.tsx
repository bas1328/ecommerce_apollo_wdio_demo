import Navbar from "../../ui/Navbar/Navbar";
import Footer from "../../ui/Footer/Footer";

export default function MainNav({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
