import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const NavBar = () => {

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <AttachMoneyIcon />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Stonkz Data Dump
                        </Typography>
                        <Button color="inherit" variant="outlined">WSB</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );

}
export default NavBar;