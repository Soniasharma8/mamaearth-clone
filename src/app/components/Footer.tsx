export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section with Video */}
      <section className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Our Goodness Promise
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Mamaearth, we live to spread a little love and goodness every
              day. We believe that goodness isn't a superpower, nor a special
              gift, it's inside all of us and it shows in the little choices we
              make. Our mission is to bring you the best of nature through our
              purest and most nurturing products that are made without any
              toxins or harmful chemicals. For us goodness also means being good
              to the earth. Which is why we recycle more plastic than we use and
              we're PETA Certified - which means we never test on animals. This
              is our #GoodnessInside.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Shop Now
              </button>
              <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold px-8 py-3 rounded-lg transition-colors">
                Our Pledges
              </button>
            </div>
          </div>

          {/* Right Side - YouTube Video */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-xl"
              src="https://www.youtube.com/embed/YROZybuYGUE"
              title="Mamaearth Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Decorative Image Section */}
      <section className="max-w-12xl mx-auto px-4 py-4">
        <div className="relative h-70 lg:h-96 rounded-1xl overflow-hidden">
          <img
            src="/images/footer.png"
            alt="Nature Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Super Safe Standards Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          Heading
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Super Safe Standards
          </h2>

          {/* Standards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dermatologically Tested */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Dermatologically Tested
              </h3>
              <p className="text-gray-600">
                We ensure each product is tested clinically on the sensitive
                human skin to ensure that it is not allergic.
              </p>
            </div>

            {/* FDA Approved */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">FDA Approved</h3>
              <p className="text-gray-600">
                MamaEarth is FDA approved, which means we are 100% safe to be
                used for babies as well as mamas.
              </p>
            </div>

            {/* Made Safe Certified */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Made Safe Certified
              </h3>
              <p className="text-gray-600">
                The MADE SAFE (Made with Safe Ingredients™) seal means that a
                product is literally made with safe ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Customers Say Section */}
      <section className="bg-gradient-to-b from-white to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Amazing products! My baby's skin has never been softer. Totally
                recommend Mamaearth to all parents."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-lg">P</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Priya Sharma</p>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Love the natural ingredients! My hair fall has reduced
                significantly after using their onion range."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">A</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Anjali Mehta</p>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Finally a brand I can trust! No harsh chemicals, just pure
                goodness. My skin has never looked better."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">R</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
