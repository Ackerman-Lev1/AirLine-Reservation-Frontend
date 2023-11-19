import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import airImage from "./Images/airAbout.jpg";
import Layout from "./Layout";

function About() {
  return (
    <Layout>
      <div className="py-5">
        <div className="container mx-auto px-4 text-dark">
          <div className="row">
            <div className="col-md-5">
              <img src={airImage} alt="image" className="img-fluid" />
            </div>
            <div className="col-md-7">
              <h3 className="text-2xl text-dark font-bold">
                Welcome to our Airline App! We strive to provide you with the
                best flight reservation experience. Whether you're a frequent
                flyer or planning your first trip, we've got you covered.
              </h3>
              <p className="mt-4 text-dark">
              We understand that a highly engaged and motivated workforce leads to higher levels of customer service. Our core strength lies in our highly skilled, motivated, and engaged employees, who enable us to deliver the courteous and hassle-free service to the 300,000 passengers flying with us each day. The teamwork displayed by our employees is tangible across our stations and departments. We are proud to have ifly, one of the largest aviation training academies in the world, where the IndiGo spirit is created for over 2,000 people a day.
              </p>
              <p className="mt-4 text-dark">
              Being a responsible airline, we believe that Corporate Social Responsibility (CSR) is an important aspect of our growth strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
