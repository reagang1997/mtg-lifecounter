import { useEffect, useState } from "react"

import { Button, Grid, IconButton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import Options from "./Options";
import { useSelector } from "react-redux";
const Player = ({ totalPlayers, playerNum, player }) => {

    const state = useSelector((state) => state);
    const { health } = state;

    const [styles, setStyles] = useState({})
    let [hp, setHp] = useState(0);
    useEffect(() => {
        setHp(health)
    }, [])

    console.log(totalPlayers)
    useEffect(() => {
        if (totalPlayers == 2) {
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
            setStyles(styles)

        }
        else if (totalPlayers == 3) {
            const styles = {
                player: {
                    width: player.playerNum > 1 ? '75%' : '100%',
                    height: player.playerNum > 1 ? '25%' : '100%',
                    backgroundColor: player.color,
                    transform: player.playerNum > 1 ? player.playerNum == 2 ? 'rotate(-90deg)' : 'rotate(90deg)' : ''
                }
            }
            setStyles(styles)

        }
    }, [])



    console.log(styles)

    return (
        <div style={styles.player}>
            <Typography variant='h4' color="white">{player.name}</Typography>
            <div style={styles.container}>
                <Grid container style={styles.grid}>
                    <Grid item xs={3}>
                        <IconButton onClick={e => setHp(++hp)}><AddIcon style={styles.icon} /></IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h1" color="white">{hp}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                    <IconButton onClick={e => setHp(--hp)}><RemoveIcon style={styles.icon} /></IconButton>

                    </Grid>
                
                </Grid>
            </div>
            {player.playerNum == 1 ? <Options/> : <></>}
        </div>
    )
}

export default Player;