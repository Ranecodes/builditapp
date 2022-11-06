import bg from "../assets/images/hero-bg.png";
import home1 from "../assets/images/house1.png";
import home2 from "../assets/images/house2.png";
import home3 from "../assets/images/house3.png";
import home4 from "../assets/images/house4.png";
import home5 from "../assets/images/house5.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  const goToProject = () => {
    navigate("/projects");
  };

  const goToContact = () => {
    navigate("/contact-us");
  };

  return (
    <main>
      <section className="home-container">
        <div className="container">
          <img src={bg} alt="bg-image" className="home-img" />
          <div className="home-content-text">
            <h1 className="home-content-text-h1">
              Development <br />
              company
            </h1>
            <p className="home-content-text-p">
              Forward-thinking real estate developer, owner <br /> and investor
              with a reputation
            </p>
            <div className="light-dark-bar">
              <button className="project-btn" onClick={goToProject}>
                Services
              </button>
              <button className="project-btn-2" onClick={goToAbout}>
                About the company
              </button>
            </div>
          </div>
          <div className="home-content-image">
            <img src={home1} alt="house1" className="home1" />
            <img src={home2} alt="house2" className="home2" />
            <img src={home3} alt="house3" className="home3" />
            <img src={home4} alt="house4" className="home4" />
            <img src={home5} alt="house5" className="home5" />
          </div>
        </div>
      </section>
      <section className="features-container">
        <div className="features-content">
          <h1 className="features-content-H1">Innovative Execution</h1>
          <div className="features-content-cards">
            <div className="features-content-card">
              <svg
              className="features-content-card-svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 17.5538V28.8038"
                  stroke="#F4F7FF"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 17.5538C16.5533 17.5538 17.8125 16.2946 17.8125 14.7413C17.8125 13.188 16.5533 11.9288 15 11.9288C13.4467 11.9288 12.1875 13.188 12.1875 14.7413C12.1875 16.2946 13.4467 17.5538 15 17.5538Z"
                  stroke="#F4F7FF"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.8438 13.3111C22.6535 10.8914 21.4396 7.71973 21.4441 4.42883H8.55591C8.56046 7.71976 7.34652 10.8915 5.15625 13.3112L15 28.8038L24.8438 13.3111Z"
                  stroke="#F4F7FF"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h2>Featured Listing</h2>
              <p>
                A paid real estate listing for a Property
                <br /> displayed in a manner that is distinctive <br />
                from other listings.
              </p>
            </div>
            <div className="features-content-card">
              <svg
              className="features-content-card-svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_184)">
                  <path
                    d="M10.9792 8.17883L2.54166 15.6788L10.9792 23.1788"
                    stroke="#F4F7FF"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.3542 8.17883L28.7917 15.6788L20.3542 23.1788"
                    stroke="#F4F7FF"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_184">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.666656 0.678833)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h2>Available Properties</h2>
              <p>
                Online leading real estate and property
                <br /> listing platform with commercial properties,
                <br /> flats, lands and houses for sale
              </p>
            </div>
            <div className="features-content-card">
              <svg
              className="features-content-card-svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_195)">
                  <path
                    d="M18.1458 10.0538V24.5521C18.1458 24.7064 18.1839 24.8584 18.2567 24.9945C18.3296 25.1305 18.4349 25.2465 18.5633 25.3321L19.8514 26.1909C19.9764 26.2742 20.1196 26.3263 20.269 26.3427C20.4183 26.3592 20.5694 26.3395 20.7095 26.2853C20.8496 26.2311 20.9747 26.1441 21.0741 26.0314C21.1736 25.9188 21.2445 25.784 21.281 25.6382L22.8333 19.4288"
                    stroke="#F4F7FF"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.8333 19.4288C24.0765 19.4288 25.2688 18.9349 26.1479 18.0558C27.027 17.1768 27.5208 15.9845 27.5208 14.7413C27.5208 13.4981 27.027 12.3058 26.1479 11.4267C25.2688 10.5476 24.0765 10.0538 22.8333 10.0538H18.1458C18.1458 10.0538 11.7648 10.0538 5.6242 4.90367C5.48764 4.78873 5.32109 4.71517 5.14414 4.69165C4.9672 4.66812 4.78722 4.69562 4.62536 4.77089C4.46351 4.84616 4.32652 4.96609 4.23049 5.11656C4.13447 5.26703 4.08341 5.4418 4.08331 5.6203V23.8623C4.08341 24.0408 4.13447 24.2155 4.23049 24.366C4.32652 24.5165 4.46351 24.6364 4.62536 24.7117C4.78722 24.7869 4.9672 24.8144 5.14414 24.7909C5.32109 24.7674 5.48764 24.6938 5.6242 24.5789C11.7648 19.4288 18.1458 19.4288 18.1458 19.4288H22.8333Z"
                    stroke="#F4F7FF"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_195">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.333313 0.678833)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <h2>In the News</h2>
              <p>
                Find the latest news, headlines, blogs <br /> and watch video
                about our, housing,
                <br /> mortgages, refinancing, apr and
                <br /> real estate markets
              </p>
            </div>
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
            <p onClick={goToProject}>Projects</p>
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

export default Home;
