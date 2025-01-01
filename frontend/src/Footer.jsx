import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 MediDoor. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#about" className="hover:text-gray-200">
            About Us
          </a>
          <a href="#contact" className="hover:text-gray-200">
            Contact Us
          </a>
          <a href="#social" className="hover:text-gray-200">
            Social Media
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
