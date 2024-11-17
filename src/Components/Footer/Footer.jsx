import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-500 text-white">
      {/* Top zig-zag border */}
      <div className="w-full h-4 bg-white">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 28"
          preserveAspectRatio="none"
        >
          <polygon fill="red" points="0,28 120,0 240,28" />
        </svg>
      </div>

      {/* Footer content */}
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Rokto Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Life Blood</h2>
          <p className="text-sm mb-4">
            Life Blood is an automated blood service that connects blood
            searchers with voluntary blood donors in a moment through SMS and
            website.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook"></i> {/* FontAwesome for icons */}
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <p className="text-sm">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Important Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Important Links</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Add Blood Request
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Search Blood Donors in Bangladesh
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Frequently Asked Questions (FAQs)
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* About Blood Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Blood</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                What is blood?
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                What is blood donation?
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Who can donate blood?
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How often can I donate blood?
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Different Blood Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Different Blood Groups
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-800 text-gray-400 text-sm py-4 text-center">
        <p>
          Copyright © Hamim 2018 - Present | Made with ❤️ by Hamim | DMCA
          Protected
        </p>
      </div>
    </footer>
  );
};

export default Footer;
