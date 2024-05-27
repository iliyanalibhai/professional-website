export default function HeroSection() {
  return (
    <section id="heroSeection" className="hero--section">
      <div className="hero-section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey I am john</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">
              Fullstack
            </span>
            <br/>
            Developer
          </h1>
          <p className="hero--section--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--image">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}