import React, { useRef } from "react";
import Gryffindor from "./components/gryffindor";
import Gryffindor_Schedule from "./components/gryffindor-schedule";
import Hufflepuff from "./components/hufflepuff";
import Hufflepuff_Schedule from "./components/hufflepuff-schedule";
import Ravenclaw from "./components/ravenclaw";
import Ravenclaw_Schedule from "./components/ravenclaw-schedule";
import Slytherin from "./components/slytherin";
import Slytherin_Schedule from "./components/slytherin-schedule";
import Navbar from "./components/navbar";
import EventsHome from "./components/events-home";
import Info from "./components/info";
import Footer from "./components/Footer";

function Events() {
  const gryffindorRef = useRef(null);
  const hufflepuffRef = useRef(null);
  const ravenclawRef = useRef(null);
  const slytherinRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <EventsHome />
      <Info
        onGryffindorClick={() => scrollToRef(gryffindorRef)}
        onHufflepuffClick={() => scrollToRef(hufflepuffRef)}
        onRavenclawClick={() => scrollToRef(ravenclawRef)}
        onSlytherinClick={() => scrollToRef(slytherinRef)}
      />
      <div ref={gryffindorRef}>
        <Gryffindor />
        <Gryffindor_Schedule />
      </div>
      <div ref={hufflepuffRef}>
        <Hufflepuff />
        <Hufflepuff_Schedule />
      </div>
      <div ref={ravenclawRef}>
        <Ravenclaw />
        <Ravenclaw_Schedule />
      </div>
      <div ref={slytherinRef}>
        <Slytherin />
        <Slytherin_Schedule />
      </div>
      <Footer />
    </div>
  );
}

export default Events;