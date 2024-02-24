import heroImg from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="home__hero">
      <div className="home__container">
        <img src={heroImg} alt="Hero Image" />
      </div>
    </section>
  );
}

export default Hero;
