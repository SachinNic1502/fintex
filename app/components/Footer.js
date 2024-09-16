"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-32">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between px-4">
        {/* Logo and Social Links */}
        <div className="flex flex-col items-start mb-8 lg:mb-0 lg:w-1/4">
          <span className="text-[#F7D756] text-5xl pb-2 underline">
            Fintex
          </span>
          <div className="flex space-x-4 mb-6">
            <a
              href="#"
              className="text-white hover:text-[#F7D756] transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#F7D756] transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#F7D756] transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#F7D756] transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <span className="text-gray-400">
            <p>
            Address: Block No 26, First Floor,
            </p> 
            <p>
            Navkar Plaza, Waki Road, Jamner,
            </p>
             <p>
             Dist-Jalgaon. 424206 (IN-MH)
             </p>
          </span>
        </div>

        {/* About Section */}
        <div className="lg:w-1/4 mb-8 lg:mb-0">
          <h6 className="text-xl font-semibold mb-4">About</h6>
          <p className="text-gray-300">
            At Fintex, we value your feedback, questions, and concerns. Whether
            you need assistance with a loan application, have inquiries about
            our services, or require customer support, we are here to help.
          </p>
        </div>

        {/* Get Help Section */}
        <div className="lg:w-1/4 mb-8 lg:mb-0">
          <h6 className="text-xl font-semibold mb-4">Get Help</h6>
          <a
            href="#"
            className="text-white hover:text-[#F7D756] transition-colors flex items-center"
          >
            <FaWhatsapp className="mr-2" /> Whatsapp Help Line
          </a>
        </div>

        {/* Contact Section */}
        <div className="lg:w-1/4 mb-8 lg:mb-0">
          <h6 className="text-xl font-semibold mb-4">Contact</h6>
          <a
            href="mailto:mailme@gmail.com"
            className="text-white hover:text-[#F7D756] transition-colors flex items-center"
          >
            <MdAttachEmail className="mr-2"/>
            mailme@gmail.com
          </a>
          <div className="mt-4 text-gray-300">
            <p>Customer Support Hours:</p>
            <p>Monday to Friday: 9:00 AM – 6:00 PM</p>
            <p>Saturday: 10:00 AM – 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-center py-4">
        <span className="text-gray-400 text-sm">
          Copyright &#169; 2024 | Fintex All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
