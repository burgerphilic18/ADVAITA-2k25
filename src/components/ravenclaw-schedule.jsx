import React, { useEffect, useRef } from "react";
import "./ravenclaw-schedule.css";

const RavenclawSchedule = () => {
    const events = [
        {
          id: 1,
          title: "PHOTO GALLERY",
          venue: "C310",
          date: "27-30 March 2025",
          time: "Open All Time",
          image: "/sample-image.png" ,
          description: "Embark on a visual journey at our Photogallery event, where every snapshot tells a unique story! Capture the essence of life through your lens and submit your best photos for a chance to showcase your talent in our upcoming exhibition. Let your creativity shine and be part of the visual masterpiece!",
          link: ""
        },
        {
          id: 2,
          title: "ADVAITA IN 30 SECONDS",
          venue: "ONLINE",
          date: "27-30 March 2025",
          time: "Open All Time",
          image: "/sample-image.png" ,
          description:"Capturing moments that tell a thousand stories at Imagen, where the magic of photography and videography unfolds in fascinating frames. Join us on a visual journey as we explore the art of storytelling through the lens—one frame, one motion, one masterpiece at a time.",
          link: "https://unstop.com/p/advaita-in-30-sec-imagen-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bh-1414024"
        },
        {
            id: 3,
            title: "THEME PHOTOGRAPHY",
            venue: "ONLINE",
            date: "27-30 March 2025",
            time: "Open All Time",
            image: "/sample-image.png" ,
            description: "Step into the world of Theme Photography, where every shot is a carefully crafted story. From vintage nostalgia to futuristic visions, we bring concepts to life through stunning visuals. Whether it's cinematic moods, fantasy realms, or conceptual artistry, our lens captures the essence of your theme with creativity and precision.",
            link: "https://unstop.com/p/theme-photography-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhubanesw-1414037"
        },
        {
            id: 4,
            title: "SHORT AFTERMOVIE",
            venue: "ONLINE",
            date: "27-30 March 2025",
            time: "Open All Time",
            image: "/sample-image.png" ,
            description: "Capturing moments that tell a thousand stories at Imagen, where the magic of photography and videography unfolds in fascinating frames. Join us on a visual journey as we explore the art of storytelling through the lens—one frame, one motion, one masterpiece at a time.",
            link: "https://unstop.com/p/advaita-short-aftermovie-imagen-advaita-annual-techno-cultural-fest-international-institute-of-information-technology--1414032"
        },
        {
            id: 5,
            title: "TREASURE HUNT",
            venue: "AG01",
            date: "28 March 2025",
            time: "09:00 am - 1:00pm",
            image: "/sample-image.png" ,
            description: "Join the adventure in Hidden Trail at Advaita 2025! Decode clues, solve puzzles, and navigate through an exhilarating quest with friends. Brace yourself for surprises and the thrill of discovery at every turn-this is a quest like no other! ",
            link: "https://unstop.com/p/treasure-hunt-the-hidden-trail-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-i-1413991"
        },
        {
            id: 6,
            title: "PAINT N WEAR",
            venue: "AG02",
            date: "29 March 2025",
            time: "03:00 pm - 06:30 pm",
            image: "/sample-image.png" ,
            description: "Unleash your creativity in Paint & Wear, a unique t-shirt painting competition where fashion meets art! Express yourself by transforming a plain t-shirt into a masterpiece using colors, brushes, and imagination. Whether it’s abstract, pop culture, nature, or a message-driven design—let your art speak!",
            link: "https://unstop.com/p/paint-and-wear-t-shirt-painting-competition-advaita-annual-techno-cultural-fest-international-institute-of-information-1414006"
        },
        {
            id: 7,
            title: "STROKE RACE",
            venue: "AG02",
            date: "30 March 2025",
            time: "11:00 am - 1:00pm",
            image: "/sample-image.png" ,
            description:"Unleash your creativity in the Stroke Race event at Advaita 2025! Join a dynamic challenge where one teammate describes a mysterious art piece while the other brings it to life on paper. It's a thrilling race against time and a test of teamwork, promising an unforgettable celebration of talent and expression.",
            link: "https://unstop.com/p/stroke-and-race-art-relay-competition-advaita-annual-techno-cultural-fest-international-institute-of-information-techn-1413988"
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
      <div className="ravenclaw-b">
        <div className="ravenclaw-events-grid">
        {events.map((event, index) => (
          <div key={event.id} className="ravenclaw-event-card" ref={el => eventCardsRef.current[index] = el}>
            <div className="ravenclaw-event-image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="ravenclaw-event-details">
              <h2 className="ravenclaw-event-title">{event.title}</h2>
              <div className="ravenclaw-event-info">
                <p className="ravenclaw-event-venue">Venue: {event.venue}</p>
                <p className="ravenclaw-event-date">{event.date}</p>
                <p className="ravenclaw-event-time">{event.time}</p>
              </div>
            </div>
            <div className="ravenclaw-event-hover-content">
              <p className="ravenclaw-event-description">{event.description}</p>
                <a href={event.link} className="ravenclaw-register-button">
                  <button>Register</button>
                </a>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
};

export default RavenclawSchedule;