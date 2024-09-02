import React from "react";
import Button from "./Button";
import codeimg from '../assets/images/codeimg.avif'

const Event = ({eventname, eventdetails}) => {
  return (
    <div class="relative flex flex-col text-white mb-5 bg-#0b172b shadow-md bg-clip-border rounded-xl w-96">
      <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
        <img
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          alt="profile-picture"
        />
      </div>
      <div class="p-6 text-center">
        <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {eventname}
        </h4>
        <p class="block mb-5 font-sans text-base antialiased font-medium leading-relaxed text-dark bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
        {eventdetails}
        </p>

        <Button btnText={"Buy Ticket"} btnlink={"/event"} />
      </div>
    </div>
  );
};

export default Event;
