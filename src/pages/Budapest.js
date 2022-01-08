import Header from "../Header";
import Menu from "../Menu";
import foodandculture from "../img/foodandculture.JPG"
import transport from "../img/transport.jpg"

function Budapest () {
    return (
        <div className="budapest">
            <Header />
            <div className="content">
                <h3 className="page-title">Budapest</h3>
            <Menu 
                title="Food & culture" 
                image={foodandculture}
                description="Search between restaurant, bars, shops or city sights."
                link="/foodandculture"
            />
            <Menu 
                title="Transportation" 
                image={transport}
                description="Public transport and alternative ways to get around. "
                link="/public-transport"
            />
            </div>
        </div>
    )
}
export default Budapest;