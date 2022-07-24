import axios from 'axios';

export const GET_Attractions = ()=>{
    return axios
    .get('https://data.boch.gov.tw/data/opendata/v2/assetsCase/3.1.json')
    .then(response => {
        console.log(response.data);
        return response.data;
    });
};