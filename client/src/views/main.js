import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Player from "../components/Player";
import PlayerContainer from "../components/PlayerContainer";


const Main = () => {

    const state = useSelector(state => state);
    let {players} = state;
    // players = players.reverse();
    const [totalPlayers, setTotalPlayers] = useState(3)

    const style = {
        main: {
            height: '100vh',
            width: '100vw',
        }
    }

    useEffect(() => {
        console.log(players)
    }, [players])

 
 
    return (
        <div style={style.main}>
            
            {players.map(p => {
                console.log(p)
                return <Player player={p} totalPlayers={players.length}/>
            })}

        </div>
    )

}

export default Main;