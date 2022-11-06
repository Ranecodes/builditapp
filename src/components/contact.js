import bg from "../assets/images/hero-bg.png";
import { useNavigate } from "react-router-dom";

export default function Contact() {
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
      <section className="contact-container">
        <img src={bg} alt="bg-image" className="home-img" />
        <div className="contact-content-container">
          <div className="contact-content-text">
            <p
              style={{ color: "#5BCCDE", fontSize: "16px", lineHeight: "32px" }}
            >
              Contact
            </p>
            <h1
              style={{
                color: "#486A6F",
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "48px",
              }}
            >
              Get in touch
            </h1>
            <div className="contact-column">
              <div className="contact-column-card">
                <svg
                  className="contact-icon"
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3_3684)">
                    <path
                      d="M19.7469 6.25C20.9678 6.48821 22.0899 7.08532 22.9694 7.96492C23.849 8.84452 24.4462 9.96658 24.6844 11.1875L19.7469 6.25ZM19.7469 1.25C22.2835 1.5318 24.6489 2.66772 26.4547 4.47126C28.2605 6.2748 29.3994 8.63876 29.6844 11.175L19.7469 1.25ZM28.4344 21.15V24.9C28.4358 25.2481 28.3645 25.5927 28.225 25.9117C28.0855 26.2307 27.881 26.517 27.6245 26.7523C27.3679 26.9877 27.0651 27.1669 26.7353 27.2784C26.4055 27.3899 26.0561 27.4313 25.7094 27.4C21.8629 26.9821 18.1681 25.6677 14.9219 23.5625C11.9017 21.6433 9.34104 19.0827 7.42187 16.0625C5.30934 12.8015 3.99467 9.08874 3.58436 5.225C3.55313 4.87933 3.59421 4.53095 3.70499 4.20203C3.81577 3.87311 3.99383 3.57086 4.22782 3.31453C4.46182 3.05819 4.74662 2.85339 5.0641 2.71315C5.38159 2.57292 5.72479 2.50033 6.07187 2.5H9.82187C10.4285 2.49403 11.0166 2.70885 11.4766 3.10442C11.9365 3.49998 12.237 4.04931 12.3219 4.65C12.4801 5.85008 12.7737 7.02841 13.1969 8.1625C13.365 8.6099 13.4014 9.09614 13.3017 9.5636C13.2021 10.0311 12.9704 10.4601 12.6344 10.8L11.0469 12.3875C12.8263 15.5169 15.4174 18.1081 18.5469 19.8875L20.1344 18.3C20.4742 17.9639 20.9033 17.7323 21.3708 17.6326C21.8382 17.5329 22.3245 17.5693 22.7719 17.7375C23.906 18.1607 25.0843 18.4542 26.2844 18.6125C26.8916 18.6982 27.4461 19.004 27.8425 19.4719C28.2389 19.9397 28.4496 20.537 28.4344 21.15Z"
                      stroke="#486A6F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_3684">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(0.93457)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div className="card-details">
                  <p style={{ color: "#486A6F" }}>Tel</p>
                  <span
                    style={{
                      color: "#486A6F",
                      fontWeight: "700",
                      fontSize: "20px",
                    }}
                  >
                    708-790-0000
                  </span>
                </div>
              </div>
              <div className="contact-column-card">
                <svg
                  className="contact-icon"
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.93457 5H25.9346C27.3096 5 28.4346 6.125 28.4346 7.5V22.5C28.4346 23.875 27.3096 25 25.9346 25H5.93457C4.55957 25 3.43457 23.875 3.43457 22.5V7.5C3.43457 6.125 4.55957 5 5.93457 5Z"
                    stroke="#486A6F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.4346 7.5L15.9346 16.25L3.43457 7.5"
                    stroke="#486A6F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="card-details">
                  <p style={{ color: "#486A6F" }}>Email</p>
                  <span
                    style={{
                      color: "#486A6F",
                      fontWeight: "700",
                      fontSize: "20px",
                    }}
                  >
                    sales@buildit.site
                  </span>
                </div>
              </div>
              <div className="contact-column-card">
                <svg
                  className="contact-icon-special"
                  width="51"
                  height="50"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.5332 12.0003C35.7904 12.0067 36.0301 12.1043 36.2603 12.2858L59.5354 33.3798C60.0708 33.8737 60.1468 34.7845 59.7461 35.3794C59.3509 35.9656 58.5105 36.0597 58.0042 35.5992L35.4947 15.2083L12.9852 35.5992C12.479 36.0597 11.6616 35.9621 11.2626 35.3794C10.8665 34.8012 10.9092 33.8403 11.454 33.3798L20.1822 25.4695V13.4065C20.1822 12.6296 20.7308 12.0004 21.4076 12.0004H26.3077C26.984 12.0004 27.5326 12.6296 27.5326 13.4065V18.812L34.7296 12.2858C35.0022 12.0798 35.276 11.994 35.5332 12.0003ZM25.0822 14.8126H22.6325V23.2501L25.0822 21.0307V14.8126ZM50.8073 30.9181L53.2571 33.1375V55.5939C53.2571 56.3703 52.709 57 52.0327 57H41.6202C40.9435 57 40.3953 56.3702 40.3949 55.5939V48.5625C40.3949 45.422 38.2309 42.9373 35.4948 42.9373C32.7591 42.9373 30.5946 45.4215 30.5946 48.5625V55.5939C30.5946 56.3703 30.0465 57 29.3702 57H18.9573C18.281 57 17.7324 56.3702 17.7324 55.5939V33.1375L20.1822 30.9181V54.1868H28.1448V48.5616C28.1448 43.9115 31.444 40.1242 35.4948 40.1242C39.5455 40.1242 42.8447 43.9115 42.8447 48.5616V54.1868H50.8073L50.8073 30.9181Z"
                    fill="#486A6F"
                  />
                </svg>
                <div className="card-details">
                  <p style={{ color: "#486A6F" }}>Office</p>
                  <span
                    style={{
                      color: "#486A6F",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "1.5",
                    }}
                  >
                    60 Manor Station St.
                    <br />
                    Fairport, NY 14450
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-content-form">
            <div className="contact-form-container">
              <form className="contact-form">
                <div
                  className="form-group form-group-1"
                  style={{ float: "left", marginRight: "20px" }}
                >
                  <label for="name">Name</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div
                  className="form-group form-group-1"
                  style={{ float: "left" }}
                >
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="form-group form-group-2">
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" name="subject" />
                </div>
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" name="message" rows="5"></textarea>
                </div>
                <button
                  type="submit"
                  className="project-btn"
                  style={{ width: "100%", padding: "20px" }}
                >
                  Send Message
                </button>
              </form>
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
