"use client";

import MainContent from "./MainContent";

export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section with Video */}
      <section className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - YouTube Video */}
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

          {/* Right Side - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Our Goodness Promise
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Mamaearth, we live to spread a little love and goodness every
              day. We believe that goodness isn&apos;t a superpower, nor a special
              gift, it&apos;s inside all of us and it shows in the little choices we
              make. Our mission is to bring you the best of nature through our
              purest and most nurturing products that are made without any
              toxins or harmful chemicals. For us goodness also means being good
              to the earth. Which is why we recycle more plastic than we use and
              we&apos;re PETA Certified - which means we never test on animals. This
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
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Super Safe Standards
          </h2>

          {/* Standards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dermatologically Tested */}
            <div className="flex items-center gap-4">
              <img
                src="/images/super1.png"
                alt="Dermatologically Tested"
                className="w-25 h-25 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">
                  Dermatologically Tested
                </h3>
                <p className="text-gray-600">
                  We ensure each product is tested clinically on the sensitive
                  human skin to ensure that it is not allergic.
                </p>
              </div>
            </div>

            {/* FDA Approved */}
            <div className="flex items-center gap-4">
              <img
                src="/images/super2.png"
                alt="FDA Approved"
                className="w-25 h-25 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">
                  FDA Approved
                </h3>
                <p className="text-gray-600">
                  MamaEarth is FDA approved, which means we are 100% safe to be
                  used for babies as well as mamas.
                </p>
              </div>
            </div>

            {/* Made Safe Certified */}
            <div className="flex items-center gap-4">
              <img
                src="/images/super3.png"
                alt="Made Safe Certified"
                className="w-25 h-25 object-cover rounded-lg"
              />
              <div className="flex-1">
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
        </div>
      </section>

      {/* What Customers Say Section */}
      <section className="bg-gradient-to-b from-white via-green-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[180px]">
                I wanted to use natural products for my baby and came across
                Mamaearth. I use its Baby Shampoo, Body Wash for Babies and Baby
                Hair oil and they all work very effectively. So if you are
                looking for a brand with an app, a safe and secure payment
                gateway, and a wide range of toxin-free products, Mamaearth is
                the one for you!
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-30 h-30 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img
                    src="/images/gina.png"
                    alt="Gina"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Gina</p>
                  <div className="flex items-center gap-1">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                      5.0
                    </span>
                    <span className="text-yellow-400 text-sm">★</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[180px]">
                I live near the coastal region, and sun tan is a big issue here.
                A few months ago, I switched to Mamaearth Ubtan Face Wash, which
                has worked pretty well. I now have a natural glow on my face and
                my sun tan seems resolved too. Mamaearth&apos;s skincare products are
                made of natural ingredients and contain no harmful
                preservatives. Being affordable is another positive too.
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-30 h-30 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img
                    src="/images/waris.png"
                    alt="Waris Raza"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Waris Raza</p>
                  <div className="flex items-center gap-1">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                      5.0
                    </span>
                    <span className="text-yellow-400 text-sm">★</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[180px]">
                I have always used only natural products for my baby. One day, I
                came across Mamaearth&apos;s products during an online search. I
                bought its Baby Shampoo, Toothpaste, and Face Cream; they all
                were toxin-free and effective. The shopping experience and
                payment system were safe, fast, and quick.
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-30 h-30 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img
                    src="/images/manisha.png"
                    alt="Manisha"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Manisha</p>
                  <div className="flex items-center gap-1">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                      5.0
                    </span>
                    <span className="text-yellow-400 text-sm">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainContent />
      </section>
    </div>
  );
}
