import Player from "./Player";

const PlayerContainer = ({players}) => {

    return (
        <div>
            {players.map(p => <Player player={p}/>)}
        </div>
    )

}

export default PlayerContainer;