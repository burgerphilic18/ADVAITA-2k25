import React, { useEffect, useRef } from "react";
import "./slytherin-schedule.css";

const SlytherinSchedule = () => {
    const events = [
        {
          id: 1,
          title: "FUTSAL",
          venue: "BASKETBALL COURT",
          date: "29 March 2025",
          time: "07:30 am - 03:00pm",
          image: "/futsal.png" ,
          description:" Futsal Arena is an action-packed 5-a-side football together in an electrifying battle on the court. Played on a smaller, fast-paced field, this event tests players' agility, quick decision-making, and teamwork",
          link: "https://unstop.com/p/the-futsal-arena-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhubaneswa-1414001"
        },
        {
          id: 2,
          title: "BGMI",
          venue: "PLACEMENT CELL",
          date: "29 March 2025",
          time: "09:00 am - 06:00 pm",
          image: "/bgmi.png" ,
          description: "Dive into the adrenaline-fueled world of mobile gaming with BGMI. Strategize with your squad, loot resources, and outmaneuver your opponents in a fastpaced, action-packed battleground. Every decision counts as you fight to be the last one standing. Join us for the BGMI tournament and experience the thrill of mobile gaming at its finest. ",
          link: "https://unstop.com/p/treasure-hunt-the-hidden-trail-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-i-1413986"
        },
        {
          id: 3,
          title: "VALORANT",
          venue: "PLACEMENT CELL",
          date: "29 March 2025",
          time: "09:00 am - 06:00 pm",
          image: "/valorant.png" ,
          description: "Enter the tactical realm of Valorant, where precision and strategy reign supreme. Choose from a diverse roster of agents, each with unique abilities, and master the art of gunplay and tactics alongwith team-work and coordination. Join Us for the Valorant tournament and showcase your skills in the ultimate test of tactical prowess and teamwork. ",
          link: "https://unstop.com/p/treasure-hunt-the-hidden-trail-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-i-1413986"
        },
        {
            id: 4,
            title: "MANTHAN",
            venue: "MAIN STAGE",
            date: "28 March 2025",
            time: "08:00 pm - 09:00 pm",
            image: "/manthan.png" ,
            description: "'Manthan' is a dynamic speaker session designed to spark innovative thinking and meaningful dialogue. Inspired by the mythological Samudra Manthan, where persistent effort led to the emergence of something extraordinary. This session aims to bring together diverse voices from various industries to share their insights, experiences, and visions for the future.",
            link: "https://unstop.com/competitions/manthan-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhubanes-1413995"
        },
        {
            id: 5,
            title: "VIRTUAL STOCK EXCHANGE",
            venue: "ONLINE",
            date: "28 March 2025",
            time: "",
            image: "/vse.png" ,
            description: "The Virtual Stock Exchange is a simulated trading competition where participants will engage in buying and selling stocks in a virtual market.",
            link: "https://unstop.com/p/golgappa-king-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhubaneswar-1413984",
        },
        {
            id: 6,
            title: "BIDDING WARS",
            venue: "CG02",
            date: "28 March 2025",
            time: "02:00 pm - 05:00 pm",
            image: "/bidding.png" ,
            description: " Teams pitch a product idea to the audience. Audience members act as buyers with fake money to bid on their preferred pitch. The team accumulating the highest total 'sales' wins.",
            link: "https://unstop.com/o/W0CIhjz?utm_medium=Share&utm_source=shortUrl"
        },
        {
            id: 7,
            title: "SHOLE PARATHE",
            venue: "FOOD COURT",
            date: "28 March 2025",
            time: "03:00 pm - 06:00 pm",
            image: "/shole.png" ,
            description: "Spice up your taste buds in the Shole Parathe Challenge! It's not just about devouring parathas; participants face a fiery twist by eating hot chili sauce alongside the paratha in record time.",
            link: "https://unstop.com/p/sholle-parathe-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhubaneswar-1414017"
        },
        {
            id: 8,
            title: "MAGGIE CHEF",
            venue: "FOOD COURT",
            date: "30 March 2025",
            time: "10:00 am - 01:00 pm",
            image: "/maggie.png" ,
            description: "Unleash your inner Maggie chef! Join the flavorful fun in the Maggie Eating Competition. Whether solo or with a partner, bring your appetite and creativity.",
            link: "https://unstop.com/p/maggie-chef-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhubaneswar-1413979"
        },
        {
            id: 9,
            title: "GOLGAPPA KING",
            venue: "FOOD COURT",
            date: "29 March 2025",
            time: "03:30 pm - 06:00 pm",
            image: "/golgappa.png" ,
            description: "Savor the spice in the Golgappa King competition! This street food showdown challenges participants to devour as many golgappas as possible in a given time. Get ready for a flavorful race to the title of Golgappa King! ",
            link: "https://unstop.com/p/golgappa-king-advaita-annual-techno-cultural-fest-international-institute-of-information-technology-iiit-bhubaneswar-1414010"
        },
        {
          id: 10,
          title: "STRINGED DELICACY",
          venue: "FOOD COURT",
          date: "29 March 2025",
          time: "10:00 am - 01:00 pm",
          image: "/string.png" ,
          description: "Dive into the art of string creativity with 'String Delicacy' at Advaita 2024! This team challenge invites pairs to craft intricate string delicacies in a race against time. Join the flavorful adventure, but remember, each participant can contribute only once. Let the string creativity unfold! ",
          link: "http://unstop.com/p/string-delicacy-team-sack-race-event-advaita-annual-techno-cultural-fest-international-institute-of-information-techno-1414014"
        },
        {
          id: 11,
          title: "MARATHON",
          venue: "TBD",
          date: "27 March 2025",
          time: "",
          image: "/marathon.png" ,
          description: "'Run For Blood' a purposeful journey to save lives through blood donation. Experience the unity of runners, all striving for a healthier community. Whether a seasoned runner or a beginner, every stride contributes to a collective effort for a more compassionate society. Lace up and join us in making a lasting impact on a crucial social cause ",
          link: "https://unstop.com/competitions/run-for-a-cause-vedanta-samiti-marathon-advaita-annual-techno-cultural-fest-international-institute-of-info-1413990"
        },
        {
          id: 12,
          title: "BLOOD DONATION",
          venue: "P BLOCK",
          date: "27 March 2025",
          time: "11:00 am - 01:00 pm",
          image: "/blood.png" ,
          description: "Give the gift of life at Advaita 2025's Blood Donation drive! Your selfless act not only saves lives but also supports medical advancements, enhances emergency preparedness, and fosters community. Experience health benefits, civic engagement, and contribute to sustainable healthcare while raising awareness about the vital importance of blood donation.  ",
          link: "https://unstop.com/events/save-lives-be-a-herovedanta-samiti-blood-donation-camp-advaita-annual-techno-cultural-fest-international-institut-1413992"
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
      <div className="slytherin-b">
        <div className="slytherin-events-grid">
        {events.map((event, index) => (
          <div key={event.id} className="slytherin-event-card" ref={el => eventCardsRef.current[index] = el}>
            <div className="slytherin-event-image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="slytherin-event-details">
              <h2 className="slytherin-event-title">{event.title}</h2>
              <div className="slytherin-event-info">
                <p className="slytherin-event-venue">Venue: {event.venue}</p>
                <p className="slytherin-event-date">{event.date}</p>
                <p className="slytherin-event-time">{event.time}</p>
              </div>
            </div>
            <div className="slytherin-event-hover-content">
              <p className="slytherin-event-description">{event.description}</p>
                <a href={event.link} className="slytherin-register-button">
                  <button>Register</button>
                </a>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
};

export default SlytherinSchedule;