const axios = require('axios')

const baseChampURL = 'http://ddragon.leagueoflegends.com/cdn'
const championUrl = '/10.21.1/data/en_US/champion.json'

const baseAPIUrl = 'http://localhost:5000' || 'https://lol-draft-app.herokuapp.com'
const statsEndpoint = '/stats'

// Calls LoL API and returns the keys containing all of the champion data.
export async function getData() {
    const response = await axios.get(`${baseChampURL}${championUrl}`)
    return Object.keys(response.data.data)
}

export async function getChampInfo() {
    const response = await axios.get(`${baseAPIUrl}${statsEndpoint}`)
    return response.data
}

export default {getData, getChampInfo}
