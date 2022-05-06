import Info_component from "../components/info_component";
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
            <div className="content">
                <h3 className="page-title">Info</h3>
            </div>
            <Info_component 
                img={addressImg}
                title={t("address_of_apartment")}
                description="1137 Budapest, Katona József utca 10/b"
                shown={false}
                link="https://goo.gl/maps/JUpNohKw8Dcu4rFf9"
            />
            <Info_component 
                img={phoneImg}
                title={t("phone_number")}
                description="+36 30 580 5601"
                shown={false}
                link="tel:0036305805601"
            />
            <Info_component 
                img={wifiImg}
                title={t("wifi_password")}
                description="airbnbofKris1"
                shown={false}
                link=""
            />
            <Info_component
                img={entrancecodeImg}
                title={t("entrance_code")}
                description="42 [key] 3029"
                shown={false}
                link=""
            />
            <Info_component
                img={emergencyImg}
                title={t("emergency_services")}
                description={t("emergency_services_description")}
                shown={true}
                link="tel:112"
            />
        </div>
    )
}
export default Info;