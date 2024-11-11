import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contenful CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            veritatis ullam corrupti quos, ducimus eveniet, eligendi enim
            necessitatibus aperiam, repudiandae officiis minima repellat
            inventore ab non quis quasi mollitia voluptatibus.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
