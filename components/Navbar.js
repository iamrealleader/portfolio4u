"use client"
import Link from "next/link";
import { useState , useContext } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
      <nav className="fixed left-0 top-0 z-10 w-full backdrop-blur shadow-lg">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="toggle flex items-center justify-between py-3 md:py-5 md:block">
              <div className="logo flex justify-center items-center gap-1">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="2rem"
              width="2rem"
              className="text-pink-400"
            >
              <path d="M471.46 194.62v-.07c-.22-.76-.45-1.52-.68-2.28-.05-.19-.11-.38-.17-.56-.43-1.44-.87-2.88-1.33-4.31l-.06-.2a223.24 223.24 0 00-10-25.56 191.77 191.77 0 00-12.9-23.8 225.15 225.15 0 00-74.74-73.74A222.9 222.9 0 00256 32c-7 0-14 .34-20.82 1-24.12 2.54-64.78 11.21-97.77 40.18C257.5 11.86 417.94 85.7 404.29 223c-4.86 49-46.46 82.67-85.19 88.35a73.73 73.73 0 01-20.8.21c-94.59-13.15-88.8-90.68-60.06-123.83-38-.24-67.47 46.79-53.15 93-32.95-61.18.35-157 70.93-186-82.95-12-160.71 28.2-185.7 98.07A330.23 330.23 0 0188.07 118s-45.22 35.74-54.44 110.9c-.14 1.16-.27 2.32-.39 3.49-.05.4-.09.8-.13 1.21q-.53 5.25-.8 10.57v.81c-.07 1.48-.13 3-.17 4.46v1.25c0 1.76-.07 3.52-.07 5.29 0 123.71 100.29 224 224 224S480 379.71 480 256a224 224 0 00-8.54-61.38z" />
            </svg>
              <h2 className="text-2xl gradient-text font-bold font-serif">
                Portfolio4u
              </h2>
              </div>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li onClick={() => setNavbar(!navbar)} className="toggleone font-bold text-black hover:text-yellow-600">
                  <Link href="/">Home</Link>
                </li>
                <li onClick={() => setNavbar(!navbar)} className="toggleone font-bold text-black hover:text-yellow-600">
                  <a href="#projects">Projects</a>
                </li>
                <li onClick={() => setNavbar(!navbar)} className="toggleone font-bold text-black hover:text-yellow-600">
                  <a href="#services">Services</a>
                </li>
                <li  onClick={() => setNavbar(!navbar)} className="togglethree font-bold text-black hover:text-yellow-600">
                  <Link href="/contact">Contact US</Link>
                </li>
                <li  onClick={() => setNavbar(!navbar)} className="toggletwo font-bold text-black hover:text-yellow-600">
                  <Link href="/about">About US</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
