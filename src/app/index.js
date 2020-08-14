import React, { useState, useEffect } from 'react'
import { useStyles } from './styles'
import { ThemeProvider } from 'react-jss'
import theme from './theme'
import Button from './theme/Button/PrimaryButton'
import {
	MenuItem,
	FormControl,
	Select,
	Card,
	CardContent,
} from '@material-ui/core'
import InfoBox from './components/InfoBox'
import Map from './components/Map'
import Table from './components/Table'
import LineGraph from './components/Graph/LineGraph'
import 'leaflet/dist/leaflet.css'

// Fetch all data from disease.sh RESTApi
const useFetch = (api) => {
	const [data, setData] = useState([])

	// Get All Data from the api (cDM)
	useEffect(() => {
		const getData = async () => {
			await fetch(api)
				.then((response) => response.json())
				.then((apiData) => setData(apiData))
		}
		getData()
	}, [api])

	return data
}

const App = () => {
	const styles = useStyles()

	const data = useFetch('https://disease.sh/v3/covid-19/countries')

	const [location, setLocation] = useState('worldwide')
	const [locationData, setLocationData] = useState({})
	const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 })
	const [mapZoom, setMapZoom] = useState(3)

	// Get Country specific data (cDM, cDU)
	useEffect(() => {
		if (location === 'worldwide') {
			const getLocationData = async () => {
				await fetch('https://disease.sh/v3/covid-19/all')
					.then((response) => response.json())
					.then((apiData) => {
						setLocationData(apiData)
						setMapCenter({
							lat: 34.80746,
							lng: -40.4796,
						})
						setMapZoom(3)
					})
			}
			getLocationData()
		} else {
			data.forEach((country) => {
				if (country.countryInfo.iso2 === location) {
					setLocationData(country)
					setMapCenter({
						lat: country.countryInfo.lat,
						lng: country.countryInfo.long,
					})
					setMapZoom(4)
				}
			})
		}
	}, [data, location])

	return (
		<ThemeProvider theme={theme}>
			<div className={styles.app}>
				<div className={styles.appLeft}>
					<div className={styles.appHeader}>
						<h1>COVID-19 Tracker</h1>
						<Button type="tertiary" disabled>
							MyButton
						</Button>
						<FormControl className={styles.appDropdown}>
							<Select
								variant="outlined"
								value={location}
								onChange={(event) => setLocation(event.target.value)}>
								<MenuItem value="worldwide">Worldwide</MenuItem>
								{data.map((country) => (
									<MenuItem value={country.countryInfo.iso2}>
										{country.country}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>

					<div className={styles.appStats}>
						<InfoBox
							title="Cases"
							cases={locationData.todayCases}
							total={locationData.cases}
						/>
						<InfoBox
							title="Recovered"
							cases={locationData.todayRecovered}
							total={locationData.recovered}
						/>
						<InfoBox
							title="Deaths"
							cases={locationData.todayDeaths}
							total={locationData.deaths}
						/>
					</div>

					<Map data={data} center={mapCenter} zoom={mapZoom} />
				</div>
				<Card className={styles.appRight}>
					<CardContent>
						<h3>Live Cases by country</h3>
						<Table countries={data} />
						<h3>Worldwide new cases</h3>
						<LineGraph />
					</CardContent>
				</Card>
			</div>
		</ThemeProvider>
	)
}

export default App
