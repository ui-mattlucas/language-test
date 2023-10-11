import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

// import { i18n } from "@lingui/core"

// import otaClient from "@crowdin/ota-client"

import en from '../languages/en.json';
import fr from '../languages/fr.json';
import ja from '../languages/ja.json';
import ru from '../languages/ru.json';
import './MyFantasticWebsite.css';

// export const locales = {
//     en: "English",
//     cs: "Česky",
//     ar: 'Arabic',
//     'zh-CN': 'Chinese',
//     fr: 'French',
//     de: 'German',
//     el: 'Duderino',
//     it: 'Italian',
//     pt: 'Puertoguese',
//     ru: 'Russian',
//     es: 'Spanish'
// }

function MyFantasticWebsite() {
  const [locale, setLocale] = useState('en'); 

  const messages = {
    en,
    fr,
    ja,
    ru
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className='centeredDiv'>
        <div className='buttonRow'>
        <button onClick={() => setLocale('en')}>English</button>
        <button onClick={() => setLocale('fr')}>French</button>
        <button onClick={() => setLocale('ja')}>Japanese</button>
        <button onClick={() => setLocale('ru')}>Russian</button>
        </div>
      <h1 className='header'><FormattedMessage id="heading" /></h1>
      <p className='body'><FormattedMessage id="caption" /></p>
      <p className='body'><FormattedMessage id="subheading" /></p>
      </div>
    </IntlProvider>
  );
}

export default MyFantasticWebsite;