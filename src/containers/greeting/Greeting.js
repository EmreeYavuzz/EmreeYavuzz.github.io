import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../i18n";

// Resume dosyalarını import et
import resumeTR from "./resume.pdf";
import resumeEN from "./resume_eng.pdf";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const {language} = useContext(LanguageContext);
  const t = getTranslation(language);
  
  // Dile göre resume dosyası ve indirme adı
  const resumeFile = language === "en" ? resumeEN : resumeTR;
  const resumeDownloadName = language === "en" ? "Emre_Yavuz_Resume.pdf" : "Emre_Yavuz_CV.pdf";
  
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {t.greeting.title} <span className="wave-emoji">{emoji("")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {t.greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text={t.greeting.contactButton} href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={resumeFile}
                    download={resumeDownloadName}
                    className="download-link-button"
                  >
                    <Button text={t.greeting.resumeButton} />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
