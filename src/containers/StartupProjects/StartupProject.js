import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../i18n";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  const {language} = useContext(LanguageContext);
  const t = getTranslation(language);
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = Array.from(
    new Set(
      bigProjects.projects
        .filter(project => project.display !== false)
        .flatMap(project =>
          Array.isArray(project.category)
            ? project.category
            : [project.category]
        )
    )
  ).filter(Boolean);
  const visibleProjects = bigProjects.projects
    .map((project, index) => ({project, index}))
    .filter(
      ({project}) =>
        project.display !== false &&
        (activeCategory === "all" ||
          (Array.isArray(project.category)
            ? project.category
            : [project.category]
          ).includes(activeCategory))
    );

  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{t.projects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {t.projects.subtitle}
          </p>

          <div className="project-filters" aria-label={t.projects.title}>
            {["all", ...categories].map(category => (
              <button
                key={category}
                type="button"
                className={`project-filter-button ${
                  activeCategory === category ? "active" : ""
                }`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category === "all"
                  ? t.projects.filterAll
                  : t.projects.categoryLabels?.[category] || category}
              </button>
            ))}
          </div>

          <div className="projects-container">
            {visibleProjects.map(({project, index}) => {
              const translatedProject = t.projects.projectsList[index] || {};
              const categories = Array.isArray(project.category) ? project.category : [project.category];
              const categoryClasses = categories.map(cat => `category-${cat}`).join(' ');
              return (
                <div
                  key={project.projectName || index}
                  className={
                    isDark
                      ? `dark-mode project-card project-card-dark ${categoryClasses}`
                      : `project-card project-card-light ${categoryClasses}`
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={translatedProject.projectName || project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    {categories.length > 0 && categories[0] && (
                      <div className="category-badges">
                        {categories.map((cat, idx) => (
                          <span key={idx} className={`category-badge ${cat}`}>
                            {t.projects.categoryLabels?.[cat] || cat}
                          </span>
                        ))}
                      </div>
                    )}
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {translatedProject.projectName || project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {translatedProject.projectDesc || project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
