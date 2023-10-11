import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

const distro = 'e-14545aeb17599b58d0e63b3b32';

const defaultLang = 'en';
// const LANGUAGES = ['ar']

const getText = async (locale = defaultLang) => {
  return await fetch(`https://crowdin.com/${distro}/${locale}.json`)
    .then(res => console.log(res))
    .catch(error => console.error(error));

    // LANGUAGES.forEach(...)

}

const I18nApp = () => {
  useEffect(() => {
    getText('en');
  }, []);

  return (
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <I18nApp />
  </React.StrictMode>
);
