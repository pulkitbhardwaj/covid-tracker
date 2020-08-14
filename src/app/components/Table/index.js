import React from 'react'
import { useStyles } from './styles'

const Table = ({ countries }) => {
	const styles = useStyles()

	return (
		<div className={styles.table}>
			{countries
				.slice(0)
				.sort((a, b) => (a.active > b.active ? -1 : 1))
				.map(({ country, active }) => (
					<tr>
						<td>{country}</td>
						<td>
							<strong>{active}</strong>
						</td>
					</tr>
				))}
		</div>
	)
}

export default Table
