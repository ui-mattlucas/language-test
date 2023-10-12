import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider } from 'react-intl';

const distro = 'e-14545aeb17599b58d0e63b3b32';
const defaultLang = 'en';

// Initialize with messages as an empty object
const messages = {};

export const IntlProviderApp = () => {
  const [currentLang, setCurrentLang] = useState(defaultLang);

  const handleLanguageChange = async (newLang) => {
    // checks messages object for the new language
    if (messages[newLang]) {
      // if it exists in the object, set the current language
     setCurrentLang(newLang);
    } else {

      console.log(`Loading translations for ${newLang}`);
// fetch method to get the translation data from Crowdin
    try {
      const response = await fetch(
          `https://distributions.crowdin.net/${distro}/content/${newLang}.json`, {

          method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PATCH, OPTIONS',
            }
          });
// retrieve the translation data from the HTTP request
        const translationData = await response.json();
// newLang is the key and translationData is the value
        messages[newLang] = translationData;
        // after fetching and storing the translation data, this updates the currentlang state to the 
        // new language (newLang), which triggers a re-render of the component w/ the new langauge
        setCurrentLang(newLang);
      } catch (error) {
        console.error(`Failed: ${newLang}`);
      }
    }
  };

  useEffect(() => {
    // Load translations for the default language
    handleLanguageChange(defaultLang);
  }, []);

  return (
    <div>
    <div>
        <select onChange={(e) => handleLanguageChange(e.target.value)} value={currentLang}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
        </select>
      </div>
      <IntlProvider locale={currentLang} messages={messages[currentLang]}>
        <App />
      </IntlProvider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <IntlProviderApp />
  </React.StrictMode>
);
