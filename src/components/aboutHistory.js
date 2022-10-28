import about1 from "../assets/images/about1.png"

export default function AboutHistory() {
  return (
    <section className="aboutHistoryContainer">
      <div className="about-content-text">
        <h1 className="about-title" style={{ textAlign: "left" }}>
          Our History
        </h1>
        <h2>Owner and investor with a reputation</h2>
        <p style={{color:"#486A6F"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Nunc elit sem, vestibulum sed leo eu, malesuada pharetra
          mauris.
          <br /> Integer rhoncus, eros vel euismod tempor, ipsum magna tristique
          nisi,
          <br /> quis ullamcorper enim magna eu orci.
          <br /> Sed semper ex quis semper aliquet. Cras hendrerit molestie
          sapien sed fermentum.
          <br /> Mauris dui tortor, viverra vel ultrices in, congue sed ex.
        </p>
      </div>
      <div>
        <img src={about1} alt="" className="about1"/>
      </div>
    </section>
  );
}
