import React from "react";
import Button from "./Button";
import codeimg from '../assets/images/codeimg.avif'
import { Link } from "react-router-dom";

const Event = ({eventname, eventdetails, eventid, collapse}) => {
  return (
    <div className="relative flex flex-col text-white mb-5 bg-#0b172b shadow-md bg-clip-border rounded-xl w-96">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-50">
        <img
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          alt="profile-picture"
        />
      </div>
      <div className="p-6 text-center">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {eventname}
        </h4>
        <p className="block mb-8 font-sans text-justify text-base antialiased font-medium leading-relaxed text-dark bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
        {eventdetails} {collapse && (<Link to={`/event/${eventid}`}><span className="text-yellow-500 cursor-pointer">... Read More</span></Link>)}
        </p>

        <div className="flex w-full">
        <Button btnText={"Buy Ticket"} btnlink={`/event/${eventid}`} />
        </div>
      </div>
    </div>
  );
};

export default Event;
