import axios from 'axios';

// Gets data from travel advisor api
export const getPlacesData = async(type, sw, ne) => {
    try {
        // Request
        const {data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
        },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
          }
        });

        return data;
    } catch(error) {
        console.log(error);
    }
}

// Gets data from weather api
export const getWeatherData = async(lat, lng) => {
  try {
    // Request
    const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
       params: {
        lon: lng, lat: lat,
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
      }
    });

    return data;
  } catch(error) {
    console.log(error);
  }
}