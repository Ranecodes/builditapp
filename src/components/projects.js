import { useNavigate } from "react-router-dom";
import image from "../assets/images/Bg2.png";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";

export function Projects() {
    const navigate = useNavigate();

    const goToAbout = () => {
        navigate("/about");
    }
    const goToProjects = () => {
        navigate("/projects");
    }
    const goToContact = () => {
        navigate("/contact-us");
    }

  return (
    <main>
      <section
        className="project-hero-container"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="project-hero-content">
          <h3 style={{ fontSize: "16px", color: "#5BCCDE" }}>Projects</h3>
          <h1 style={{ color: "#486A6F", fontSize: "32px" }}>
            Owner and Investor with a <br /> reputation.
          </h1>
          <p
            style={{
              color: "#678C92",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "32px",
            }}
          >
            Quality is what we pursue, We know what we do.
            <br />
            Selling one yard at a time
            <br />
            The only two names you need to know for honest answers and quality
            work.
            <br />
            Nobody does it better
            <br />
            Helping You Get More For Your Real Estate
            <br />
            Construction you can count on.
          </p>
        </div>
      </section>
      <section className="project-list-container">
        <h1 style={{ color: "#486A6F", fontSize: "32px", padding: "30px" }}>
          Our Projects
        </h1>
        <div className="project-list">
          <div className="project-item">
            <img src={project1} className="project-item-img" />
            Project Alpha
          </div>
          <div className="project-item">
            <img src={project2} className="project-item-img" />
            Project Beta
          </div>
          <div className="project-item">
            <img src={project3} className="project-item-img" />
            Project Gamma
          </div>
          <div className="project-item">
            <img src={project4} className="project-item-img" />
            Project Rho
          </div>
          <div className="project-item">
            <img src={project5} className="project-item-img" />
            Project Theta
          </div>
          <div className="project-item">
            <img src={project6} className="project-item-img" /> Project Sigma
          </div>
        </div>
      </section>
      <section className="project-footer">
        <div className="contact-bar">
            <h1 style={{fontSize:"36px", color:"#486A6F", fontWeight:"700"}}>Call Us</h1>
            <div className="contact-bar-right">
                <div className="call">Call</div>
                <div className="email">Email</div>
            </div>
        </div>
      </section>
      <section className="footer-container">
        <div className="footer-grid-container">
          <div className="footer-grid-item-1">
            <h1
              style={{
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "44px",
              }}
            >
              Buildit
            </h1>
            <p>Development company, 2022</p>
          </div>
          <div className="footer-grid-item-2">
            <p>Service 1</p>
            <p>Service 2</p>
            <p>Service 3</p>
            <p>Service 4</p>
            <div>
              <svg
              className="footer-icon"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9346 2H7.93457C5.17315 2 2.93457 4.23858 2.93457 7V17C2.93457 19.7614 5.17315 22 7.93457 22H17.9346C20.696 22 22.9346 19.7614 22.9346 17V7C22.9346 4.23858 20.696 2 17.9346 2Z"
                  stroke="#F4F7FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.9348 11.3701C17.0582 12.2023 16.916 13.0523 16.5285 13.7991C16.141 14.5459 15.5279 15.1515 14.7764 15.5297C14.0249 15.908 13.1732 16.0397 12.3426 15.906C11.5119 15.7723 10.7445 15.3801 10.1496 14.7852C9.55468 14.1903 9.1625 13.4229 9.02883 12.5923C8.89517 11.7616 9.02683 10.91 9.40509 10.1584C9.78335 9.40691 10.389 8.7938 11.1358 8.4063C11.8825 8.0188 12.7325 7.87665 13.5648 8.00006C14.4137 8.12594 15.1996 8.52152 15.8065 9.12836C16.4133 9.73521 16.8089 10.5211 16.9348 11.3701Z"
                  stroke="#F4F7FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.4346 6.5H18.4446"
                  stroke="#F4F7FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
              style={{ marginLeft: "20px" }}
              className="footer-icon"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9346 2H15.9346C14.6085 2 13.3367 2.52678 12.399 3.46447C11.4614 4.40215 10.9346 5.67392 10.9346 7V10H7.93457V14H10.9346V22H14.9346V14H17.9346L18.9346 10H14.9346V7C14.9346 6.73478 15.0399 6.48043 15.2275 6.29289C15.415 6.10536 15.6694 6 15.9346 6H18.9346V2Z"
                  stroke="#F4F7FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="footer-grid-item-3">
            <p onClick={goToAbout}>About Us</p>
            <p onClick={goToProjects}>Projects</p>
            <p onClick={goToContact}>Contact</p>
          </div>
          <div className="footer-grid-item-4">
            <p>Get in touch</p>
            <p>
              60 Manor Station St. Fairport,
              <br />
              NY 14450
            </p>
            <p>708-790-0000</p>
            <p>sales@buildit.site</p>
          </div>
        </div>
      </section>
    </main>
  );
}
