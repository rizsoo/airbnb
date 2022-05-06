import React from 'react'
import Locations from '../../components/locations_component'
import { useState } from 'react'
import hashtags from './data_hashtags.js'
import "./FoodandCulture.css"
import { useTranslation } from "react-i18next";

import i18next from "i18next";
import data from './data_foodandcult/data_foodandculture.js'


const FoodandCulture = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [isActive, setActive] = useState()
    const { t } = useTranslation();

    const filteredProducts = data.filter(val => {
        if (searchTerm === "" || val.hashtags.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || t(val.title).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
          return val
        } 
      });
    return (
        <div className='foodandculture'>
            <div>
            <center><input type="text" placeholder={"Search between places..."} onChange={event => {setSearchTerm(event.target.value); setActive()}}/></center>
            <div className='filtering'>
                {hashtags.map((tag, index) => <h6 

                    onClick={() => {setSearchTerm(() => tag); setActive(index)}}
                    key={index}
                    className={index === isActive ? "highlight" : null} 
                    
                    >#{t(tag)}</h6>)}
            </div>
                {filteredProducts.length > 0 ? filteredProducts.map(place => {
                    return (
                        <Locations 
                            title={place.title} 
                            image={place.image}
                            hashtags={place.hashtags}
                            bestof={place.bestof}
                            textarea={place.textarea}
                            maps={place.maps}
                        />
                    )
                }): <h5 className='sorry'>"Sorry, no results..."</h5>}
            </div>
        </div>
    )
}

export default FoodandCulture
