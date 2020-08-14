import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
	map: {
		height: 500,
		backgroundColor: 'white',
		padding: 16,
		borderRadius: 20,
		marginTop: 16,
		boxShadow: '0 0 8px -4px rgba(0, 0, 0, 0.5)',
		'& .leaflet-container': {
			height: '100%',
			borderRadius: 12,
		},
	},
})
