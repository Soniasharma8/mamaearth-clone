export default function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-10">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">About</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <a href="#" className="hover:text-white">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Promise
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Customer Care</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Track Order
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <a href="#" className="hover:text-white">
                Skin Care
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Hair Care
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Baby Care
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Makeup
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M13 3h4v4h-4v3h4v4h-4v10h-4V14H7v-4h2.99V7.66C9.99 4.51 11.43 3 13 3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.3A2.8 2.8 0 1 1 14.8 12 2.8 2.8 0 0 1 12 14.8zm4.9-7.9a.9.9 0 1 1-.9-.9.9.9 0 0 1 .9.9z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.5.59-2.27.69.82-.49 1.44-1.28 1.74-2.21-.78.46-1.62.8-2.52.98a4.15 4.15 0 0 0-7.17 3.78A11.77 11.77 0 0 1 3.1 4.9a4.15 4.15 0 0 0 1.29 5.54 4.08 4.08 0 0 1-1.88-.52v.05a4.16 4.16 0 0 0 3.33 4.07 4.22 4.22 0 0 1-1.87.07 4.16 4.16 0 0 0 3.88 2.89A8.36 8.36 0 0 1 2 19.54a11.78 11.78 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68v-.53c.81-.58 1.5-1.3 2.05-2.13z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-green-700"></div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-300 py-4">
        © {new Date().getFullYear()} MamaEarthClone by Sonia | Built for
        Learning ❤️
      </div>
    </footer>
  );
}
