import { Link, Outlet } from "react-router-dom";

function About() {


  return (
    <section className="about-container">
      <h2 className="about-title">Learn about us</h2>
      <nav className="about-us-wrap">
        <Link to="history" className="about-btn">History</Link>
        <Link to="services" className="about-btn">Services</Link>
      </nav>
      <Outlet/>
    </section>
  );
}

export default About;
