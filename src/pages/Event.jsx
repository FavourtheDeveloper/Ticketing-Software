import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useNavigate, useParams, Link } from "react-router-dom";
import Modal from "react-modal";
import code from "../assets/images/codeimg.avif";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


const Event = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [event, setEvent] = useState([]);
  const url = `/api/data/${id}`;
  useEffect(() => {
    const getEvents = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setEvent(data);
    };

    getEvents();
  }, []);

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Navbar />

      <div className="eventdetails lg:w-3/4 p-10 lg:gap-20 lg:flex lg:justify-around m-auto">
        <div className="image flex justify-center lg:w-1/2">
          <img
            src="https://docs.material-tailwind.com/img/team-3.jpg"
            alt="event-picture"
          />
        </div>
        <div className="eventdet mt-8 text-sm text-white lg:w-1/2">
          <b>{event.date}</b>
          <h1 className="text-2xl  lg:text-4xl p-1 font-bold">{event.eventName}</h1>
          <h2 className="text-lg mt-5 text-center font-bold">About this event</h2>
          <p className="text-lg p-3 text-justify">{event.eventDetails}</p>
          <p className="text-lg">
            <b>Date: </b>
            {event.date}
          </p>
          <p className="text-lg mb-8">
            <b>Time: </b>
            {event.time}
          </p>
          <div>
            {/* <Button btnlink={`/ticket/${id}`} btnText={"Get this Ticket"} /> */}
            <button
              onClick={openModal}
              className="bg-blue-900 text-white p-3 rounded-xl hover:bg-white hover:text-yellow-500"
            >
              Get This Ticket
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-red-500 p-1 text-white rounded-lg"
                >
                  close
                </button>
              </div>
              <div class="w-full max-w-xs">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="fullname"
                    >
                      Full Name
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="fullname"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your Full Name"
                      required
                    />
                  </div>
                  <div class="flex items-center justify-around">
                    <Link to={`/generate/${name}`} ><button
                      class="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      disabled={!name}
                    >
                      Generate Ticket{" "}
                      <img src={code} className="w-4 h-4 ml-2 mt-1" />
                    </button></Link>
                  </div>
                </form>
                <p class="text-center text-gray-500 text-xs">
                  &copy;2024 FavourtheDev All rights reserved.
                </p>
              </div>
            </Modal>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Event;
