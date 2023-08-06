"use client"
import React, { useEffect } from "react";
import Link from "next/link";

const Footer = () => {

  useEffect( ()=>{
    let footer = document.querySelector(".footerSection");
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.tagName === 'FOOTER') {
            console.log('Reached the footer section or end of the page');
            footer.classList.add("active");
            // Perform any desired actions when reaching the footer section or end of the page
          }
        }
      });
    };
    
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1, // The target element is considered intersecting if 10% or more of it is visible
    };
    
    const observer = new IntersectionObserver(handleIntersect, options);
    
    // Observe the footer element
    const footerElement = document.querySelector('footer');
    observer.observe(footerElement);
  },[])

  return (
    <div className="footerSection">
    <footer className="pt-10 text-black font-bold bg-slate-100 body-font w-[95vw] mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-5 md:gap-20">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="title-font font-bold text-lg text-gray-900 tracking-widest mb-3">
              Quick links
            </h2>
            <nav className="list-none mb-10">
              <li className="links link1">
                <Link href="/" className="text-black font-bold hover:text-gray-500 hover:ml-1">
                  Home
                </Link>
              </li>
              <li className="links link2">
                <Link href="/blogs/all" className="text-black font-bold hover:text-gray-500 hover:ml-1">
                  Blogs
                </Link>
              </li>
              <li className="links link3">
                <Link href="/about" className="text-black font-bold hover:text-gray-500 hover:ml-1">
                  About us
                </Link>
              </li>
              <li className="links link4">
                <Link href="/contact" className="text-black font-bold hover:text-gray-500 hover:ml-1">
                  Contact us
                </Link>
              </li>
            </nav>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="title-font font-bold text-lg  text-gray-900 tracking-widest mb-3">
              Social links
            </h2>
            <nav className="list-none mb-10">
              <li className="flex links link5">
                <Link
                  href="/"
                  className="text-black font-bold hover:text-gray-500 hover:ml-1 flex"
                >
                  <svg
                    viewBox="0 0 960 1000"
                    fill="currentColor"
                    height="1.3rem"
                    width="1.3rem"
                    className="mr-2 text-blue-500"
                  >
                    <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
                  </svg>
                  Linkdin
                </Link>
              </li>
              <li className="links link6">
                <Link
                 href="https://www.facebook.com/?_rdc=1&_rdr" target='_blank'
                  className="text-black font-bold hover:text-gray-500 hover:ml-1 flex"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1.3rem"
                    width="1.3rem"
                    className="mr-2 text-blue-700"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                  Facebook
                </Link>
              </li>
              <li className="links link7">
                <Link
                  href="https://www.instagram.com/iamrealsabir" target="_blank"
                  className="text-black font-bold hover:text-gray-500 hover:ml-1 flex"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1.3rem"
                    width="1.3rem"
                    className="mr-2 text-pink-500"
                  >
                    <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
                  </svg>
                  Instagram
                </Link>
              </li>
              <li className="links link8">
                <Link
                  href="https://wa.me/+923416419195" target="_blank"
                  className="text-black font-bold hover:text-gray-500 hover:ml-1 flex"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1.3rem"
                    width="1.3rem"
                    className="mr-2 text-green-500"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 00-.371.1 1.293 1.293 0 00-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 006.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 003.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 00.833-.231 4.83 4.83 0 00.383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 00-.177-.041.482.482 0 00-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 01-.368.13 1.416 1.416 0 01-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 01-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 01-1.02-1.268l-.059-.095a.923.923 0 01-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 00.263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 00-.403.004z" />
                  </svg>
                  Whatsapp
                </Link>
              </li>
            </nav>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="title-font font-bold  text-gray-900 tracking-widest text-lg mb-3">
              More
            </h2>
            <nav className="list-none mb-10">
              <li className="links link9">
                <Link href="/contact" className=" text-black font-bold hover:text-gray-500 hover:ml-1">
                  Helps
                </Link>
              </li>
              <li className="links link10">
                <Link href="/contact" className=" text-black font-bold hover:text-gray-500 hover:ml-1">
                  Privacy
                </Link>
              </li>
              <li className="links link11">
                <Link href="/contact" className=" text-black font-bold hover:text-gray-500 hover:ml-1">
                  terms
                </Link>
              </li>
              <li className="links link12">
                <Link href="/contact" className=" text-black font-bold hover:text-gray-500 hover:ml-1">
                  FAQs
                </Link>
              </li>
            </nav>
          </div>
        </div>
      <div className="w-full bg-gray-100">
        <div className="mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 Porfolio4u —
            <Link
              href="/"
              rel="noopener noreferrer"
              className="text-black font-bold ml-1"
              target="_blank"
            >
              @Porfolio4u
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link href="https://www.facebook.com/?_rdc=1&_rdr" className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link href="https://wa.me/+923416419195" className="ml-3 text-gray-500">
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1.3rem"
                    width="1.3rem"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 00-.371.1 1.293 1.293 0 00-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 006.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 003.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 00.833-.231 4.83 4.83 0 00.383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 00-.177-.041.482.482 0 00-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 01-.368.13 1.416 1.416 0 01-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 01-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 01-1.02-1.268l-.059-.095a.923.923 0 01-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 00.263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 00-.403.004z" />
                  </svg>
            </Link>
            <Link href="https://www.instagram.com/iamrealsabir" className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link href="/" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
