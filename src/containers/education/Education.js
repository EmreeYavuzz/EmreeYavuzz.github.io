import React, {useContext} from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../i18n";

export default function Education() {
  const {language} = useContext(LanguageContext);
  const t = getTranslation(language);
  
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">{t.education.title}</h1>
        <div className="education-card-container">
          {t.education.schools.map((school, index) => (
            <EducationCard key={index} school={{
              ...educationInfo.schools[index],
              subHeader: school.subHeader,
              duration: school.duration,
              desc: school.desc,
              descBullets: school.descBullets
            }} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
