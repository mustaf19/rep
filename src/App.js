import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Section2 from "./components/whoWeAreSection/section2";
import AboutUs from "./components/aboutUs/aboutUs";
import DataSection from "./components/dataSection/dataSection";
import OurClientSection from "./components/ourClientSection/ourClientSection";
import FooterArea from "./components/footerArea/footerArea";

function App() {
  return (
    <html>
      <body>
        <div>
          <NavBar />
        </div>

        <div>
          <Section2 />
        </div>
        <div>
          <AboutUs />
        </div>
        <div>
          <DataSection />
        </div>
        <div>
          <OurClientSection />
        </div>
        <div>
          <FooterArea />
        </div>
        <div id="copyright">
          <p >© Copyright 2020 Askmeguru Technologies. All Rights Reserved</p>
        </div>
      </body>
    </html>
  );
}

export default App;
