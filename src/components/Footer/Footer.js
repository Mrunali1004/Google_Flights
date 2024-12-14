import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white py-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg">© 2024 Travel the World. All rights reserved.</p>
        <div className="mt-4">
          <Link to="#" className="mx-4 text-white hover:text-teal-300">
            Privacy Policy
          </Link>
          <Link href="#" className="mx-4 text-white hover:text-teal-300">
            Terms of Service
          </Link>
          <Link href="#" className="mx-4 text-white hover:text-teal-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
