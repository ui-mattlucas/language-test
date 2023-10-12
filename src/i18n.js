import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const distro = 'e-14545aeb17599b58d0e63b3b32';
const defaultLanguage = 'en';
const currentLanguage = window.location.pathname.slice(1, 3);

const getLanguageAsset = async () => {
    const languageRequest = currentLanguage || defaultLanguage;
    let data = await fetch(`https://distributions.crowdin.net/${distro}/content/${languageRequest}.json`)

    if(!data.ok){
        data = await fetch(`https://distributions.crowdin.net/${distro}/content/${defaultLanguage}.json`)
    }

    const responseData = await data.json();
    return responseData;
};

const currentResource = await getLanguageAsset();

const i18next = () => {
    i18n
        .use(initReactI18next) // passes i18n down to react-i18next
        .init({
            resources: { [defaultLanguage]: { translation: currentResource }},
            lng: defaultLanguage, 
            interpolation: {
                escapeValue: false // react already safes from xss
            }
    });
    return i18n;
};

export default i18next();