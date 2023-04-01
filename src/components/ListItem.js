import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({car}) => {
  return (
    <Link to={`/cars/${car.id}`}>
        <h3>{car.name}</h3>
    </Link>
  )
}

export default ListItem