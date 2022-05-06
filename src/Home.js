import './Home.css';
import React, { Suspense } from "react";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import menu_data from './data_home';
import news_data from './data_news';
import Menu from './components/menu_component';
import News from './components/news_component';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'hu', 'fr', 'it', 'sp', 'de', 'ru'],
    fallbackLng: "en",
    detection: {
      order: [ 'cookie', 'htmlTag', 'localStorage', 'path', 'subdomain' ],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locals/{{lng}}/translation.json',
    },
    // react: { useSuspense: false },
  }); 

  const loadingMarkup = (
    <div>
      <h2>Loading...</h2>
    </div>
  )

function App() {
  const { t } = useTranslation();
  return (
    <Suspense fallback={loadingMarkup}>
    <div className='menu-list-app'>
      {news_data.map((data) => (
        <News 
                title={t(data.title)}
                image={data.image}
                link={data.link}
            />
      ))}
      {menu_data.map((data) => (
        <Menu 
                title={t(data.title)}
                image={data.image}
                description={t(data.desc)}
                link={data.link}
            />
      ))}
    </div>
    </Suspense>
  );
}

export default App;
