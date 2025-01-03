import React from "react";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpeg";

// Service Data
const servicesData = [
  {
    id: 2,
    title: "Rent Rides",
    description:
      "Rent a car for as low as 50,000 Naira per day. Flexible and affordable options available.",
    image: service2,
  },
  {
    id: 1,
    title: "Travel With Ease",
    description:
      "Fast, reliable transit made for your convenience. Plan your journeys effortlessly.",
    image: service1,
  },
  {
    id: 3,
    title: "Send Parcels",
    description:
      "Simplify sending parcels with fast, secure, and reliable delivery services.",
    image: service3,
  },
  {
    id: 4,
    title: "Receive Parcels",
    description:
      "Worry-free parcel receiving with timely delivery right to your doorstep.",
    image: service4,
  },
  {
    id: 5,
    title: "Supermarket Delivery",
    description:
      "Get your groceries delivered straight to your door quickly and efficiently.",
    image: service5,
  },
];

const Services = () => {
  return (
    <div className="w-[90%] lg:w-[95%] py-8 mx-auto relative">
      {/* Header Section */}
      <div className="flex flex-col mb-8 justify-center items-center">
        <h1 className="text-3xl z-40 text-center font-bold">Our Services</h1>
        <p className="text-yellow-500 z-40 font-medium text-center text-sm mt-2">
          Simplifying the Art of Transportation
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative "
          >
            <div className="absolute -top-20 -right-20 z-20 bg-yellow-400/20 w-40 h-40 object-cover rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 z-20 bg-yellow-400/20 w-40 h-40 object-cover rounded-full"></div>
            {/* Image with Overlay */}
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Card Content */}
            <div className="p-6 text-center">
              <h3 className=" lg:text-lg font-bold ">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
