import { Link } from 'react-router-dom';

function Navbar () {
    return (
            <ul>
                <li><Link to="/apartment">Apartment</Link></li>
                <li><Link to="/budapest">Budapest</Link></li>
                <li><Link to="/about">Info</Link></li>
            </ul>
    )
}
export default Navbar;