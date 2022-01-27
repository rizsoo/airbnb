import Header from "../Header";
import Pieces from "../Pieces";
import addressImg from "../img/info/address.png"
import phoneImg from "../img/info/phone.png"
import wifiImg from "../img/info/wifi.png"
import entrancecodeImg from "../img/info/entrance_code.png"
import emergencyImg from "../img/info/emergency.png"

import { useTranslation } from "react-i18next";

function Info () {
    const { t } = useTranslation();
    return (
        <div className="info">
            <Header />
            <div className="content">
                <h3 className="page-title">Info</h3>
            </div>
            <Pieces 
                img={addressImg}
                title={t("address_of_apartment")}
                description="1137 Budapest, Katona József utca 10/b"
                link="https://goo.gl/maps/JUpNohKw8Dcu4rFf9"
            />
            <Pieces 
                img={phoneImg}
                title={t("phone_number")}
                description="+36 30 580 5601"
                link="tel:0036305805601"
            />
            <Pieces 
                img={wifiImg}
                title={t("wifi_password")}
                description="airbnbofKris1"
                link=""
            />
            <Pieces
                img={entrancecodeImg}
                title={t("entrance_code")}
                description="42 [key] 3029"
                link=""
            />
            <Pieces
                img={emergencyImg}
                title={t("emergency_services")}
                description={t("emergency_services_description")}
                link="tel:112"
            />
        </div>
    )
}
export default Info;