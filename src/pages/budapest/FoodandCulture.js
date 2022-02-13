import React from 'react'
import Header from '../../Header'
import data from './data_foodandculture.js'
import Locations from '../../components/locations_component'
import { useState } from 'react'
import hashtags from './data_hashtags.js'

const FoodandCulture = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [isActive, setActive] = useState()
    const filteredProducts = data.filter(val => {
        if (searchTerm === "" || val.hashtags.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
          return val
        } 
      });
    return (
        filteredProducts.length > 0 ?
        <div className='foodandculture'>
            <Header />
            <div>
            <center><input type="text" placeholder={"Search between places..."} onChange={event => {setSearchTerm(event.target.value); setActive()}}/></center>
            <div className='filtering'>
                {hashtags.map((tag, index) => <h6 

                    onClick={() => {setSearchTerm(() => tag); setActive(index)}}
                    key={index}
                    className={index === isActive ? "highlight" : null} 
                    
                    >#{tag}</h6>)}
            </div>
                {filteredProducts.map(place => {
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
                })}
            </div>
        </div>
        :
        <div className='foodandculture'>
            <Header />
            <div>
            <input type="text" placeholder={"Search between places..."} onChange={event => {setSearchTerm(event.target.value)}}/>
            <div className='filtering'>
                {hashtags.map(tag => <h6 onClick={event => {setSearchTerm(() => tag)}}>#{tag}</h6>)}
            </div>
                <h5 className='sorry'>Sorry, no places found...</h5>
            </div>
        </div>
    )
}

export default FoodandCulture
