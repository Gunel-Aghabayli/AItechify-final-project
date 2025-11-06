import React, { useEffect, useRef } from "react";
import img1 from "../assets/images/tm1.webp";
import img2 from "../assets/images/tm2.webp";
import img3 from "../assets/images/tm3.webp";
import img4 from "../assets/images/tm4.webp";


const teamData = [
  {
    img: img1,
    name: "Emma Mark",
    title: "Sr. Technology Officer",
    color: "--c1",
  },
  {
    img: img2,
    name: "Robertson",
    title: "Sr. Software Officer",
    color: "--c2",
  },
  {
    img: img3,
    name: "Esther Howard",
    title: "Sr. Marketing Officer",
    color: "--c3",
  },
  {
    img: img4,
    name: "Edward Howard",
    title: "Sr. Marketing Officer",
    color: "--c4",
  },
];

const Team = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const el = sectionRef.current;
      if (!el) return;

      if (entries[0].isIntersecting) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    },
    { threshold: 0.3 }
  );

  if (sectionRef.current) observer.observe(sectionRef.current);
  return () => observer.disconnect();
}, []);

  return (
    <section ref={sectionRef} className="team">
      <div className="white-reveal"></div>
      <div className="team-content">
        <h4 className="subtitle">Team Member</h4>
        <h2>Meet Our Professional Team Members</h2>
        <div className="team-grid">
          {teamData.map((m, index) => (
            <div className="member" key={index}>
              <div className="photo" >
                <img src={m.img} alt={m.name} />
              </div>

              <div className="info">
                <h3>{m.name}</h3>
                <p>{m.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;