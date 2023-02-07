import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import styles from './NavBar.module.css';

const NavBar = () => {

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <AttachMoneyIcon />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link className={styles.navLink} href="/">Stonkz Data Dump</Link>
                        </Typography>
                        <Button color="inherit" variant="outlined"><Link className={styles.navLink} href="/wsb">WSB</Link></Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );

}
export default NavBar;