import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { useStyles } from './styles'

const InfoBox = ({ title, cases, total }) => {
	const styles = useStyles()

	return (
		<Card className={styles.infoBox}>
			<CardContent>
				<Typography color="textSecondary" className={styles.infoBoxTitle}>
					{title}
				</Typography>
				<h2 className={styles.infoBoxCases}>{cases}</h2>
				<Typography color="textSecondary" className={styles.infoBoxTotal}>
					{total} Total
				</Typography>
			</CardContent>
		</Card>
	)
}

export default InfoBox
