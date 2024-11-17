import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Saving lives, one donation at a time.
        </p>
      </header>

      {/* Main Content Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 max-w-3xl">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          We are dedicated to connecting donors with those in need to ensure a
          sustainable blood supply. With your help, we can save lives and make a
          difference in communities across the world.
        </p>

        {/* Our Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-red-600">Compassion</h3>
            <p className="text-gray-600 mt-2">
              Every donation is a commitment to life, and we strive to provide
              compassionate care to all our recipients.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-600">Trust</h3>
            <p className="text-gray-600 mt-2">
              Your safety and trust are our top priorities. We maintain the
              highest standards of screening and care.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-600">Community</h3>
            <p className="text-gray-600 mt-2">
              By coming together, we build stronger communities and provide a
              lifeline to those in need.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-600">Dedication</h3>
            <p className="text-gray-600 mt-2">
              Our team is dedicated to creating an easy, accessible donation
              experience for every donor.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <footer className="mt-12 text-center">
        <p className="text-gray-600">
          For more information or to get involved, contact us at{" "}
          <span className="text-red-500">support@blooddonation.org</span>
        </p>
      </footer>
    </div>
  );
};

export default About;
