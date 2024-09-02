import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";

const Event = () => {
  return (
    <div>
      <Navbar />

      <div className="eventdetails w-3/4 gap-20 flex justify-around m-auto mt-15">
        <div className="image w-1/2">
          <img
            src="https://docs.material-tailwind.com/img/team-3.jpg"
            alt="event-picture"
          />
        </div>
        <div className="eventdet w-1/2">
          <b>Thursday, Sept 1st</b>
          <h1 className="text-4xl p-1 font-bold">
            KIN x Code Hackathon Competition <br /> Program
          </h1>
          <h2 className="text-2xl mt-5 font-bold">About this event</h2>
          <p className="text-xl p-3 text-justify">
            Are you feeling stuck or unhappy in certain areas of your life? Join
            us for a transformative online event where we will dive deep into
            uncovering the root causes of your discontent.
          </p>
          <p className="text-lg"><b>Date: </b>Thursday, September 19, 2024</p>
          <p className="text-lg mb-5"><b>Time: </b>12:00 PM EDT</p>
          <div >
          <Button btnText={"Get this Ticket"} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Event;
