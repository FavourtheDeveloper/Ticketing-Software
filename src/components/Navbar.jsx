import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-gray-800 p-4 lg:p-7 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg lg:text-6xl font-bold">
          <Link to={'/'}><h1 className="text-center">KinVent</h1></Link>
        </div>
        <a
          href="https://twitter.com/favourthedev"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden text-yellow-500"
        >
          <FaTwitter size={30} />
        </a>
        <div className={`lg:flex hidden`}>
          <ul className="flex sm:flex-col lg:flex-row lg:space-x-5 text-yellow-500 font-bold p-5 lg:text-xl">
            <Link to={"/"}>
              <li className="py-2 lg:py-0">Home</li>
            </Link>
            <Link to={"/events"}>
              <li className="py-2 lg:py-0">Events</li>
            </Link>
            <Link to={"/tickets"}>
              <li className="py-2 lg:py-0">My Tickets</li>
            </Link>
            <Link to="#">
              <FaTwitter size={30} />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
