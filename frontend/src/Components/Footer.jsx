import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10">

        {/* Logo & About */}
        <div>
          <div className="flex items-center mb-3">
            <div className="bg-orange-500 w-7 h-7 rounded-full mr-2 flex items-center justify-center text-white font-bold">
              F
            </div>
            <span className="font-bold text-lg text-orange-600">Feastify</span>
          </div>

          <p className="text-gray-600 mt-2">
            Delicious food delivered to your doorstep. Fresh ingredients,
            fast delivery, and great taste every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">Menu</li>
            <li className="hover:text-orange-500 cursor-pointer">About Us</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Contact</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Bhopal, India
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@feastify.com
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
            <FaInstagram className="hover:text-orange-500 cursor-pointer" />
            <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
            <FaTwitter className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-center py-4 text-gray-600">
        © {new Date().getFullYear()} Feastify. All rights reserved.
      </div>
    </footer>
  );
}
