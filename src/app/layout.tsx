// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import {CartProvider} from '@/context/CartContext';
// export const metadata = {
//   title: "MamaEarth Clone",
//   description: "An e-commerce website for natural and organic products.",
// };

// import { ReactNode } from "react";

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "../app/context/CartContext";
import { ReactNode } from "react";

export const metadata = {
  title: "MamaEarth Clone",
  description: "An e-commerce website for natural and organic products.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* ✅ Wrap everything inside CartProvider */}
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
