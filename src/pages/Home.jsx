import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ticket from "../assets/images/ticket.jpg";
import Event from "../components/Event";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="showcase bg-#060918 h-screen mb-8">
        <Navbar />

        <div className="showtext text-center">
          <h1 className="text-6xl text-white pt-20 font-bold">
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
          Featured Events
        </h1>
        <div className="flex  text-lg p-3 text-white justify-center">
          <h3>Check out trending events with KIN x Code</h3>
        </div>
        <div className="eventsec flex flex-wrap m-auto justify-around mt-10">
          <Event eventname="Event 1" eventdetails={"A lil details about the event desired"} />
          <Event eventname="Event 2" eventdetails={"A lil details about the event desired"} />
          <Event eventname="Event 3" eventdetails={"A lil details about the event desired"} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
