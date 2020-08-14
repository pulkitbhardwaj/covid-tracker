import { createUseStyles } from 'react-jss'

const primaryButton = {
	backgroundColor: 'red',
	color: 'white',
}

const secondaryButton = {
	backgroundColor: 'blue',
	color: 'white',
}

const tertiaryButton = {
	backgroundColor: 'blue',
	color: 'white',
}

export const useStyles = createUseStyles((theme) => ({
	button: {
		textDecoration: 'none',
		cursor: 'pointer',
		margin: {
			top: 10,
			bottom: 10,
		},
		fontSize: 16,
		borderRadius: 2,
		border: {
			color: 'black',
			width: 1,
			style: 'solid',
		},
	},
	smallButton: {
		padding: [10, 40],
	},
	mediumButton: {
		padding: [20, 50],
	},
	largeButton: {
		padding: [30, 60],
	},
	primaryButton: {
		composes: ({ size }) => {
			switch (size) {
				case 'small':
					return ['$button', '$smallButton']
				case 'medium':
					return ['$button', '$mediumButton']
				case 'large':
					return ['$button', '$largeButton']
			}
		},
		backgroundColor: 'red',
		color: 'white',
	},
	secondaryButton: {
		composes: ({ size }) => {
			switch (size) {
				case 'small':
					return ['$button', '$smallButton']
				case 'medium':
					return ['$button', '$mediumButton']
				case 'large':
					return ['$button', '$largeButton']
			}
		},
		backgroundColor: 'blue',
		color: 'white',
	},
	tertiaryButton: {
		composes: ({ size }) => {
			switch (size) {
				case 'small':
					return ['$button', '$smallButton']
				case 'medium':
					return ['$button', '$mediumButton']
				case 'large':
					return ['$button', '$largeButton']
			}
		},
		backgroundColor: 'blue',
		color: 'white',
	},
}))
