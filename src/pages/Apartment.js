import Header from "../Header";
import Menu from "../Menu";
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
                title="Contact" 
                image={contact}
                description="Phone numbers, passcodes, address..."
                link="/about"
            />
            <Menu 
                title="How to use?" 
                image={machineGuide}
                description="Machine guides, such as washing machine or air condotion."
                link="/guides"
            />
            <Menu 
                title="Checking out"
                image={checkout}
                description="Follow these steps when you are leaving."
                link="/check-out"
            />
            <Menu 
                title="Parking"
                image={parking}
                description="Basic information in case you have tarvelled by car."
                link="/parking"
            />
            </div>
        </div>
    )
}
export default Apartment;