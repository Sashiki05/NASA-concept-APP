/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

// --> Components
import NavBar from "./components/NavBar";
import LogoNasa from "./components/logoNASA";
import Gallery from "./pages/Gallery";
import IssTitle from "./components/IssTitle";
import ImgOtdButton from "./components/ImgOtdButton";
import ImageOfTheDay from "./pages/ImageOfTheDay";
import UpDownArrow from "./components/up-downArrow";
// --> PAGES
import SolarSystem from "./pages/SolarSystem";

import Home from "./pages/Home";
import Iss from "./pages/ISS";

import "./App.css";
import "./sm.css";

function App() {
  const [page, setPage] = useState("Home");
  const [popup, setPopup] = useState("default");
  const [displayGallery, setDisplayGallery] = useState(false);
  const [displayImgotd, setDisplayImgotd] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 431px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 431px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      <div id="app_overflow">
        {matches && (
          <SwitchTransition>
            <CSSTransition key={page} timeout={350} classNames="page">
              {
                {
                  ISS: (
                    <Iss
                      displayGallery={displayGallery}
                      displayImgotd={displayImgotd}
                    />
                  ),
                  SolarSystem: (
                    <SolarSystem
                      displayGallery={displayGallery}
                      displayImgotd={displayImgotd}
                      matches={matches}
                      setMatches={setMatches}
                    />
                  ),
                  Home: (
                    <Home
                      displayGallery={displayGallery}
                      displayImgotd={displayImgotd}
                      matches={matches}
                    />
                  ),
                }[page]
              }
            </CSSTransition>
          </SwitchTransition>
        )}
        {!matches && (
          <>
            {" "}
            {
              {
                ISS: (
                  <Iss
                    displayGallery={displayGallery}
                    displayImgotd={displayImgotd}
                  />
                ),
                SolarSystem: (
                  <SolarSystem
                    displayGallery={displayGallery}
                    displayImgotd={displayImgotd}
                    matches={matches}
                    setMatches={setMatches}
                  />
                ),
                Home: (
                  <Home
                    displayGallery={displayGallery}
                    displayImgotd={displayImgotd}
                    matches={matches}
                  />
                ),
              }[page]
            }
          </>
        )}
        <Gallery
          display={displayGallery}
          setDisplay={setDisplayGallery}
          setPopup={setPopup}
          matches={matches}
        />
        <ImageOfTheDay
          displayImgotd={displayImgotd}
          setDisplayImgotd={setDisplayImgotd}
          setPopup={setPopup}
          matches={matches}
        />
        <NavBar
          loadPage={setPage}
          currentPage={page}
          setDisplayGallery={setDisplayGallery}
          displayGallery={displayGallery}
          displayImgotd={displayImgotd}
          currentPopup={popup}
          matches={matches}
          setMatches={setMatches}
          setDisplayImgotd={setDisplayImgotd}
        />
      </div>

      {matches && (
        <LogoNasa
          displayGallery={displayGallery}
          displayImgotd={displayImgotd}
          popup={popup}
        />
      )}

      <IssTitle
        display={page}
        displayGallery={displayGallery}
        displayImgotd={displayImgotd}
      />

      <ImgOtdButton
        displayImgotd={displayImgotd}
        setDisplay={setDisplayImgotd}
        displayGallery={displayGallery}
      />
      <UpDownArrow
        displayGallery={displayGallery}
        displayImgotd={displayImgotd}
      />
    </>
  );
}

export default App;
