import "./weatherAppHome.scss";
import React, { Component } from "react";
import { getUrl } from "../../assets/api/api";
import WeatherDetails from "../../components/WeatherDetails/WeatherDetails";
export default class WeatherAppHome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
			apiData: {
				name: "",
				temperature: "",
				feels_like: "",
			},
			errorMsg: "",
		};
	}

	handleChange = (e) => {
		this.setState({ query: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();

		if (this.state.query) {
			fetch(getUrl(this.state.query))
				.then((res) => {
					if (res.status !== 404) {
						res.json().then((val) => {
							const {
								name,
								main: { temp, feels_like },
							} = val;
							let obj = {
								name: name,
								temperature: temp,
								feels_like: feels_like,
							};
							this.setState({ apiData: obj, query: "" });
						});
					} else {
						this.setState({ errorMsg: "Data Not Found !" });
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	render() {
		return (
			<div className="app-container">
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						value={this.state.query}
						onChange={this.handleChange}
						placeholder="Enter City"
					/>
				</form>
				<WeatherDetails apiData={this.state.apiData} />
			</div>
		);
	}
}
