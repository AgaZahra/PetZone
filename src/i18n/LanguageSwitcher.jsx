import React from 'react';
import i18next from 'i18next';
import { Dropdown } from 'react-bootstrap';
import azFlag from '../../src/assets/media/image/az-flag.png';
import enFlag from '../../src/assets/media/image/en-flag.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LanguageSwitcher.scss';

const LanguageSwitcher = () => {
  const changeLang = (lang) => {
    i18next.changeLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <Dropdown>
        <Dropdown.Toggle className="dropdown" id="dropdown-basic">
          <div className="selected">
            <img src={i18next.language === 'az' ? azFlag : enFlag} alt={i18next.language} className="flag-icon" />
            {i18next.language === 'az' ? 'Az' : 'En'}
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu" >
          <Dropdown.Item className="lang-option" onClick={() => changeLang('az')}>
            <img src={azFlag} alt="Azerbaijan" className="flag-icon" /> Az
          </Dropdown.Item>
          <Dropdown.Item className="lang-option" onClick={() => changeLang('en')}>
            <img src={enFlag} alt="English" className="flag-icon" /> En
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LanguageSwitcher;
