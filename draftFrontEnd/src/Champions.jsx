import React, {useEffect, useState} from 'react'
import {getData} from './apiFunctions'

const baseURL = 'http://ddragon.leagueoflegends.com/cdn'
const imageUrl = '/img/champion/loading/'

export function Champions ({addSelectedChampion}) {

    const [champions, setChampions] = useState([])

    let [count, setCount] = useState(0)

    const teamCalulator = () => {
        setCount(count < 20 ? count + 1 : count = 20)
        return count < 10 ? 'blue' : 'red'
    }

    useEffect(() => {getData(champions).then(setChampions)}, [])

    return (
        champions.map (
            champion => {
                return (
                    <div 
                        className='champion' 
                        id={`${champion}`} 
                        name={champion} 
                        onClick={(evt) => {
                            addSelectedChampion({name: champion, team: teamCalulator()});
                            evt.target.parentElement.className='champion clicked';
                    }}>
                        <p>{champion}</p>
                        <img 
                            className={`championImage ${champion}`} 
                            id={`${champion}`} 
                            src={`${baseURL}${imageUrl}${champion}_0.jpg`} 
                            alt={`${champion}`} 
                        />
                    </div>
                )
            }
        )
    )
}

export default Champions


