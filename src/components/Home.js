import React, { useState, useEffect } from "react";
import "./CssAll/HomeStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import image1 from "./Images/EXPLORE THE WORLD WITH US (1).jpg";
import image2 from "./Images/A TRIP THAT YOU WILL NEVER FORGET.jpg";
import image3 from "./Images/LAST MINUTE TRAVEL PLAN.jpg";
import image4 from "./Images/Nimble Signals.jpg";
import image5 from "./Images/JUST RELAX.jpg"
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg"
import img4 from "./Images/img4.jpg";
import img3 from "./Images/img3.jpg";
import Footer from "./Footer";


function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [image1, image2,image3,image4,image5];
  const [transitioning, setTransitioning] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  


  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);

      setTimeout(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }, 1000);

      setTimeout(() => {
        setTransitioning(false);
      }, 1500);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);
  const slideshowHeight = '400px';

  return (
    <Layout>
      <div>
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
        "The world is a book, and those who do not <span style={{ color: '#ff6b6b', fontWeight: 'bold', fontFamily: 'Georgia, serif', fontSize:"30px" }}>TRAVEL</span> read only a page."
        </div>
        <div className="slideshow-container" style={{ width: "100%", height: slideshowHeight, borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''} ${
                transitioning ? 'transitioning' : ''
              }`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 7.5s ease-in-out' }}>
              <img src={slide} alt={`Slide ${index + 1}`} style={{ maxWidth:'100%', maxHeight: '100%', objectFit: 'contain'}}/>
            </div>
          ))}
        </div>
        <div>
        <span id="getInspire">Get Inspire</span>
        </div>
        <div class="container getPart">
          <div class="row">
            <div class="col d-flex">
              <div class="card" style={{ width: "18rem", border: '2px solid white' }}>
                <img src={img1} class="card-img-top" alt="..." />

                <div class="card-body">
                  <h5 class="card-title">Festivals From India</h5>
                  <p class="card-text">
                    Explore arts and culture festivals across India.
                  </p>
                  <div className="allVisit" id="img1Button">
                  <a href="https://www.goindigo.in/get-inspired/cultural-events.html?linkNav=Festivals%20From%20India%7C3%7CGet%20Inspired" class="btn btn-primary">
                    Visit
                  </a>
                  </div>
                </div>
              </div>
           
              <div class="card" style={{ width: "18rem", border: '2px solid white' }}>
                <img src={img2} class="card-img-top" alt="..." />

                <div class="card-body">
                  <h5 class="card-title">Sun Set Savour</h5>
                  <p class="card-text">
                     Enjoy an exclusive 6Experience at sula Vineyards when 
                     you book a flight to Nashik
                  </p>
                  <div className="allVisit" id="img2Button">
                  <a href="https://www.goindigo.in/campaigns/indigo-offers/sula-vineyards.html?linkNav=Sun%20Set%20Savour%7C2%7CGet%20Inspired" class="btn btn-primary">
                    Visit
                  </a>
                  </div>
                </div>
              </div>
              <div class="card" style={{ width: "18rem", border: '2px solid white' }}>
                <img src={img3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Eat.Stay.Love</h5>
                  <p class="card-text">
                    An all-in-one 6Experience at Fratelli Vineyards
                    awaits when you book a flight to Pune
                  </p>
                  <div className="allVisit">
                  <a href="https://www.goindigo.in/campaigns/indigo-offers/fratelli-vineyards.html" class="btn btn-primary">
                    Visit
                  </a>
                  </div>
                </div>
              </div>
              <div class="card" style={{ width: "18rem", border: '2px solid white' }}>
                <img src={img4} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Travel Wanderlust</h5>
                  <p class="card-text">
                    Travel to your next destination based on how you feel and 
                    what you like.
                  </p>
                  <div className="allVisit">
                  <a href="https://www.goindigo.in/get-inspired/travel-wanderlust.html?linkNav=Travel%20wanderlust%7C4%7CGet%20Inspired" class="btn btn-primary">
                      Visit
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Layout>
  );
}

export default Home;
