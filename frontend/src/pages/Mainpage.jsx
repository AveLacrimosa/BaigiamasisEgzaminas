import React, { useEffect, useState } from "react";
import axios from "axios";

const Mainpage = () => {
    const [events, setEvents] = useState([])
    
    useEffect(() => {
        fetchEvents();
    },[])
    
    const fetchEvents = () => {
        axios
          .get('http://localhost:3000/api/goals')
          .then((res) => {
            console.log(res);
            setEvents(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return(
    <div className="eventHeader">
        <h1>All events</h1>
        <div>
        {events.map((event) => (
            <div className="eventCard" key={event._id}>
                <h1>{event.text}</h1>
                <p>{event.description}</p>
                <img src={event.imageUrl} alt=""></img>
            </div>
        ))}
        </div>
    </div>
  )
};

export default Mainpage;
