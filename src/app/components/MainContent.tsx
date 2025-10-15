"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

export default function MainContent() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
        {/* Free Shipping */}
        <div>
          <Image
            src="/images/freeshipping.png"
            alt="Free Shipping"
            width={60}
            height={60}
            className="mx-auto md:mx-0"
          />
          <h3 className="font-semibold text-[rgb(61,61,61)] mt-3">
            Free Shipping
          </h3>
          <p className="text-sm text-gray-600">On Orders Above ₹399</p>
        </div>

        {/* COD */}
        <div>
          <Image
            src="/images/cod.png"
            alt="COD"
            width={50}
            height={50}
            className="mx-auto md:mx-0"
          />
          <h3 className="font-semibold mt-3 text-[rgb(61,61,61)]">
            COD Available
          </h3>
          <p className="text-sm text-gray-600">@ ₹40 Per Order</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Have Queries or Concerns?</h3>
          <Link
            href="/contact"
            className="border border-[rgb(1,168,230)] text-[rgb(0,175,245)] px-4 py-2 rounded-md hover:bg-blue-50 inline-block"
          >
            CONTACT US
          </Link>
        </div>
      </div>

      {/* Payment Section */}
      <div className="border-t border-gray-200 py-6 text-left px-6 max-w-7xl mx-auto">
        <h4 className="font-ligth text-[rgb(61,61,61)] text-lg  mb-3">
          PAYMENT
        </h4>
        <p className="text-lg text-[rgb(101,160,6)] mb-3">
          100% Payment Protection, Easy Return Policy
        </p>
        <div className="flex justify-left gap-3 flex-wrap">
          <img
            src="https://images.mamaearth.in/png/web-payments.png"
            alt="UPI"
            width={850}
            height={850}
          />
        </div>
      </div>

      {/* Useful Links Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-lg">
        <div>
          <h4 className="font-light mb-3 uppercase text-[rgb(61,61,61)] text-lg">
            Useful Links
          </h4>
          <ul className="space-y-2 text-gray-600 ">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Returns</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions-Cashback</Link>
            </li>
            <li>
              <Link href="#">We're Safe</Link>
            </li>
            <li>
              <Link href="#">Track Order</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Sitemap</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-light mb-3 uppercase text-[rgb(61,61,61)] text-lg">
            Categories
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="#">Baby</Link>
            </li>
            <li>
              <Link href="#">Beauty</Link>
            </li>
            <li>
              <Link href="#">Hair</Link>
            </li>
            <li>
              <Link href="#">Face</Link>
            </li>
            <li>
              <Link href="#">Body</Link>
            </li>
            <li>
              <Link href="#">Makeup</Link>
            </li>
            <li>
              <Link href="#">Ingredient</Link>
            </li>
            <li>
              <Link href="#">Gift Pack</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-light mb-3 uppercase text-[rgb(61,61,61)] text-lg">
            My Account
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="#">Account</Link>
            </li>
            <li>
              <Link href="#">Orders</Link>
            </li>
            <li>
              <Link href="#">Addresses</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="facebook"
          className="text-gray-600 hover:text-gray-600 transition"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter"
          className="text-gray-600 hover:text-gray-600 transition"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram"
          className="text-gray-600 hover:text-gray-600 transition"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="youtube"
          className="text-gray-600 hover:text-gray-600 transition"
        >
          <FaYoutube size={20} />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin"
          className="text-gray-600 hover:text-gray-600 transition"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="pinterest"
          className="text-gray-600 hover:text-gray-600 transition"
        >
          <FaPinterestP size={20} />
        </a>
      </div>

      {/* App Store Links */}
      <div className="flex justify-center gap-4 mb-6">
        <img src="/images/googleplay.png" alt="App Store" className="h-10" />
        <img src="/images/appstore.png" alt="Play Store" className="h-10" />
      </div>

      {/* Copyright */}
      <p className="text-gray-600 text-sm flex justify-center mb-6">
        © 2025 Honasa Consumer Limited. All Rights Reserved
      </p>
    </footer>
  );
}
