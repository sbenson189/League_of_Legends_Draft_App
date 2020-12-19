import React, {useEffect, useState} from 'react'
import {getData} from './apiFunctions'

const baseURL = 'http://ddragon.leagueoflegends.com/cdn'
const imageUrl = '/img/champion/loading/'

export function Champions ({addSelectedChampion, selectedChampions}) {
    
    const [champions, setChampions] = useState([])
    const [count, setCount] = useState(0)

    const teamCalulator = () => {
        setCount(count < 20 ? count + 1 : 20)
        return count < 10 ? 'blue' : 'red'
    }

    useEffect(() => {getData(champions).then(setChampions)}, [])

    const filterSelected = (selectedChampions, clicked) => {
        const selectedName = selectedChampions.map(champion => champion.name)
        return selectedName.includes(clicked) ? 'champion clicked' : 'champion'
    }

    return <ChampionsGrid filterSelected={filterSelected} champions={champions} teamCalulator={teamCalulator} count={count} addSelectedChampion={addSelectedChampion} selectedChampions={selectedChampions}/>
}

const ChampionsGrid = ({filterSelected, champions, teamCalulator, count, addSelectedChampion, selectedChampions}) => {
    return (
        champions.map (
            champion => {
                return (
                    <div 
                        className={filterSelected(selectedChampions, champion)}
                        id={`${champion}`} 
                        name={champion} 
                        onClick={() => {
                            if(count === 20) return
                            addSelectedChampion({name: champion, team: teamCalulator()});
                        }
                    }>
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