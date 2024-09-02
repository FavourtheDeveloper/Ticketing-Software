import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";


const Event = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [event, setEvent] = useState([])
const url = `http://localhost:3000/data/${id}`;
  useEffect(() => {
    const getEvents = async() => {
      const res = await fetch(url);
      const data = await res.json();
      setEvent(data)
    }

    getEvents()
  }, [])
  
  return (
    <div>
      <Navbar />

      <div className="eventdetails w-3/4 p-10 gap-20 flex justify-around m-auto">
        <div className="image w-1/2">
          <img
            src="https://docs.material-tailwind.com/img/team-3.jpg"
            alt="event-picture"
          />
        </div>
        <div className="eventdet mt-8 text-sm text-white w-1/2">
          <b>{event.date}</b>
          <h1 className="text-4xl p-1 font-bold">
            {event.eventName}
          </h1>
          <h2 className="text-lg mt-5 font-bold">About this event</h2>
          <p className="text-lg p-3 text-justify">
            {event.eventDetails}
          </p>
          <p className="text-lg"><b>Date: </b>{event.date}</p>
          <p className="text-lg mb-8"><b>Time: </b>{event.time}</p>
          <div >
          <Button btnlink={'/ticket'} btnText={"Get this Ticket"} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Event;
