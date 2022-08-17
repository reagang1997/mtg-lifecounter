import { useEffect, useState } from "react"

import { Button, Grid, IconButton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import Options from "./Options";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PLAYER, UPDATE_P_HEALTH } from "../utils/actions";



const Player = ({ totalPlayers, playerNum, player }) => {

    const state = useSelector((state) => state);
    const { health, players } = state;

    const dispatch = useDispatch();

    const incHealth = (e) => {
        let tmpPlayer = {...player, hp: ++player.hp};
        let tmpPlayers = players.filter(p => {
            if(p.name == player.name){
                return tmpPlayer;
            }
            else{
                return p
            }
        })
        console.log(tmpPlayers)
        dispatch({
            type: UPDATE_PLAYER,
            players: tmpPlayers
        })

    }

    const decHealth = (e) => {
        let tmpPlayer = {...player, hp: --player.hp};
        let tmpPlayers = players.filter(p => {
            if(p.name == player.name){
                return tmpPlayer;
            }
            else{
                return p
            }
        })
        console.log(tmpPlayers)
        dispatch({
            type: UPDATE_PLAYER,
            players: tmpPlayers
        })

    }

    let [hp, setHp] = useState(0);
    useEffect(() => {
        let tmp = player.hp;
        
    }, [player])

    const styles = { 
        player: {
            height: (100 / totalPlayers) + "%",
            backgroundColor: player.color,
            transform: player.playerNum == 2 ? 'rotate(180deg)' : "",
            margin: '10px',
            borderRadius: '10px'
        },
        grid: {
            width: '100%',
            
        },
        icon: {
            fontSize: '50px',
            color: 'white',
            marginTop: '23px'
        },
        container: {
            width: '80%',
            margin: 'auto',
            paddingTop: '100px'
        }
    }

    return (
        <div style={styles.player}>
            <Typography variant='h4' color="white">{player.name}</Typography>
            <div style={styles.container}>
                <Grid container style={styles.grid}>
                    <Grid item xs={3}>
                        <IconButton onClick={incHealth}><AddIcon style={styles.icon} /></IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h1" color="white">{player.hp}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                    <IconButton onClick={decHealth}><RemoveIcon style={styles.icon} /></IconButton>

                    </Grid>
                
                </Grid>
            </div>
            {player.playerNum == 1 ? <Options/> : <></>}
        </div>
    )
}

export default Player;