import React from "react";
import Link from "next/link";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-purple-600 p-20 relative flex justify-center items-center"> {/* Increased height to fully display the logo */}
        {/* Logo */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center shadow-md">
          <span className="font-bold">Logo</span>
        </div>
      </nav>

      {/* Secondary Navbar */}
      <div className="bg-gray-300 py-3 rounded-b-lg">
        <div className="flex justify-center space-x-8 font-semibold">
          <Link href="/" className="hover:text-purple-600">Home</Link>
          <Link href="/about" className="hover:text-purple-600">About us</Link>
          <Link href="/contact" className="hover:text-purple-600">Contact us</Link>
          <Link href="/admin" className="hover:text-purple-600">Admin</Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-300 text-black py-6 mt-6">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-10">
          {/* Left Section */}
          <div className="space-y-2 w-1/2">
            <p>Adress:</p>
            <p>Telephone number:</p>
            <p>opening hours:</p>
            <p>more info:</p>
          </div>
          {/* Right Section */}
          <div className="flex flex-col items-end w-1/2">
            <p className="mb-2">Contact Us!</p>
            <div className="flex space-x-4">
              <a href="#"><img src="https://res.cloudinary.com/desem7vhd/image/upload/v1741073760/Facebook_Logo_Primary_uidern.png" alt="Facebook" className="w-6 h-6" /></a>
              <a href="#"><img src="https://res.cloudinary.com/desem7vhd/image/upload/v1741074023/Digital_Glyph_Green_kn0fud.png" alt="WhatsApp" className="w-6 h-6" /></a>
              <a href="#"><img src="https://res.cloudinary.com/desem7vhd/image/upload/v1741074251/Instagram_Glyph_Gradient_md0zct.png" alt="Instagram" className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="bg-purple-600 text-white text-center py-3 mt-4 font-semibold w-full">
          Developed by arete 2025
        </div>
      </footer>
    </div>
  );
};

export default Layout;
