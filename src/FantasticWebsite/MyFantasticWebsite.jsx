import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import en from '../languages/en.json';
import fr from '../languages/fr.json';
import ja from '../languages/ja.json';
import ru from '../languages/ru.json';
import './MyFantasticWebsite.css';

function MyFantasticWebsite() {
  const [locale, setLocale] = useState('en'); 

  const messages = {
    en: en,
    fr: fr,
    ja: ja,
    ru: ru
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