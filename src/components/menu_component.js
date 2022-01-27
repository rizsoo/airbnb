import './menu_component.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Menu(props) {
  const { t } = useTranslation();
  return (
    <div className="menu">
      <div className='menu-section'>
        <img src={props.image} alt='image_menu'/>
          <div>
              <h3>{props.title}</h3>
              <p>{props.description}</p>
          </div>
      </div>
      <Link to={props.link}><button>{t("read")}</button></Link>
    </div>
  );
}

export default Menu;
