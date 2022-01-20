import React from 'react';
import { useState } from 'react';
import './LanguageSelector.css';
import en from '../img/languages/united-kingdom.png';
import hu from '../img/languages/hungary.png';
import fr from '../img/languages/france.png';
import it from '../img/languages/italy.png';
import sp from '../img/languages/spain.png';
import de from '../img/languages/germany.png';
import ru from '../img/languages/russia.png';

import i18next from 'i18next';

function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(true);
    const languages = [
        {
            code: en,
            name: 'English',
            country_code: 'en'
        },
        {
            code: hu,
            name: 'Magyar',
            country_code: 'hu'
        },
        {
            code: fr,
            name: 'Francaise',
            country_code: 'fr'
        },
        {
            code: it,
            name: 'Italiano',
            country_code: 'it'
        },
        {
            code: sp,
            name: 'Spagna',
            country_code: 'sp'
        },
        {
            code: de,
            name: 'Deutschland',
            country_code: 'de'
        },
        {
            code: ru,
            name: 'Russia',
            country_code: 'ru'
        },
    ]
    
    let lang = i18next.language;
    console.log(lang);

    function isEnglishLang() {
    if(i18next.language === "en") {
        return en
    } else if(i18next.language === "hu") {
        return hu
    } else if(i18next.language === "fr") {
        return fr
    } else if(i18next.language === "it") {
        return it
    } else if(i18next.language === "sp") {
        return sp
    } else if(i18next.language === "de") {
        return de
    } else if(i18next.language === "ru") {
        return ru
    }};

    // const [currentLang, setCurrentLang] = useState(true);
    isEnglishLang()

  return (
    <div>
        <div className='language-selector'>
            <div className={isOpen ? "language-icons" : "language-icons language-icons-open" }>
                {languages.map(({ code, name, country_code }) => (
                <img src={code} alt='' key={code} onClick={() => { setIsOpen(true); i18next.changeLanguage(country_code)}}></img>
                ))}
            </div>
            <img src={lang ? isEnglishLang() : en} alt="" onClick={() => { setIsOpen(!isOpen) }}></img>
        </div>
    </div>
  )};

export default LanguageSelector;
