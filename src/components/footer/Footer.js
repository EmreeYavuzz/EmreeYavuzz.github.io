import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../i18n";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const {language} = useContext(LanguageContext);
  const t = getTranslation(language);
  
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {t.footer.madeWith} {t.footer.by}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © 2025 Emre Yavuz
        </p>
      </div>
    </Fade>
  );
}
