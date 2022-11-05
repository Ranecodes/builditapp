import bg from '../assets/images/hero-bg.png'
import home1 from "../assets/images/house1.png"
import home2 from "../assets/images/house2.png"
import home3 from "../assets/images/house3.png"
import home4 from "../assets/images/house4.png"
import home5 from "../assets/images/house5.png"
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  }

  const goToProject= () => {
    navigate('/projects');
  }


  return (
    <main>
    <section className="home-container">
      <div className='container'>
      <img src={bg} alt='bg-image' className="home-img"/>
      <div className="home-content-text">
        <h1 className="home-content-text-h1">Development <br/>company</h1>
        <p className="home-content-text-p">Forward-thinking real estate developer, owner <br/> and investor with a reputation</p>
        <div className="light-dark-bar">
          <button className="project-btn" onClick={goToProject}>Services</button>
          <button className="project-btn-2" onClick={goToAbout}>About the company</button>
        </div>
      </div>
      <div className="home-content-image">
        <img src={home1}  alt="house1" className='home1'/>
        <img src={home2}  alt="house2" className='home2'/>
        <img src={home3}  alt="house3" className='home3'/>
        <img src={home4}  alt="house4" className='home4'/>
        <img src={home5}  alt="house5" className='home5'/>
      </div>
      </div>
    </section>
    <section className='features-container'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
    </main>
  );
}

export default Home;