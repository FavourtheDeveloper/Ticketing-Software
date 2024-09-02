import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ticket from "../assets/images/ticket.jpg";
import Event from "../components/Event";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="showcase bg-gray-100 h-screen mb-8">
        <Navbar />

        <div className="showtext text-center">
          <h1 className="text-6xl text-blue-900 pt-20 font-bold">
            Sell Tickets Online for Your Event
          </h1>
          <p className="text-yellow-500 font-bold p-2">KIN x Code</p>
        </div>

        <div className="showsell text-center pt-10">
          <Button btnText="Sell Tickets for Your Event" />
        </div>

        <div className="flex justify-center mt-10 tick">
          <img src={ticket} className="w-3/12 h-3/14" />
        </div>
      </div>

      <div className="events mt-32">
        <h1 className="text-4xl font-bold text-yellow-500 text-center">
          Search for Events
        </h1>
        <div className="flex justify-center">
          <input
            type="text"
            className="block w-2/4 rounded-md border-0 py-1.5 pl-7 mt-6 pr-20 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search for desired events"
          />
        </div>
        <div className="eventsec flex flex-wrap m-auto justify-around mt-10">
          <Event eventname="Event 1" eventdetails={"A lil details about the event desired"} />
          <Event eventname="Event 2" eventdetails={"A lil details about the event desired"} />
          <Event eventname="Event 3" eventdetails={"A lil details about the event desired"} />
          <Event eventname="Event 4" eventdetails={"A lil details about the event desired"} />
          <Event eventname="Event 5" eventdetails={"A lil details about the event desired"} />
          <Event eventname="Event 6" eventdetails={"A lil details about the event desired"} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
