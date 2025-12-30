import React, {useContext} from "react";
import LanguageContext from "../../contexts/LanguageContext";
import StyleContext from "../../contexts/StyleContext";
import "./LanguageSwitch.scss";

const LanguageSwitch = () => {
  const {language, changeLanguage} = useContext(LanguageContext);
  const {isDark} = useContext(StyleContext);

  return (
    <div 
      className={`language-switch ${isDark ? "dark" : ""}`}
      onClick={changeLanguage}
      title={language === "tr" ? "Switch to English" : "Türkçe'ye geç"}
    >
      <div className={`lang-option ${language === "tr" ? "active" : ""}`}>
        <span className="flag">🇹🇷</span>
        <span className="lang-code">TR</span>
      </div>
      <div className="divider">|</div>
      <div className={`lang-option ${language === "en" ? "active" : ""}`}>
        <span className="flag">🇬🇧</span>
        <span className="lang-code">EN</span>
      </div>
    </div>
  );
};

export default LanguageSwitch;
