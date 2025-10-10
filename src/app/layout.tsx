import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const metadata = {
  title: "MamaEarth Clone",
  description: "An e-commerce website for natural and organic products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
