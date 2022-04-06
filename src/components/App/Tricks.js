import React from 'react'
import './Tricks.css'
import Card from './Card'

const Tricks = ({ tricks, deleteTrick }) => {
	const allTricks = tricks.map((trick) => {
		return (
			<Card
				name={trick.name}
				stance={trick.stance}
				obstacle={trick.obstacle}
				tutorial={trick.tutorial}
				id={trick.id}
				key={trick.id}
				deleteTrick={deleteTrick}
			/>
		)
	})

	return <div className='tricks-container'>{allTricks}</div>
}

export default Tricks
