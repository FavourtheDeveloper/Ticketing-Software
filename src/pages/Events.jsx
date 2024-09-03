import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import Event from '../components/Event'

const Events = () => {
    const [events, setEvents] = useState([])
    const [collapse, setCollapse] = useState([])
    const [search, setSearch] = useState()

    const url = 'http://localhost:3000/data'
      useEffect(() => {
        const getEvents = async() => {
          const res = await fetch(url);
          const data = await res.json();
          const filteredData = data.filter(event => event.eventName.toLowerCase().includes(search))
          if (search) {
            setEvents(filteredData)
          } else {
            setEvents(data)
          }
        }
    
        getEvents()
      }, [search]) 

      const filterSearch = (e) => {
        setSearch(e.target.value);
      }

      console.log(search);
      
  return (
    <div>
        <Navbar />

        <div className="events lg:mt-32">
        <h1 className="text-2xl lg:text-4xl font-bold text-yellow-500 text-center">
          Search for Events
        </h1>
        <div className="flex justify-center">
          <input
            type="text"
            value={search}
            onChange={filterSearch}
            className="block w-3/4 lg:w-2/4 rounded-md border-0 py-1.5 pl-2 lg:pl-7 mt-6 lg:pr-20 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search for desired events"
          />
        </div>
        <div className="eventsec flex flex-wrap m-auto justify-around mt-10">
            {events.map((event, index) => (
                <Event key={event.id} eventname={event.eventName} eventdetails={event.eventDetails.slice(0, 100)} eventid={event.id} collapse={collapse} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Events