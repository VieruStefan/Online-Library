import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'

const CarListPage = () => {

    let [cars, setCars] = useState([])

    useEffect(()=>{
        getCars()
    }, [])

    let getCars = async() => {
        let response = await fetch('/api/cars/')
        let data = await response.json()
        console.log('DATA: ', data)
        setCars(data)
    }
    return (
        <div>
            <div className='cars-list'>
                {cars.map((car, index) => (
                    <ListItem key={index} car={car} />
                ))}
            </div>
        </div>
    )
}

export default CarListPage