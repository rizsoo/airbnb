import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar ( {setIsOpen } ) {
    const { t } = useTranslation();
    return (
            <ul onClick={() => setIsOpen(false)}>
                <li><Link to="/apartment">{t("apartment")}</Link></li>
                <li><Link to="/budapest">Budapest</Link></li>
                <li><Link to="/about">Info</Link></li>
            </ul>
    )
}
export default Navbar;