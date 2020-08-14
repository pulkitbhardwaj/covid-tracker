import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

const options = {
	legend: {
		display: false,
	},
	elements: {
		point: {
			radius: 0,
		},
	},
	maintainAspectRatio: false,
	scales: {
		xAxes: [
			{
				type: 'time',
				time: {
					format: 'MM/DD/YY',
					tooltipFormat: 'll',
				},
			},
		],
		yAxes: [
			{
				gridLines: {
					display: false,
				},
			},
		],
	},
}

const LineGraph = () => {
	const [data, setData] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
				.then((response) => response.json())
				.then((apiData) => {
					const chartData = []
					let lastDataPoint

					for (let [date, number] of Object.entries(apiData.cases)) {
						if (lastDataPoint) {
							chartData.push({
								x: date,
								y: number - lastDataPoint,
							})
						}
						lastDataPoint = number
					}

					setData(chartData)
				})
		}
		fetchData()
	}, [])

	return (
		<div>
			{data?.length > 0 && (
				<Line
					data={{
						datasets: [
							{
								backgroundColor: 'lightcoral',
								borderColor: 'red',
								data: data,
							},
						],
					}}
					options={options}
				/>
			)}
		</div>
	)
}

export default LineGraph
