import React from "react";
import heroImage from "../images/hero-img.webp";

function HeroSection() {
// Smooth scroll to contact section
const scrollToContact = () => {
const section = document.getElementById("contact");
if (section) {
section.scrollIntoView({ behavior: "smooth" });
}
};

return ( <section
   id="home"
   className="relative bg-gradient-to-r from-blue-800 to-slate-800 text-white"
 >
{/* Background Image */} <img
     src={heroImage}
     alt="Website design hero"
     loading="lazy"
     className="w-full h-700px] md:h-[700px] object-cover"
   />


  {/* Overlay Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 bg-black/40">
    
    {/* Heading */}
    <h1 className="text-3xl md:text-6xl font-bold leading-tight max-w-2xl">
      Custom Websites That Help Your Business Grow Online
    </h1>

    {/* Subheading */}
    <p className="text-lg md:text-xl mt-4 max-w-xl text-gray-200">
      Custom websites designed with performance, speed, and user
      experience to help your business succeed online.
    </p>

    {/* Call To Action Button */}
    <button
      onClick={scrollToContact}
      className="mt-6 bg-gradient-to-r from-blue-600 to-slate-700 px-6 py-3 rounded-full text-lg font-medium hover:scale-105 transition duration-300"
    >
      Book a Free Call
    </button>
  </div>
</section>


);
}

export default HeroSection;
