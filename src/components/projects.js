import image from "../assets/images/Bg2.png";

export function Projects() {
  return (
    <main>
      <section
        className="project-hero-container"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="project-hero-content">
          <h3 style={{fontSize: "16px", color:"#5BCCDE"}}>Projects</h3>
          <h1 style={{color:"#486A6F", fontSize:"32px"}}>
            Owner and Investor with a <br /> reputation.
          </h1>
          <p style={{color: "#678C92", fontWeight:"400", fontSize:"16px", lineHeight: "32px"}}>
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
    </main>
  );
}
