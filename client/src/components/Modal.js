import { Alert, Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_PLAYERS } from "../utils/actions";

const style = {
    box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "200px",
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'column'
    }

};

const MyModal = ({ open, setOpen }) => {

    const state = useSelector(state => state);
    const { players, health } = state;
    const [starter, setStarter] = useState('');
    const [rolled, setRolled] = useState(false);

    const dispatch = useDispatch();


    const handleClose = (e) => {
        setOpen(!open)
    }

    const resetGame = (e) => {
        let tmpPlayers = players.map(p => { return { ...p, hp: health } });
        dispatch({
            type: SET_PLAYERS,
            players: tmpPlayers
        })
        setOpen(!open)
    }

    const rollForStart = () => {
        const index = Math.floor(Math.random() * (players.length));
        console.log(players[index].name);
        setStarter(players[index].name);
        setRolled(true);
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style.box, width: 300 }}>
                <div style={style.btnContainer}>
                    <Button color="error" variant="contained" onClick={resetGame}>Reset</Button>
                    <br />
                    <Button color="info" variant="contained" onClick={rollForStart}>Roll</Button>
                </div >
                <br/>
            {rolled ? <Alert color="info">{starter} goes first!</Alert> : <></>}
            </Box>
        </Modal>
    )
}

export default MyModal;