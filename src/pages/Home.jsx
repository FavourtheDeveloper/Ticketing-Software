import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ticket from "../assets/images/ticket.jpg";
import Event from "../components/Event";
import Footer from "../components/Footer";

const Home = () => {
  const [events, setEvents] = useState([])
  const [collapse, setCollapse] = useState(true)


  useEffect(() => {
  const url = "/api/json-server";

  const getData = async() => {
    const res = await fetch(url);
    const data = await res.json();

    const homeData = data.slice(0, 3)
    setEvents(homeData)
  }

 getData()

  }, [])
  

  return (
    <div>
      <div className="showcase bg-#060918 h-screen mb-8">
        <Navbar />

        <div className="showtext text-center">
          <h1 className="text-3xl text-white pt-6 lg:pt-20 font-bold lg:text-6xl">
            Get Tickets Online for Your Event
          </h1>
          <p className="text-yellow-500 font-bold p-2">KIN x Code</p>
        </div>

        <div className="showsell text-center pt-10">
          <Button btnText="Get Tickets for Your Event" btnlink={'/events'} />
        </div>

        <div className="flex justify-center mt-10">
          <img src={ticket} className="w-2/12 lg:w-3/12 lg:h-3/14" />
        </div>
      </div>

      <div className="events">
        <h1 className="text-2xl lg:text-4xl lg:mt-24 font-bold text-yellow-500 text-center">
          Featured Events
        </h1>
        <div className="flex  text-lg p-3 text-white justify-center">
          <h3>Check out trending events with KIN x Code</h3>
        </div>
        <div className="eventsec flex flex-wrap m-auto justify-around mt-10">
    {events.map((event, index) => (
      <Event key={event.id} eventname={event.eventName} eventdetails={event.eventDetails.slice(0, 100)} eventid={event.id} collapse={collapse} />
    ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
