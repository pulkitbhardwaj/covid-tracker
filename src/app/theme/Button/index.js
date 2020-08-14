import React, { useState, useEffect, useReducer } from 'react'
// import { useStyles } from './styles'
import { createUseStyles } from 'react-jss'

// const buttonVariant = (BaseComponent, variantStyles) => {
// 	const styles = useButtonStyles({ variantStyles })

// 	return <BaseComponent className={styles.button} />
// }

export const addStyles = (BaseComponent, variant = {}) => {
	const styles = createStyles({ variant })

	return <BaseComponent className={styles.button} />
}

const createStyles = createUseStyles(({ variant }) => ({
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
			...variant.button,
		},
	},
}))

const Button = ({
	type = 'primary',
	size = 'medium',
	onClick = undefined,
	onHover = undefined,
	onFocus = undefined,
	renderLeading = undefined,
	renderTrailing = undefined,
	disabled = false,
	children,
	...otherProps
}) => {
	const styles = createStyles()

	const [state, setState] = useState({
		type: type,
		size: size,
	})

	return (
		<button
			type="button"
			onClick={onClick}
			onMouseOver={onHover}
			onFocus={onFocus}
			disabled={disabled}
			{...otherProps}>
			{renderLeading}
			{children}
			{renderTrailing}
		</button>
	)
}

export default Button
