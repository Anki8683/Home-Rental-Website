const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch',
  params: {
    location: 'santa monica, ca',
    page: '6',
    status_type: 'ForRent',
    home_type: 'Houses',
    sort: 'Price_High_Low'
  },
  headers: {
    'X-RapidAPI-Key': '60a28cc008mshdde0c34d5f341f5p18f4d0jsn928ff1cf2bf6',
    'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com'
  }
};

try {
	const response =  axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}