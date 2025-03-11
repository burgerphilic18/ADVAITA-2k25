import React, { useEffect, useRef } from "react";
import "./gryffindor-schedule.css";

const Gryffindor_Schedule = () => {
    const events = [
        {
          id: 1,
          title: "INTER COLLEGE HACKATHON",
          venue: "PLACEMENT CELL",
          date: "29 March 2025",
          time: "09:00 pm - Overnight",
          image: "/hackathon.webp" ,
          description: 'Join "Hackfest-Advaita," the ultimate inter-college hackathon! Students unite, sharing knowledge and collaborating on groundbreaking projects in the realm of technology. Seize the opportunity to innovate and connect with like-minded minds!',
          link: 'https://unstop.com/p/hackfest-international-institute-of-information-technology-iiit-bhubaneswar-1413902'
        },
        {
          id: 2,
          title: "CAPTURE THE FLAG",
          venue: "PLACEMENT CELL",
          date: "29 March 2025",
          time: "09:00 pm - Overnight",
          image: "/ctf.webp" ,
          description: 'Embark on a cybersecurity adventure! Compete in challenges to capture hidden "flags" within the dynamic game environment. Rule variations add intrigue to each Flag. ',
          link: 'https://unstop.com/p/inter-college-ctf-event-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhu-1413963'
        },
        {
            id: 3,
            title: "CODE FIESTA",
            venue: "CG05-CG08",
            date: "29 March 2025",
            time: "03:00 pm - 06:00pm",
            image: "/cf.webp" ,
            description: "Join our exhilarating team-based programming competition! Test your adaptability and coordination as you and your partner tackle distinct problem sets in separate rooms. Switch places at regular intervals, maneuvering each other's code to secure those coveted green ticks. ",
            link: 'https://unstop.com/p/code-fiesta-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhubaneswar-1413956'
        },
        {
            id: 4,
            title: "TECH TALK",
            venue: "CG02",
            date: "30 March 2025",
            time: "10:00 am - 3:00pm",
            image: "/tech-talk.png",
            description: 'Tech talks are discussions about technology and communication, and can be educational, inspirational, or motivational. They can take place in companies, at conferences, or online. ' ,
            link: 'https://unstop.com/conferences/beyond-boundaries-tech-talk-advaita-annual-techno-cultural-fest-international-institute-of-information-techn-1413944'
        },
        {
            id: 5,
            title: "ROBO SOCCER",
            venue: "C-BLOCK OPEN SPACE",
            date: "28 March 2025",
            time: "03:00 pm - 6:00pm",
            description: "It's football time and no one plays soccer better than the engineers, in their sophisticated way we hail this event ROBO SOCCER. So if you are up for the challenge get your manual soccer-playing bots ready to compete on the biggest stage ",
            link: 'https://unstop.com/p/roborogue-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhubaneswar-1413857',
            image: "/robosoccer.webp" 
        },
        {
            id: 6,
            title: "ROBO SUMO",
            venue: "OPEN SPACE",
            date: "28 March 2025",
            time: "03:00 pm - 6:00pm",
            image: "/robosumo.png",
            description: "Dive into the ultimate off-road challenge with your bots! Conquer rugged terrains, unleash adrenaline, and chase victory. Join now for an unforgettable thrill!",
            link: 'https://unstop.com/p/brawlbounty-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhubaneswar-1413218'
        },
        {
            id: 7,
            title: "INVENTO EXPO",
            venue: "CG02",
            date: "27-30 March 2025",
            time: "Open All Time",
            image: "/expo.webp" ,
            description: " Invento Expo is an exciting robotics exhibition held as part of our annual fest. It serves as a platform for students, tech enthusiasts, and innovators to showcase cutting-edge robotic projects, automation solutions, and AI-driven prototypes",
            link: 'https://unstop.com/p/invento-expo-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhubaneswar-1413166'
        },
        {
            id: 8,
            title: "ENSEMBLE",
            venue: "CG07",
            date: "29 March 2025",
            time: "11:00 am -12:00pm",
            image: "/ensemble.png",
            description: " From designing innovative circuits to solving real-world electrical challenges, Ensemble tests both creativity and technical expertise. Whether you're a beginner or a pro, Circuit Design offers a hands-on experience in analog, digital, and embedded systems. Get ready to build, innovate, and compete!",
            link: "" 
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
      <div className="gryffindor-b">
        <div className="gryffindor-events-grid">
        {events.map((event, index) => (
          <div key={event.id} className="gryffindor-event-card" ref={el => eventCardsRef.current[index] = el}>
            <div className="gryffindor-event-image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="gryffindor-event-details">
              <h2 className="gryffindor-event-title">{event.title}</h2>
              <div className="gryffindor-event-info">
                <p className="gryffindor-event-venue">Venue: {event.venue}</p>
                <p className="gryffindor-event-date">{event.date}</p>
                <p className="gryffindor-event-time">{event.time}</p>
              </div>
            </div>
            <div className="gryffindor-event-hover-content">
              <p className="gryffindor-event-description">{event.description}</p>
              <a href={event.link} className="gryffindor-register-button">
                <button>Register</button>
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
};

export default Gryffindor_Schedule;