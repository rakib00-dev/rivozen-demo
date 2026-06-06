import "./skills.css";

const Skills = () => {
  return (
    <section id="skills-section">
      <div className="p-4 w-full">
        <h1 id="section-title">Skills</h1>
        <div id="skills-wrap">
          <div className="skill-box">
            <img src="./images/skills/html-5.png" alt="" loading="lazy" />
          </div>
          <div className="skill-box">
            <img src="./images/skills/css3.png" alt="" loading="lazy" />
          </div>
          <div className="skill-box">
            <img src="./images/skills/bootstrap.png" alt="" loading="lazy" />
          </div>
          <div className="skill-box">
            <img
              src="./images/skills/react-1-logo-png-transparent.png"
              alt="react js"
              loading="lazy"
            />
          </div>
          <div className="skill-box">
            <img src="./images/skills/tailwind.png" alt="" loading="lazy" />
          </div>
          <div className="skill-box">
            <img src="./images/skills/js.png" alt="" loading="lazy" />
          </div>
          <div className="skill-box">
            <img src="./images/skills/social.png" alt="" loading="lazy" />
          </div>
          <div className="skill-box">
            <img src="./images/skills/github.png" alt="" loading="lazy" />
          </div>
          <div className="skill-box">
            <img src="./images/skills/bug.png" alt="" loading="lazy" />
          </div>
          <div className="skill-box">
            <img src="./images/skills/photoshop.png" alt="" loading="lazy" />
          </div>
          <div className="skill-box">
            <img src="./images/skills/daisyui.png" alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
