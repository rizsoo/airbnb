import Header from "../Header";
import Menu from "../Menu";
import foodandculture from "../img/foodandculture.JPG"
import transport from "../img/transport.jpg"
import { useTranslation } from "react-i18next";

function Budapest () {
    const { t } = useTranslation();
    return (
        <div className="budapest">
            <Header />
            <div className="content">
                <h3 className="page-title">Budapest</h3>
            <Menu 
                title={t("food_culture")}  
                image={foodandculture}
                description={t("food_culture_description")}
                link="/foodandculture"
            />
            <Menu 
                title={t("transportation")}  
                image={transport}
                description={t("transportation_description")}
                link="/public-transport"
            />
            </div>
        </div>
    )
}
export default Budapest;