import React from 'react'
import tvguide from "../../img/guides/tv.png"
import cafe from "../../img/guides/espresso.png"
import boiler from "../../img/guides/water-boiler.png"
import washing from "../../img/guides/washing-machine.png"
import stove from "../../img/guides/electric-stove.png"
import aircondition from "../../img/guides/air-conditioner.png"
import Machines from '../../components/guides_component'

import { useTranslation } from "react-i18next";

const Guides = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className='guides-page-content'>
                <Machines 
                    title={t("tv_guide")} 
                    image={tvguide}
                    link="/tvguide"
                />
                <Machines 
                    title={t("cafe_guide")} 
                    image={cafe}
                    link="/cafeguide"
                />
                <Machines 
                    title={t("boiler_guide")} 
                    image={boiler}
                    link="/boilerguide"
                />
                <Machines 
                    title={t("washing_guide")} 
                    image={washing}
                    link="/washingmachineguide"
                />
                <Machines 
                    title={t("stove_guide")}
                    image={stove}
                    link="/stoveguide"
                />
                <Machines 
                    title={t("air_guide")}
                    image={aircondition}
                    link="/aircondition"
                />
            </div>
        </div>
    )
}

export default Guides
