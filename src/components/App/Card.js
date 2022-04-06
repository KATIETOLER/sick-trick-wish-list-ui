import React from 'react'
import './Card.css'

const Card = ({ name, obstacle, tutorial, id }) => {
	return (
		<div className='card'>
			<h3>{name}</h3>
			<p>{obstacle}</p>
			<p>See tutorial:</p>
			<a href={tutorial}>{tutorial}</a>
		</div>
	)
}

export default Card
