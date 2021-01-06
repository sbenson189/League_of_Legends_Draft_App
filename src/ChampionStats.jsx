import React, {useEffect, useState} from 'react'
import {getChampInfo} from './apiFunctions'

async function getInfo() {
    const info = await getChampInfo()
    const returnedInfo = Object.values(info).map(i => Object.values(i[0]))
    return returnedInfo
}

async function populateData() {
    const info = await getInfo()
    const data = Object.values(info[0])
    return data
}

export function ChampionStats() {
    const [champions, setChampions] = useState([])
    useEffect(() => {populateData().then(setChampions)}, [])

    return (
        champions.map (
            champion => {
                return (
                    <div className='championStats'>
                        <p>{champion.name}</p>
                        <img className={`championImage ${champion.name}`} src={champion.image} alt={champion.name}/>
                        <p>Picked: {champion.picked}%</p>
                        <p>Banned: {champion.banned}%</p>
                    </div>
                )
            }
        )
    )
}

export default ChampionStats