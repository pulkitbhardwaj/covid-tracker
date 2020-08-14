import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
	// Global Styles
	'@global': {
		'*': {
			margin: 0, // Remove all invisible random spacing
		},
		body: {
			fontFamily:
				"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			webkitFontSmoothing: 'antialiased',
			mozOsxFontSmoothing: 'grayscale',
		},
		code: {
			fontFamily:
				"source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
		},
	},
	// Classes
	app: {
		display: 'flex',
		justifyContent: 'space-evenly',
		padding: 20,
		backgroundColor: 'whitesmoke',
		color: 'black',
	},
	'@media (max-width: 990px)': {
		app: {
			flexDirection: 'column',
		},
	},
	appHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	appStats: {
		display: 'flex',
		justifyContent: 'space-between',
	},
})
