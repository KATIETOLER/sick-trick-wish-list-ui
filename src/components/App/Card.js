import React from 'react'
import './Card.css'

const Card = ({ name, obstacle, tutorial, stance, id }) => {
	return (
		<div className='card'>
			<h3>{name}</h3>
			<p>Stance: {stance}</p>
			<p>Obstacle: {obstacle}</p>
			<p>See tutorial:</p>
			<a href={tutorial}>{tutorial}</a>
		</div>
	)
}

export default Card
