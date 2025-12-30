import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {LanguageProvider} from "../contexts/LanguageContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  
  // URL'den dil kontrolü - varsayılan Türkçe, /en ise İngilizce
  const getInitialLanguage = () => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    
    // /en path'i veya #/en hash'i varsa İngilizce
    if (path === "/en" || path === "/en/" || hash === "#/en") {
      return "en";
    }
    
    // LocalStorage'dan kontrol (sadece uzantısız URL için)
    if (path === "/" || path === "" || !hash || hash === "#/") {
      const stored = localStorage.getItem("language");
      if (stored) {
        return JSON.parse(stored);
      }
    }
    
    // Varsayılan Türkçe
    return "tr";
  };
  
  const [language, setLanguage] = useLocalStorage("language", getInitialLanguage());
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);
  const [isLanguageChanging, setIsLanguageChanging] = useState(false);

  // URL'yi dile göre güncelle - Türkçe için uzantısız, İngilizce için /en
  useEffect(() => {
    const currentHash = window.location.hash;
    
    if (language === "en") {
      // İngilizce için #/en hash'i ekle
      if (currentHash !== "#/en") {
        window.history.replaceState(null, "", "#/en");
      }
    } else {
      // Türkçe için hash'i temizle (varsayılan)
      if (currentHash && currentHash !== "#/") {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
    
    // HTML lang attribute güncelle
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const changeLanguage = () => {
    setIsLanguageChanging(true);
    setTimeout(() => {
      setLanguage(language === "tr" ? "en" : "tr");
      setIsLanguageChanging(false);
    }, 150);
  };

  return (
    <div className={`${isDark ? "dark-mode" : ""} ${isLanguageChanging ? "language-transition" : ""}`}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <LanguageProvider value={{language: language, changeLanguage: changeLanguage}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <div className="content-wrapper">
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <Projects />
            <StartupProject />
            <Achievement />
            <Blogs />
            <Talks />
            <Twitter />
            <Podcast />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </div>
        )}
        </LanguageProvider>
      </StyleProvider>
    </div>
  );
};

export default Main;
