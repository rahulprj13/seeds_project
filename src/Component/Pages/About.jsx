import React from "react";
import img from "../../assets/Images/background3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faTractor,
  faRocket,
  faCheckCircle,
  faTruckFast,
  faComments,
  faLeaf
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>

      {/* Hero Section */}
      <div
        className="h-75 flex items-center justify-center text-white text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="bg-black/50 p-5 rounded-lg">
          <h1 className="text-3xl font-bold">About Our Seeds Store</h1>
          
          <p className="mt-2 text-lg flex items-center justify-center gap-2">
            Growing the Future with Quality Seeds 
            <FontAwesomeIcon icon={faSeedling} />
          </p>
        </div>
      </div>

      {/* Company Intro */}
      <div className="max-w-6xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Who We Are
        </h2>

        <p className="text-lg text-center">
          Welcome to our Seeds E-commerce platform! We are dedicated to providing
          farmers, gardeners, and agriculture enthusiasts with the highest
          quality seeds to ensure better growth and higher yields. Our goal is
          to support sustainable farming and help you cultivate success.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 text-center">

          <div className="shadow-lg p-6 rounded-lg h-full">
            <FontAwesomeIcon icon={faTractor} size="2x" className="mb-3 text-green-600"/>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>
              Our mission is to empower farmers with premium seeds, modern
              agricultural solutions, and reliable services that enhance crop
              productivity and profitability.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-lg h-full">
            <FontAwesomeIcon icon={faRocket} size="2x" className="mb-3 text-green-600"/>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p>
              To become a trusted global platform for seed distribution,
              promoting innovation, sustainability, and food security for
              future generations.
            </p>
          </div>

        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="shadow-lg p-6 rounded-lg h-full">
            <FontAwesomeIcon icon={faCheckCircle} size="2x" className="text-green-600"/>
            <h4 className="text-lg font-semibold mt-3">High Quality Seeds</h4>
            <p className="mt-2">
              Carefully tested seeds to ensure maximum germination.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-lg h-full">
            <FontAwesomeIcon icon={faTruckFast} size="2x" className="text-green-600"/>
            <h4 className="text-lg font-semibold mt-3">Fast Delivery</h4>
            <p className="mt-2">
              Quick and safe delivery directly to your doorstep.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-lg h-full">
            <FontAwesomeIcon icon={faComments} size="2x" className="text-green-600"/>
            <h4 className="text-lg font-semibold mt-3">Expert Support</h4>
            <p className="mt-2">
              Get farming guidance from experienced professionals.
            </p>
          </div>

        </div>
      </div>

      {/* Farmer Support Section */}
      <div className="bg-green-50 py-12 px-5 text-center">
        <h2 className="text-2xl font-semibold flex items-center justify-center gap-2">
          Supporting Farmers, Growing Together 
          <FontAwesomeIcon icon={faLeaf} className="text-green-600"/>
        </h2>

        <p className="max-w-2xl mx-auto text-lg mt-3">
          We believe farmers are the backbone of our nation. Our platform is
          designed to simplify the seed purchasing process while offering
          trusted products that help farmers achieve better harvests.
        </p>
      </div>

      {/* Call To Action */}
      <div className="max-w-6xl mx-auto text-center my-12 px-4">
        <div className="shadow-xl p-10 rounded-lg">
          <h2 className="text-2xl font-semibold">Ready to Grow With Us?</h2>
          <p className="mt-2">
            Explore our wide range of seeds and start your farming journey today.
          </p>

          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg transition">
            Shop Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default About;