import React from 'react';
import { useTranslation } from 'react-i18next';

import './MyFantasticWebsite.css';

const locales = {
  en: "English",
  ar: 'Arabic',
  zh: 'Chinese',
  fr: 'French',
  de: 'German',
  el: 'Duderino',
  it: 'Italian',
  pt: 'Puertoguese',
  ru: 'Russian',
  es: 'Spanish'
};

const getLanguageLinks = () => {
  return Object.entries(locales).map(([key, val]) => {
    return <a href={key}>{val}</a>;
  })
}

function MyFantasticWebsite() {
  const { t, ready } = useTranslation();

  if (!ready) return <>"spinner"</>;

  return (
    <>
      <div className='centeredDiv'>
        <div className='buttonRow'>
          {getLanguageLinks()}
        </div>
        <h1 className='header'>{t('BTBGtX')}</h1>
        <p className='body'>{t('EshJXE')}</p>
        <p className='body'>{t('h/LH2J')}</p>
      </div>
    </>
  );
}

export default MyFantasticWebsite;