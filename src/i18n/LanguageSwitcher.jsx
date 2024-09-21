import i18next from 'i18next';
import './LanguageSwitcher.scss';

const LanguageSwitcher = () => {
  const changeLang = (event) => {
    i18next.changeLanguage(event.target.value);
  };

  return (
    <select className='select-language' onChange={changeLang} value={i18next.language} // cari dili göstərir
    >
      <option value="en">En</option>
      <option value="az">Az</option>
    </select>
  );
};

export default LanguageSwitcher;
