import React from 'react'
import './Card.css'

const Card = ({ name, obstacle, tutorial, stance, id }) => {
	return (
		<div className='card'>
			<h3>{name}</h3>
			<p className='stance'>Stance: {stance}</p>
			<p className='obstacle'>Obstacle: {obstacle}</p>
			<p>See tutorial:</p>
			<a href={tutorial} className='tutorial-link'>
				Watch Tutorial
			</a>
		</div>
	)
}

export default Card
