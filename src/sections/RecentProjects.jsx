import React from 'react'
import tutoring_img from '../images/tutoring-img.webp'
import gown_img from '../images/gown-img.webp'
import barber_img from '../images/barber-img.webp'
import applience_img from '../images/hillcrest-appliance-repairs-jpg.webp'
import { Navigate, useNavigate } from 'react-router-dom';

function RecentProjects() {
  const navigate = useNavigate();
  return (
    <section className="bg-background-2 py-12 flex flex-col justify-center  px-4 text-center">
      <div>
        <h1 className="text-4xl font-semibold text-heading-2 leading-tight text-center pb-3">
          Our Recent Work
        </h1>
        <p className="text-xl text-center max-w-2xl mx-auto leading-relaxed semibold text-sub-heading-2">
          Explore some of the custom websites we’ve designed and developed for
          businesses looking to improve their online presence.
        </p>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:pxp-40 lg:grid-cols-3 justify-items-center mx-auto pt-8 gap-12  ">
        <a
          href="https://www.teamworktutors.co.za"
          target="_blank"
          rel="noopener nonferrer"
        >
          <div className="w-65 shadow-2xl rounded-lg hover:bg-blue-600 focus:bg-gray-200 transition-colors duration-300">
            <div className=" ">
              <img
                loading="lazy"
                src={tutoring_img}
                alt="project 1 "
                className="object-cover rounded-t-lg h-90 w-full "
              />
            </div>
            <div className="bg-background-1 text-center py-4 rounded-b-lg  text-xl font-semibold text-sub-heading-1 ">
              Tutoring Website
            </div>
          </div>
        </a>
<a
          href="https://xenobyte012.github.io/appliance-repair-site/"
          target="_blank"
          rel="noopener nonferrer"
        >
        <div className="w-65 shadow-2xl rounded-lg hover:bg-blue-600 focus:bg-gray-200 transition-colors duration-300">
          <div className=" ">
            <img
              loading="lazy"
              src={applience_img}
              alt="project 2 "
              className="object-cover  rounded-t-lg  h-90 w-full"
            />
          </div>
          <div className="bg-background-1 text-center py-4 rounded-b-lg  text-xl font-semibold text-sub-heading-1 ">
            Applience Repair 
          </div>
        </div>
        </a>
        <div
          onClick={() => navigate('/barber')}
          className="w-65 shadow-2xl rounded-lg hover:bg-blue-600 focus:bg-gray-200 transition-colors duration-300">
            <div className="rounded-t-xl ">
              <img
                loading="lazy"
                src={barber_img}
                alt="project 3 "
                className="object-cover rounded-t-lg  h-90 w-full"
              />
            </div>
            <div className="bg-background-1 text-center py-4 rounded-b-lg  text-xl font-semibold text-sub-heading-1 ">
              Fresh Cut Barber
            </div>
          </div>
        
      </div>
    </section>
  );
}

export default RecentProjects