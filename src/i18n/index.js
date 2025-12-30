/* i18n index file */
import {tr} from "./tr";
import {en} from "./en";

export const translations = {
  tr,
  en
};

export const getTranslation = (language) => {
  return translations[language] || translations.tr;
};

export {tr, en};
