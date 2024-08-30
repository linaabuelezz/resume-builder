import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    router.push('/LoginPage');
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black opacity-65" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white text-xl font-bold">Resume Builder</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-white hover:cursor-pointer hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/About"
              className="text-white hover:cursor-pointer hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              href="/Premium"
              className="text-white hover:cursor-pointer hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Premium
            </Link>
            <button
            onClick={handleLogout}
              className="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-md"
            >
              Log out
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-90 z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-md">
              <div className="flex justify-end mb-4">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 hover:cursor-pointer hover:text-blue-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="text-gray-800 hover:cursor-pointer hover:text-blue-200 block text-xl"
                >
                  Home
                </Link>
                <Link
                  href="/About"
                  onClick={toggleMenu}
                  className="text-gray-800 hover:cursor-pointer hover:text-blue-200 block text-xl"
                >
                  About Us
                </Link>
                <Link
                  href="/Premium"
                  onClick={toggleMenu}
                  className="text-gray-800 hover:cursor-pointer hover:text-blue-200 block text-xl"
                >
                  Premium
                </Link>
                <button className="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded w-full text-center">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
