import React from 'react'
import { Map as LeafletMap, TileLayer, Circle, Popup } from 'react-leaflet'
import { useStyles } from './styles'
import numeral from 'numeral'

const showDataOnMap = (data) =>
	data.map((country) => (
		<Circle
			center={[country.countryInfo.lat, country.countryInfo.long]}
			fillOpacity={0.4}
			color="#FF0000"
			fillColor="#F08080"
			radius={Math.sqrt(country.cases) * 800}>
			<Popup keepInView={true} zoomAnimation={true}>
				<div className="info-container">
					<div
						className="info-flag"
						style={{
							backgroundImage: `url(${country.countryInfo.flag})`,
						}}></div>
					<div className="info-name">
						<strong>{country.country}</strong>
					</div>
					<div className="info-confirmed">
						Cases: {numeral(country.cases).format('0,0')}
					</div>
					<div className="info-recovered">
						Recovered: {numeral(country.recovered).format('0,0')}
					</div>
					<div className="info-deaths">
						Deaths: {numeral(country.deaths).format('0,0')}
					</div>
				</div>
			</Popup>
		</Circle>
	))

const Map = ({ data, location, center, zoom }) => {
	const styles = useStyles()

	return (
		<div className={styles.map}>
			<LeafletMap center={center} zoom={zoom}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				{showDataOnMap(data)}
			</LeafletMap>
		</div>
	)
}

export default Map
