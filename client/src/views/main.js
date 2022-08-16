import { useState } from "react";
import Player from "../components/Player";
import PlayerContainer from "../components/PlayerContainer";


const Main = () => {

    const [players, setPlayers] = useState([
        {
            name: "Player 1",
            playerNum: 1,
            color: 'green'
        },
        {
            name: "Player 3",
            playerNum: 2,
            color: 'blue'
        }
    ])

    const [totalPlayers, setTotalPlayers] = useState(3)

    const style = {
        main: {
            height: '100vh',
            width: '100vw',
        }
    }

 
 
    return (
        <div style={style.main}>
            
            {players.reverse().map(p => {
                console.log(p)
                return <Player player={p} totalPlayers={players.length}/>
            })}

        </div>
    )

}

export default Main;