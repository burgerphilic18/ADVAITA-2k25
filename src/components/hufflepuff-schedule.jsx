import React, { useEffect, useRef } from "react";
import "./hufflepuff-schedule.css";

const Hufflepuff_Schedule = () => {
    const events = [
        {
          id: 1,
          title: "FOOTLOOSE SOLO",
          venue: "C-BLOCK OPEN SPACE",
          date: "28 March 2025",
          time: "09:00 am - 02:00 pm",
          description: " Dance your heart out at Advaita24's Solo and Group Dance extravaganza! From Western beats to Nrityakala finesse, showcase your talent. Group Dance rules ensure a dynamic performance within a 6-minute time frame, allowing creativity to shine with freedom in song choice and personal props. Join us for a rhythmic celebration! ",
          link: "https://unstop.com/p/footloose-solo-dance-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhuban-1414050",
          image: "/footloose.png" 
        },
        {
          id: 2,
          title: "FOOTLOOSE DUET",
          venue: "C-BLOCK OPEN SPACE",
          date: "28 March 2025",
          time: "09:00 am - 02:00 pm",
          description: " Dance your heart out at Advaita24's Solo and Group Dance extravaganza! From Western beats to Nrityakala finesse, showcase your talent. Group Dance rules ensure a dynamic performance within a 6-minute time frame, allowing creativity to shine with freedom in song choice and personal props. Join us for a rhythmic celebration! ",
          link: "https://unstop.com/p/footloose-duet-dance-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhuban-1414051",
          image: "/footloose.png" ,
          imagem: ""
        },
        {
            id: 3,
            title: "FOOTLOOSE GROUP",
            venue: "C-BLOCK OPEN SPACE",
            date: "28 March 2025",
            time: "09:00 am - 02:00 pm",
            description: " Dance your heart out at Advaita24's Solo and Group Dance extravaganza! From Western beats to Nrityakala finesse, showcase your talent. Group Dance rules ensure a dynamic performance within a 6-minute time frame, allowing creativity to shine with freedom in song choice and personal props. Join us for a rhythmic celebration! ",
            link: "https://unstop.com/p/footloose-group-dance-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhuba-1414047",
            image: "/footloose.png" 
        },
        {
            id: 4,
            title: "ROCKATHON",
            venue: "MAIN STAGE",
            date: "28 March 2025",
            time: "",
            description: "Rock the stage at Rockathon in Advaita 2024! With two rounds, including a preliminary and final round, unleash your musical prowess within specified time limits. Follow rules for a fair play no pre-recorded tracks, only English and Hindi music, and prohibition of misconduct. Let the rhythm roll and compete for the ultimate rock glory",
            link: "https://unstop.com/p/rockathon-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhubaneswar-1414039",
            image: "/rockathon.png" 
        },
        {
            id: 5,
            title: "ACOUSTICA",
            venue: "CG07",
            date: "29 March 2025",
            time: "09:00 am - 1:00pm",
            image: "/acoustica.png",
            description:'Unleash your vocal prowess in "Anuraag" a solo singing competition. "RapMania" Get ready to be immersed in a symphony of words and beats that redefine the very essence of rap. Let the competition begin! "Beatboxing" (also beat boxing)- experience the art of mimicking drum machines and vocal, imitation of turntablism, and other musical instruments',
            link: "https://unstop.com/p/acoustica-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhubaneswar-1414042"
        },
        {
            id: 6,
            title: "LAMODE",
            venue: "MAIN STAGE",
            date: "29 March 2025",
            time: "06:00 pm - 08:30 pm",
            image: "/sample-image.png" ,
            description:"Experience the fusion of style and storytelling at 'LAMODE: A Fashion Odyssey.' This enchanting runway event transcends ordinary style, guiding you through realms of glamor, creativity, and timeless elegance. Join us for a mesmerizing journey down the runway where every stride tells sophisticated and innovative story. ",        
            link: "https://unstop.com/p/la-mode-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhubaneswar-1414052"
        },
        {
            id: 7,
            title: "MIC DROP",
            venue: "AG01",
            date: "30 March 2025",
            time: "02:00 pm - 05:00 pm",
            image: "/micdrop.png" ,
            description:" Mic Drop – The ultimate moment of confidence, power, and impact! Whether it's a legendary speech, a showstopping performance, or a game-changing announcement, a mic drop symbolizes the perfect ending. ",
            link: "https://unstop.com/p/mic-drop-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhubaneswar-1414053"
        },
        {
            id: 8,
            title: "RANGBHOOMI",
            venue: "CG02",
            date: "28 March 2025",
            time: "09:00 am - 1:00pm",
            image: "/rangbhoomi.png" ,
            description: "Step into the world of live theatre at Advaita 2025! Witness diverse theatre groups on one stage, showcasing the beauty of different genres in a single, captivating take. Be part of the immersive storytelling where every performance is not just entertaining but leaves a lasting impact",
            link: "https://unstop.com/p/rangbhoomi-theatre-event-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bh-1413981"
        },
        {
            id: 9,
            title: "FRAME-A-THON",
            venue: "ONLINE",
            date: "28 March 2025",
            time: "",
            image: "/frameathon.png" ,
            description: " Frameathon, as part of Advaita 2024, invites passionate filmmakers to showcase their storytelling prowess through the lens of a camera. Whether it’s drama, thriller, documentary, or comedy, this is your platform to bring your vision to life. Submit your film and compete with best storytellers!",
            link: "https://unstop.com/p/frameathon-film-making-contest-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-i-1413950"
        },
        {
            id: 10,
            title: "MUSHAIRA",
            venue: "CG02",
            date: "29 March 2025",
            time: "03:00 pm - 06:30 pm",
            image: "/mushaira.png" ,
            description: " Step into the mesmerizing world of Mushaira, where words weave magic, emotions flow freely, and poetry takes center stage. A traditional gathering of poets, Mushaira is a space where you can recite, listen, and immerse yourself in the beauty of Urdu, Hindi, and regional poetry ",
            link: "https://unstop.com/events/mushaira-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhubaneswar-1413982",
        }
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
              </div>
            </div>
            <div className="hufflepuff-event-hover-content">
              <p className="hufflepuff-event-description">{event.description}</p>
                <a href={event.link} className="hufflepuff-register-button">
                  <button>Register</button>
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
};

export default Hufflepuff_Schedule;