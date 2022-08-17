import { Fab } from "@mui/material"
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";
import Modal from "./Modal";

const style = {
    fab: {
        position: 'absolute',
        bottom: 16,
        right: 16
    }
} 

const Options = () => {


    const [open, setOpen] = useState(0);

    return (
        <div>
            <Fab color="white" style={style.fab} onClick={e => setOpen(1)}>
                <SettingsIcon/>
            </Fab>
            <Modal open={open} setOpen={setOpen}/>
        </div>
    )

}

export default Options