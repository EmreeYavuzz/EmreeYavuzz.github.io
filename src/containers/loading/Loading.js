import React, {useContext} from "react";
import "./loading.scss";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../i18n";

export default function Loading() {
  const languageContext = useContext(LanguageContext);
  const language = languageContext?.language || "tr";
  const t = getTranslation(language);
  
  return (
    <div className="centerContent">
      <div className="sk-circle">
        <div className="sk-circle1 sk-child"></div>
        <div className="sk-circle2 sk-child"></div>
        <div className="sk-circle3 sk-child"></div>
        <div className="sk-circle4 sk-child"></div>
        <div className="sk-circle5 sk-child"></div>
        <div className="sk-circle6 sk-child"></div>
        <div className="sk-circle7 sk-child"></div>
        <div className="sk-circle8 sk-child"></div>
        <div className="sk-circle9 sk-child"></div>
        <div className="sk-circle10 sk-child"></div>
        <div className="sk-circle11 sk-child"></div>
        <div className="sk-circle12 sk-child"></div>
      </div>
      <p className="loading-text">{t.splash.loading}</p>
    </div>
  );
}
