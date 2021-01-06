import React, { useState } from 'react'
import axios from 'axios'
import DraftSubmittedMessage from './DraftSubmittedMessage'

const baseURL = 'http://ddragon.leagueoflegends.com/cdn'
const imageUrl = '/img/champion/loading/'

export function DraftContainer({selectedChampions}) {
    let [isLoading, setIsLoading] = useState(false)
    
    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        setIsLoading(isLoading = true)

        axios.post('/stats', {
            "blue_pick1": getName(blueTeam, 5),
            "blue_pick2": getName(blueTeam, 6),
            "blue_pick3": getName(blueTeam, 7),
            "blue_pick4": getName(blueTeam, 8),
            "blue_pick5": getName(blueTeam, 9),
            "red_pick1": getName(redTeam, 5),
            "red_pick2": getName(redTeam, 6),
            "red_pick3": getName(redTeam, 7),
            "red_pick4": getName(redTeam, 8),
            "red_pick5": getName(redTeam, 9),
            "blue_ban1": getName(blueTeam, 0),
            "blue_ban2": getName(blueTeam, 1),
            "blue_ban3": getName(blueTeam, 2),
            "blue_ban4": getName(blueTeam, 3),
            "blue_ban5": getName(blueTeam, 4),
            "red_ban1": getName(redTeam, 0),
            "red_ban2": getName(redTeam, 1),
            "red_ban3": getName(redTeam, 2),
            "red_ban4": getName(redTeam, 3),
            "red_ban5": getName(redTeam, 4)
        }).then(setTimeout(() => {setIsLoading(isLoading = false)}, 2000))
    }

    const getSource = (team, index) => {
        const champion = team.length >= index ? team[index] : null
        return champion ? `${baseURL}${imageUrl}${champion.name}_0.jpg` : 'https://www.wallpaperup.com/uploads/wallpapers/2015/02/14/621662/ce6517b90bf879de744fbb7139ec31c5.jpg'
    }

    const getName = (team, index) => {
        const champion = team.length >= index ? team[index] : ''
        return champion ? champion.name : ''
    }

    const redTeam = selectedChampions.filter(x => x.team === 'red')
    const blueTeam = selectedChampions.filter(x => x.team === 'blue')

    return (
        
        <>
            <h1>League Draft</h1>
            <form action="/stats" method="post" onSubmit={handleFormSubmit}>
                <div className='draftContainer'>
                    <div className='blueContainer'>
                        <h3 className='blueTeamTitle'>Blue Team</h3>
                        <div className='blueDraft'>
                            <div className='bluePickOne bluePick'>
                                <p>{getName(blueTeam, 5)}</p>
                                <img className='bluePickImage' src={getSource(blueTeam, 5)} alt="" name="blue_pick1"/>
                            </div>
                            <div className='bluePickTwo bluePick'>
                                <p>{getName(blueTeam, 6)}</p>
                                <img className='bluePickImage' src={getSource(blueTeam, 6)} alt="" name="blue_pick2"/>
                            </div>
                            <div className='bluePickThree bluePick'>
                                <p>{getName(blueTeam, 7)}</p>
                                <img className='bluePickImage' src={getSource(blueTeam, 7)} alt="" name="blue_pick3"/>
                            </div>
                            <div className='bluePickFour bluePick'>
                                <p>{getName(blueTeam, 8)}</p>
                                <img className='bluePickImage' src={getSource(blueTeam, 8)} alt="" name="blue_pick4"/>
                            </div>
                            <div className='bluePickFive bluePick'>
                                <p>{getName(blueTeam, 9)}</p>
                                <img className='bluePickImage' src={getSource(blueTeam, 9)} alt="" name="blue_pick5"/>
                            </div>
                        </div>
                        <div className='blueBanContainer'>
                            <h3 className='blueTeamTitle'>Blue Team Bans</h3>
                            <div className='blueBanList'>
                                <div className='blueBanOne blueBan'>
                                    <p>{getName(blueTeam, 0)}</p>
                                    <img className='redPickImage' src={getSource(blueTeam, 0)} alt="" name="blue_ban1"/>
                                </div>
                                <div className='blueBanTwo blueBan'>
                                    <p>{getName(blueTeam, 1)}</p>
                                    <img className='bluePickImage' src={getSource(blueTeam, 1)} alt="" name="blue_ban2"/>
                                </div>
                                <div className='blueBanThree blueBan'>
                                    <p>{getName(blueTeam, 2)}</p>
                                    <img className='bluePickImage' src={getSource(blueTeam, 2)} alt="" name="blue_ban3"/>
                                </div>
                                <div className='blueBanFour blueBan'>
                                    <p>{getName(blueTeam, 3)}</p>
                                    <img className='bluePickImage' src={getSource(blueTeam, 3)} alt="" name="blue_ban4"/>
                                </div>
                                <div className='blueBanFive blueBan'>
                                    <p>{getName(blueTeam, 4)}</p>
                                    <img className='bluePickImage' src={getSource(blueTeam, 4)} alt="" name="blue_ban5"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='redContainer'>
                        <h3 className='redTeamTitle'>Red Team</h3>
                        <div className='redDraft'>
                            <div className='redPickOne redPick'>
                                <p>{getName(redTeam, 5)}</p>
                                <img className='redPickImage' src={getSource(redTeam, 5)} alt="" name="red_pick1"/>
                            </div>
                            <div className='redPickTwo redPick'>
                                <p>{getName(redTeam, 6)}</p>
                                <img className='redPickImage' src={getSource(redTeam, 6)} alt="" name="red_pick2"/>
                            </div>
                            <div className='redPickThree redPick'>
                                <p>{getName(redTeam, 7)}</p>
                                <img className='redPickImage' src={getSource(redTeam, 7)} alt="" name="red_pick3"/>
                            </div>
                            <div className='redPickFour redPick'>
                                <p>{getName(redTeam, 8)}</p>
                                <img className='redPickImage' src={getSource(redTeam, 8)} alt="" name="red_pick4"/>
                            </div>
                            <div className='redPickFive redPick'>
                                <p>{getName(redTeam, 9)}</p>
                                <img className='redPickImage' src={getSource(redTeam, 9)} alt="" name="red_pick5"/>
                            </div>
                        </div>
                        <div className='redBanContainer'>
                            <h3 className='redTeamTitle'>Red Team Bans</h3>
                            <div className='redBanList'>
                                <div className='redBanOne redBan'>
                                    <p>{getName(redTeam, 0)}</p>
                                    <img className='redPickImage' src={getSource(redTeam, 0)} alt="" name="red_ban1"/>
                                </div>
                                <div className='redBanTwo redBan'>
                                    <p>{getName(redTeam, 1)}</p>
                                    <img className='redPickImage' src={getSource(redTeam, 1)} alt="" name="red_ban2"/>
                                </div>
                                <div className='redBanThree redBan'>
                                    <p>{getName(redTeam, 2)}</p>
                                    <img className='redPickImage' src={getSource(redTeam, 2)} alt="" name="red_ban3"/>
                                </div>
                                <div className='redBanFour redBan'>
                                    <p>{getName(redTeam, 3)}</p>
                                    <img className='redPickImage' src={getSource(redTeam, 3)} alt="" name="red_ban4"/>
                                </div>
                                <div className='redBanFive redBan'>
                                    <p>{getName(redTeam, 4)}</p>
                                    <img className='redPickImage' src={getSource(redTeam, 4)} alt="" name="red_ban5"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='buttonContainer'>
                <div className='submittedMessageContainer'>
                    <p>{isLoading === true ? <DraftSubmittedMessage/> : null}</p>
                </div>
                <span>
                    <button type="submit" className='draftSubmitButton'>Submit Draft</button>
                    <button type="reset" className='draftClearButton' onClick={() => window.location.reload()}>Reset Draft</button>
                </span>
            </div>
            </form>
        </>
    ) 
}

export default DraftContainer