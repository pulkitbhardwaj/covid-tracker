import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
	table: {
		'marginTop': 20,
		'overflow': 'scroll',
		'height': 400,
		'color': 'grey',
		'& tr': {
			'display': 'flex',
			'justifyContent': 'space-between',
			'&:nth-of-type(odd)': {
				backgroundColor: 'whitesmoke',
			},
			'& td': {
				padding: '0.5rem',
			},
		},
	},
})
