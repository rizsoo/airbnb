import './Menu.css'
import { Link } from 'react-router-dom';

function Menu(props) {
  
  return (
    <div className="menu">
      <div className='menu-section'>
        <img src={props.image} alt='image_menu'/>
          <div>
              <h3>{props.title}</h3>
              <p>{props.description}</p>
          </div>
      </div>
      <Link to={props.link}><button>Read</button></Link>
    </div>
  );
}

export default Menu;
