import { Fab } from "@mui/material"
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";

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
        <Fab color="white" style={style.fab}>
            <SettingsIcon/>
        </Fab>
    )

}

export default Options