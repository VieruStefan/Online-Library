import React from 'react'
import { Nav } from 'react-bootstrap'
const ListItem = ({book}) => {
  return (
    <div>
      <Nav.Link href={`/books/${book.id}`}><h3>{book.title}</h3></Nav.Link>

    </div>
  )
}

export default ListItem