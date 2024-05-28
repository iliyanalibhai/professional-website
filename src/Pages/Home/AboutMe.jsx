export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={process.env.PUBLIC_URL + '/img/about-m.png'} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Hello! I am a Computer Science major at UC Riverside graduating in 2026. Fields that pique my interest include Machine Learning, AI, and Fullstack Development. I am actively seeking research or internship opportunities that encompass a wide range of roles, from data analytics to programming. If you have any exciting opportunities, please don't hesitate to reach out at ialib001@ucr.edu
          </p>
          {/* <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae?
          </p> */}
        </div>
      </div>
    </section>
  );
}
