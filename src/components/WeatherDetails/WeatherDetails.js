import React, { Component } from "react";
import "./WeatherDetails.scss";
export default class WeatherDetails extends Component {
	toCelcius = (kelvin) => {
		let cel = kelvin - 273;

		return Math.round(cel);
	};
	render() {
		return (
			<div className="WeatherDetails-wrapper">
				<h1>
					{this.props.apiData.name ? this.props.apiData.name : "City Name"}
				</h1>
				<h3>
					{this.props.apiData.temperature
						? `Temperature ${this.toCelcius(this.props.apiData.temperature)}`
						: "Temperature"}
					&deg; C
				</h3>
				<h4>
					{this.props.apiData.feels_like
						? `Feels Like ${this.toCelcius(this.props.apiData.feels_like)} `
						: "Feels Like"}
					&deg; C
				</h4>
			</div>
		);
	}
}
