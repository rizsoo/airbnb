import './news_component.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function News(props) {
  const { t } = useTranslation();
  return (
    <div className="news">
        <a href={props.link} target={"_blank"} >
        <div className='news-section'>
            <img src={props.image} alt='image_menu' />
            <h3>{t(props.title)}</h3>
            {props.desc ? <p>{t(props.desc)}</p> : null}
        </div>
        </a>
    </div>
  );
}

export default News;
