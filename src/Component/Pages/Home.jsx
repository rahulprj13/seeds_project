import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { CategoryContext } from "../Context.jsx/CategoryContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCarrot,
  faAppleWhole,
  faSeedling,
  faTruck,
  faShieldHalved,
  faCreditCard,
  faHeadset,
  faWheatAwn,
  faMoneyBillWave
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {

  const { categoryData, categories } = useContext(CategoryContext);

  const catObj = [
    { name: "Vegetable Seeds", icon: faCarrot, catName: "vegetable" },
    { name: "Fruits Seeds", icon: faAppleWhole, catName: "fruits" },
    { name: "Flowers Seeds", icon: faSeedling, catName: "flowers" }
  ];

  return (
    <div>

      {/* ✅ HERO SECTION */}
      <div className="bg-linear-to-r from-green-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="grid lg:grid-cols-2 items-center gap-10">

            <div>
              <h1 className="text-5xl font-extrabold leading-tight">
                Grow Your Dream Garden
              </h1>

              <p className="text-xl mt-4 text-green-100">
                Premium quality seeds delivered to your doorstep.
                Start your farming journey today!
              </p>

              {/* <Link
                to="/products"
                className="inline-block bg-gray-900 hover:bg-black transition text-white px-7 py-3 rounded-lg mt-8 text-lg shadow-lg"
              >
                Shop Now
              </Link> */}
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1592150621744-aca64f48394a"
                alt="seeds"
                className="rounded-2xl shadow-2xl w-full hover:scale-105 transition duration-500"
              />
            </div>

          </div>
        </div>
      </div>


      {/* ✅ CATEGORIES */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-center mb-14 font-extrabold text-4xl">
          Shop By Category
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {catObj.map((cat, index) => (
            <div
              key={index}
              className="
                group
                text-center
                shadow-md
                hover:shadow-3xl
                rounded-2xl
                p-8
                bg-gray-200
                transition
                hover:-translate-y-1
              "
            >

              <FontAwesomeIcon
                icon={cat.icon}
                className="text-green-600 text-6xl group-hover:scale-110 transition"
              />

              <h5 className="mt-6 text-xl font-bold">
                {cat.name}
              </h5>

              <NavLink
                to={`/category/${cat.catName}`}
                className="
                  inline-block
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  px-5
                  py-2
                  rounded-lg
                  mt-6
                  shadow
                "
              >
                Explore
              </NavLink>
            </div>
          ))}
        </div>
      </div>


      {/* ✅ SERVICES */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-center font-extrabold mb-14 text-4xl">
            Our Services
          </h2>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

            {[
              {
                icon: faTruck,
                title: "Free Delivery",
                desc: "Get free delivery on orders above ₹5000 anywhere in India."
              },
              {
                icon: faSeedling,
                title: "High Quality Seeds",
                desc: "100% tested seeds with high germination rate."
              },
              {
                icon: faCreditCard,
                title: "Secure Payment",
                desc: "Safe and multiple payment methods for easy checkout."
              },
              {
                icon: faHeadset,
                title: "24/7 Support",
                desc: "Our support team is always ready to help you."
              }
            ].map((service, i) => (

              <div
                key={i}
                className="
                  bg-white
                  rounded-2xl
                  p-8
                  text-center
                  shadow-md
                  hover:shadow-xl
                  transition
                "
              >

                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-green-600 text-5xl"
                />

                <h5 className="mt-5 font-bold text-lg">
                  {service.title}
                </h5>

                <p className="text-gray-500 mt-2">
                  {service.desc}
                </p>

              </div>
            ))}

          </div>
        </div>
      </div>


      {/* ✅ WHY CHOOSE US */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-center font-extrabold mb-14 text-4xl">
          Why Choose SeedStore?
        </h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">

          <div>
            <FontAwesomeIcon icon={faWheatAwn} className="text-green-600 text-6xl" />
            <h5 className="mt-5 font-bold text-lg">Premium Quality</h5>
            <p className="mt-2 text-gray-600">
              Carefully tested seeds with high germination rate.
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faTruck} className="text-green-600 text-6xl" />
            <h5 className="mt-5 font-bold text-lg">Fast Delivery</h5>
            <p className="mt-2 text-gray-600">
              Quick and reliable shipping across the country.
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faMoneyBillWave} className="text-green-600 text-6xl" />
            <h5 className="mt-5 font-bold text-lg">Best Prices</h5>
            <p className="mt-2 text-gray-600">
              Affordable products without compromising quality.
            </p>
          </div>

        </div>
      </div>


      {/* ✅ DISCOUNT BANNER */}
      <div className="bg-gray-900 text-white text-center py-20">
        <h2 className="font-extrabold text-4xl">
          Get 20% Off On Your First Order!
        </h2>

        <p className="mt-3 text-green-400 text-lg">
          Use code: SEED2026
        </p>

        <Link
          to="/products"
          className="inline-block bg-green-600 hover:bg-green-700 px-7 py-3 rounded-lg mt-8 text-lg shadow-lg"
        >
          Start Shopping
        </Link>
      </div>


      {/* ✅ CALL TO ACTION */}
      <div className="max-w-7xl mx-auto py-20 px-4 text-center">
        <h2 className="font-extrabold text-4xl">
          Ready to Grow Something Amazing?
        </h2>

        <p className="text-xl mt-3 text-gray-600">
          Join thousands of happy farmers and gardeners.
        </p>

        <Link
          to="/register"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-lg mt-8 text-lg shadow-lg"
        >
          Create Account
        </Link>
      </div>

    </div>
  );
};

export default Home;