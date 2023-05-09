import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com'
// const BASE_URL = 'https://youtube-video-download-info.p.rapidapi.com'

const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    // params: { id: 'UxxajLWwzqY' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY || '91530014d3mshd8225e9a93911b2p1706b5jsnd59b204be801',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}