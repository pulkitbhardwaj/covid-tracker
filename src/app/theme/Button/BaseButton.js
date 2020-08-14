import React from 'react'
import { createUseStyles } from 'react-jss'

const useBaseStyles = createUseStyles({
	baseButton: {
		fontSize: 16,
		borderRadius: 2,
		textDecoration: 'none',
		cursor: 'pointer',
	},
})

const BaseButton = ({
	type = 'primary',
	size,
	onClick = undefined,
	onHover = undefined,
	onFocus = undefined,
	renderLeading = undefined,
	renderTrailing = undefined,
	disabled = false,
	children,
}) => {
	const styles = useBaseStyles()

	return (
		<button
			type="button"
			className={styles.baseButton}
			onClick={onClick}
			disabled={disabled}
			onFocus={onFocus}>
			{children}
		</button>
	)
}

export default BaseButton
