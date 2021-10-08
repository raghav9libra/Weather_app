export const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
export const apiKey = "7ef63d9cc06c0f4cedfa4ab97bb9fe66";
export const getUrl = (city) => {
	let url = `${baseUrl}${city}&appid=${apiKey}`;
	return url;
};
