import React, { useEffect, useRef } from "react";
import "./hufflepuff-schedule.css";

const hufflepuff_schedule = () => {
    const events = [
        {
          id: 1,
          title: "INTER COLLEGE HACKATHON",
          venue: "CG02",
          date: "27 March 2025",
          time: "09:00 am -11:00am",
          image: "/sample-image.png" 
        },
        {
          id: 2,
          title: "CAPTURE THE FLAG",
          venue: "CG02",
          date: "27 March 2025",
          time: "09:00 am -11:00am",
          image: "/sample-image.png" 
        },
        {
            id: 3,
            title: "CODE FIESTA",
            venue: "CG02",
            date: "27 March 2025",
            time: "09:00 am -11:00am",
            image: "/sample-image.png" 
        },
        {
            id: 4,
            title: "TECH TALK",
            venue: "CG02",
            date: "27 March 2025",
            time: "09:00 am -11:00am",
            image: "/sample-image.png" 
        },
        {
            id: 5,
            title: "ROBO SOCCER",
            venue: "CG02",
            date: "27 March 2025",
            time: "09:00 am -11:00am",
            image: "/sample-image.png" 
        },
        {
            id: 6,
            title: "ROBO SUMO",
            venue: "CG02",
            date: "27 March 2025",
            time: "09:00 am -11:00am",
            image: "/sample-image.png" 
        },
        {
            id: 7,
            title: "INVENTO EXPO",
            venue: "CG02",
            date: "27 March 2025",
            time: "09:00 am -11:00am",
            image: "/sample-image.png" 
        },
        {
            id: 8,
            title: "CIRCUIT DESIGNING",
            venue: "CG02",
            date: "27 March 2025",
            time: "09:00 am -11:00am",
            image: "/sample-image.png" 
        },
    ];

    const eventCardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        eventCardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => {
            eventCardsRef.current.forEach(card => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
      <div className="hufflepuff-b">
        <div className="hufflepuff-events-grid">
        {events.map((event, index) => (
          <div key={event.id} className="hufflepuff-event-card" ref={el => eventCardsRef.current[index] = el}>
            <div className="hufflepuff-event-image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="hufflepuff-event-details">
              <h2 className="hufflepuff-event-title">{event.title}</h2>
              <div className="hufflepuff-event-info">
                <p className="hufflepuff-event-venue">Venue: {event.venue}</p>
                <p className="hufflepuff-event-date">{event.date}</p>
                <p className="hufflepuff-event-time">{event.time}</p>
                <div className="hufflepuff-event-hover-content">
                  <p className="hufflepuff-event-description">Description of the event goes here.</p>
                  <button className="hufflepuff-register-button">Register</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
};

export default hufflepuff_schedule;