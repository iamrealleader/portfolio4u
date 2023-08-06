import { useEffect } from "react";
import Link from "next/link";
import Lottie from "lottie-react"
import blog from '@animations/blog.json'
import calculator from '@animations/calculator.json'
import clock from '@animations/clock.json'
import ticTac from '@animations/ticTac.json'

const Projects = () => {

  useEffect(() => {
    let revealDiv = document.querySelector(".reveal-projects");
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Reached the reveal section or end of the page');
          revealDiv.classList.add("active");
          // Perform any desired actions when reaching the reveal section or end of the page
        }
      });
    };
  
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1, // The target element is considered intersecting if 10% or more of it is visible
    };
  
    const observer = new IntersectionObserver(handleIntersect, options);
  
    // Observe the reveal element
    observer.observe(revealDiv);
  
    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);
  

  useEffect(() => {
    const projects = document.querySelectorAll('.project');
    const boxs = document.querySelectorAll('.box');

    const handleMouseMove = (e) => {
      const box = e.currentTarget;
      const project = e.currentTarget.firstChild;
      let firstChild = project.children[0];
      project.style = ' transition : none ; ';
      // console.log(project);
      // console.log(e.currentTarget.firstChild);
      const boxRect = box.getBoundingClientRect();

      const centerX = boxRect.left + boxRect.width / 2;
      const centerY = boxRect.top + boxRect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = Math.max(-boxRect.height / 2, Math.min(boxRect.height / 2, e.clientY - centerY));

      const maxTilt = 60; // Adjust this value to control the maximum tilt

      const tiltX = (mouseY / centerY) * maxTilt;
      const tiltY = -(mouseX / centerX) * maxTilt;

      project.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      firstChild.style.transform = `translateZ(30px)`;
    };

    const handleMouseLeave = (e) => {
      const project = e.currentTarget.firstChild;
      project.style = 'transition : all 1s ease ';
      project.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    boxs.forEach((box) => {
      box.addEventListener('mousemove', handleMouseMove);
      box.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      boxs.forEach((box) => {
        box.removeEventListener('mousemove', handleMouseMove);
        box.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);



  return (
    <div id="projects" className="reveal-projects py-16 bg-slate-50 mx-2 flex flex-col items-center">
      <div className="content w-[60vw]">
        <h1 className="myservices font-bold mb-3">My Projects</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap">
          <Link href={'https://mycodeblog.vercel.app'} target="_blank" className="box w-[22rem] flex justify-center items-center">
            <div className="project flex flex-col justify-center items-center my-5 project w-[20rem] p-4 bg-white shadow-lg rounded-lg">
              <div className="w-40 h-40 mx-auto mb-3">
                <Lottie animationData={blog}/>
              </div>
              <h1 className=" text-2xl font-bold">Code Blog</h1>
              <p className="my-2 mx-2 text-center">Code-blog: Discover, read, create, edit, and delete blogs! Explore a vibrant community, share your coding knowledge, and unleash your creativity on this interactive blogging platform with others.</p>
            </div>
          </Link>
          <Link href={'/calculator'} className="box w-[22rem] flex justify-center items-center">
            <div className="project flex flex-col justify-center items-center my-5 project w-[20rem] p-4 bg-white shadow-lg rounded-lg">
              <div className="w-40 h-40 mx-auto mb-3">
                <Lottie animationData={calculator}/>
              </div>
              <h1 className=" text-2xl font-bold">A Caculator</h1>
              <p className="my-2 mx-2 text-center">An interactive calculator made with HTML, CSS, and JavaScript for quick and easy calculations. Input numbers, perform operations, and get instant results. User-friendly design and intuitive interface.</p>
            </div>
          </Link>
          <Link href={'/tictac'} className="box w-[22rem] flex justify-center items-center">
            <div className="project flex flex-col justify-center items-center my-5 project w-[20rem] p-4 bg-white shadow-lg rounded-lg">
              <div className="w-40 h-40 mx-auto mb-3">
                <Lottie animationData={ticTac}/>
              </div>
              <h1 className=" text-2xl font-bold">A Tic tac toe game</h1>
              <p className="my-2 mx-2 text-center">Experience the classic Tic Tac Toe game brought to life with HTML, CSS, and JavaScript. Challenge friends, strategize, and claim victory in this interactive and engaging multiplayer game.</p>
            </div>
          </Link>
          <Link href={'/clock'} className="box w-[22rem] flex justify-center items-center">
            <div className="project flex flex-col justify-center items-center my-5 project w-[20rem] p-4 bg-white shadow-lg rounded-lg">
              <div className="w-40 h-40 mx-auto mb-3">
                <Lottie animationData={clock}/>
              </div>
              <h1 className=" text-2xl font-bold">A clock</h1>
              <p className="my-2 mx-2 text-center">Immerse yourself in the world of time with an interactive clock created using HTML, CSS, and JavaScript. Witness real-time updates, stylish design, and seamless functionality in this captivating timepiece.</p>
            </div>
          </Link>
      </div>
    </div>
  );
};

export default Projects;
