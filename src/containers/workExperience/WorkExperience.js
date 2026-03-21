import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../i18n";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const {language} = useContext(LanguageContext);
  const t = getTranslation(language);
  const workItems = t.workExperience.workItems || t.workExperience.experiences || [];
  const internshipItems = t.workExperience.internshipItems || [];

  const renderExperienceSection = (sectionTitle, items, logos) => {
    if (!items || !items.length) {
      return null;
    }

    return (
      <div className="experience-section">
        <h2 className="experience-section-heading">{sectionTitle}</h2>
        <div className="experience-cards-div">
          {items.map((card, i) => {
            return (
              <ExperienceCard
                key={`${sectionTitle}-${i}`}
                isDark={isDark}
                cardInfo={{
                  company: card.company,
                  desc: card.desc,
                  date: card.date,
                  companylogo: logos?.[i]?.companylogo,
                  bannerColor: logos?.[i]?.bannerColor,
                  role: card.role,
                  descBullets: card.descBullets
                }}
              />
            );
          })}
        </div>
      </div>
    );
  };

  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container">
            <div>
              {renderExperienceSection(
                t.workExperience.workTitle,
                workItems,
                workExperiences.work
              )}
              {renderExperienceSection(
                t.workExperience.internshipTitle,
                internshipItems,
                workExperiences.internships
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
