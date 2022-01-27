import Header from "../Header";
import Menu from "../components/menu_component";
import machineGuide from "../img/washing_machine_2.webp"
import checkout from "../img/checking_out.webp"
import parking from "../img/parking.jpg"
import contact from "../img/contact.webp"
import { useTranslation } from "react-i18next";

function Apartment () {
    const { t } = useTranslation();
    return (
        <div className="apartment">
            <Header />
            <div className="content">
                <h3 className="page-title">{t("apartment")}</h3>
            <Menu 
                title={t("contact")}
                image={contact}
                description={t("contact_description")}
                link="/about"
            />
            <Menu 
                title={t("how_to_use")} 
                image={machineGuide}
                description={t("how_to_use_description")}
                link="/guides"
            />
            <Menu 
                title={t("checking_out")}
                image={checkout}
                description={t("checking_out_description")}
                link="/check-out"
            />
            <Menu 
                title={t("parking")}
                image={parking}
                description={t("parking_description")}
                link="/parking"
            />
            </div>
        </div>
    )
}
export default Apartment;