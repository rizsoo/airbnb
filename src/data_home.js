import machineGuide from "./img/washing_machine_2.webp"
import checkout from "./img/checking_out.webp"
import parking from "./img/parking.jpg"
import contact from "./img/contact.webp"
import foodandculture from "./img/foodandculture.JPG"
import transport from "./img/transport.jpg"

let data = [
    {title: "contact", desc: "contact_description", link: "/about", image: contact},
    {title: "how_to_use", desc: "how_to_use_description", link: "/guides", image: machineGuide},
    {title: "checking_out", desc: "checking_out_description", link: "/check-out", image: checkout},
    {title: "parking", desc: "parking_description", link: "/parking", image: parking},
    {title: "food_culture", desc: "food_culture_description", link: "/foodandculture", image: foodandculture},
    {title: "transportation", desc: "transportation_description", link: "/public-transport", image: transport},
]

export default data;