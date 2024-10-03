import React from "react";
import "./aboutUs.css";
import askMeGuru from "./utils/askMeGuru.png";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUsItems">
        <img src={askMeGuru} alt="askMeGuru"></img>
      </div>
      <div className="aboutUsItems">
        <h2>Leading Software Development Company In Hyderabad, India.</h2>
        <p>
          ASKMEGURU TECHNOLOGIES is the leading digital platform for all
          business firms across the world and an one stop automated solution for
          your trade and industry. ASKMEGURU TECHNOLOGIES began its business
          operation in bulk SMS and Digital Marketing solutions providing
          company in December 2013. On the public interest we have done our
          platform into all over Telangana state focusing exclusively in high
          quality and cost-effective software development and implementation of
          services. We are advancing on a tremendous pace and with involvement
          of 15 + skilled and experienced people working in the organization.
          Depending on the size and field of your organization, we have
          different products and services to meet your requirements. We provide
          the optimum and customized solutions made for your organization.
          ASKMEGURU is a leading provider of white label search & monetization
          solutions. We serve a network of more than 100 web publishers
          globally. Offering core search solutions as a proven means to monetize
          audience via a search based advertising revenue stream.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
