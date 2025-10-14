"use client";
import Image from "next/image";
import Link from "next/link";

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
            width={40}
            height={40}
            className="mx-auto md:mx-0"
          />
          <h3 className="font-semibold mt-3">Free Shipping</h3>
          <p className="text-sm text-gray-600">On Orders Above ₹399</p>
        </div>

        {/* COD */}
        <div>
          <Image
            src="/images/cod.png"
            alt="COD"
            width={40}
            height={40}
            className="mx-auto md:mx-0"
          />
          <h3 className="font-semibold mt-3">COD Available</h3>
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
      <div className="border-t border-gray-200 py-6 text-center">
        <h4 className="font-semibold mb-3">PAYMENT</h4>
        <p className="text-sm text-gray-600 mb-3">
          100% Payment Protection, Easy Return Policy
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Image src="/payments/upi.png" alt="UPI" width={50} height={30} />
          <Image src="/payments/visa.png" alt="Visa" width={50} height={30} />
          <Image
            src="/payments/mastercard.png"
            alt="Mastercard"
            width={50}
            height={30}
          />
          <Image src="/payments/amex.png" alt="Amex" width={50} height={30} />
          <Image src="/payments/rupay.png" alt="RuPay" width={50} height={30} />
        </div>
      </div>

      {/* Useful Links Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-3 uppercase">Useful Links</h4>
          <ul className="space-y-2 text-gray-600">
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
              <Link href="#">Track Order</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 uppercase">Categories</h4>
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
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 uppercase">My Account</h4>
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
      <div className="border-t border-gray-200 py-6 text-center text-gray-600 text-sm">
        <div className="flex justify-center gap-5 mb-4">
          <Link href="#">
            <Image
              src="/social/facebook.svg"
              alt="Facebook"
              width={20}
              height={20}
            />
          </Link>
          <Link href="#">
            <Image
              src="/social/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
          </Link>
          <Link href="#">
            <Image
              src="/social/youtube.svg"
              alt="YouTube"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <div className="flex justify-center gap-3 mb-4">
          <Image
            src="/badges/playstore.png"
            alt="Google Play"
            width={120}
            height={40}
          />
          <Image
            src="/badges/appstore.png"
            alt="App Store"
            width={120}
            height={40}
          />
        </div>
        <p>© 2025 Honasa Consumer Limited. All Rights Reserved</p>
      </div>
    </footer>
  );
}
