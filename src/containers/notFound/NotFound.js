import React, {useContext} from "react";
import "./NotFound.scss";
import {Fade} from "react-reveal";
import Button from "../../components/button/Button";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../i18n";

export default function NotFound() {
  const {isDark} = useContext(StyleContext);
  const {language} = useContext(LanguageContext);
  const t = getTranslation(language);

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className={isDark ? "dark-mode not-found-container" : "not-found-container"}>
        <div className="not-found-content">
          <h1 className="not-found-title">{t.notFound.title}</h1>
          <h2 className={isDark ? "dark-mode not-found-subtitle" : "not-found-subtitle"}>
            {t.notFound.subtitle}
          </h2>
          <p className={isDark ? "dark-mode not-found-description" : "not-found-description"}>
            {t.notFound.description}
          </p>
          <div className="not-found-button">
            <Button text={t.notFound.button} href="/" />
          </div>
        </div>
      </div>
    </Fade>
  );
}
