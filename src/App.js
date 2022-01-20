import './App.css';
import Header from './Header';
import React, { Suspense } from "react";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'hu', 'fr', 'it', 'sp'],
    fallbackLng: "en",
    detection: {
      order: [ 'cookie', 'htmlTag', 'localStorage', 'path', 'subdomain' ],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locals/{{lng}}/translation.json',
    },
    react: { useSuspense: false },
  }); 

function App() {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <div id='breaking-news'>
        <h4 id='news-title'>{t("covid_situation")}</h4>
      </div>
    </div>
  );
}

export default App;
