import Lottie from "lottie-react"
import webDevelopment from '@animations/webDevelopment.json'
import webDesign from '@animations/webDesign.json'
import responsive from '@animations/responsive.json'
import debugging from '@animations/debugging.json'
import seo from '@animations/seo.json'

const Services = () => {
  return (
    <div className="services bg-white mx-2 my-5 md:my-10 flex flex-col items-center">
      <div className="content w-[60vw]">
        <h1 className="myservices text-xl md:text-3xl font-bold mb-3 my-5 md:my-10 poppin">My Services</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap">
          <div className="service rounded-xl flex flex-col justify-center items-center mx-3 my-5 w-[25rem] p-4" >
            <div className="w-32 h-32 mx-auto mb-3">
            <Lottie className="pop" animationData={webDevelopment}/>
            </div>
            <h1 className="Playfair-Display my-3 text-2xl font-bold">Web Development</h1>
            <p className="roboto my-2 mx-2 text-center">I specialize in developing high-quality websites and web applications using the latest technologies. From front-end development to full-stack solutions, I create dynamic and interactive experiences tailored to your needs.</p>
          </div>
          <div className="service rounded-xl flex flex-col justify-center items-center mx-3 my-5 w-[25rem] p-4" >
            <div className="w-32 h-32 mx-auto mb-3">
            <Lottie className="pop" animationData={webDesign}/>
            </div>
            <h1 className="Playfair-Display my-3 text-2xl font-bold">Web Design</h1>
            <p className="roboto my-2 mx-2 text-center">I design visually appealing and user-friendly interfaces that enhance the overall user experience. I focus on creating intuitive layouts, selecting harmonious color schemes, and incorporating modern design trends.</p>
          </div>
          <div className="service rounded-xl flex flex-col justify-center items-center mx-3 my-5 w-[25rem] p-4" >
            <div className="w-32 h-32 mx-auto mb-3">
            <Lottie className="pop" animationData={seo}/>
            </div>
            <h1 className="Playfair-Display my-3 text-2xl font-bold">Seo Freindly</h1>
            <p className="roboto my-2 mx-2 text-center">As part of my service, I ensure that the website is Seo freindly , fast , reliable and User-friendly. and the the website gets high scores in google seo and load fat as we try to use latest technologies</p>
          </div>
          <div className="service rounded-xl flex flex-col justify-center items-center mx-3 my-5 w-[25rem] p-4" >
            <div className="w-32 h-32 mx-auto mb-3">
            <Lottie className="pop w-48 h-48" animationData={debugging}/>
            </div>
            <h1 className="Playfair-Display my-3 text-2xl font-bold">Free Debugging</h1>
            <p className="roboto my-2 mx-2 text-center">I offer free debugging services to identify and resolve issues that may arise in your website or web application. I have extensive experience in troubleshooting and can help ensure that your project runs smoothly.</p>
          </div>
          <div className="service rounded-xl flex flex-col justify-center items-center mx-3 my-5 w-[25rem] p-4" >
            <div className="w-32 h-32 mx-auto mb-3 object-cover">
            <Lottie className="pop w-48 h-48" animationData={responsive}/>
            </div>
            <h1 className="Playfair-Display my-3 text-2xl font-bold">Responsive website</h1>
            <p className="roboto my-2 mx-2 text-center">I prioritize creating responsive websites that adapt seamlessly to different devices and screen sizes. Additionally, I focus on designing user-friendly interfaces, optimizing navigation, and providing an enjoyable browsing experience.</p>
          </div>
      </div>
    </div>
  );
};

export default Services;
