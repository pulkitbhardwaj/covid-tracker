import React from 'react'
import Button, { addStyles } from './index'

const PrimaryButton = addStyles(Button, () => ({
	button: {
		backgroundColor: 'red',
		color: 'white',
	},
}))

export default PrimaryButton
