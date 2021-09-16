import { Fab, Menu, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from "react";
import { useHistory } from 'react-router';
import { useAuthDispatch, logout, useAuthState } from '../../context';
import { Settings, HomeOutlined, ArrowBack, ContactMail, ArrowForward } from '@material-ui/icons';
import { toast } from 'react-toastify';

const NavigationBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useAuthDispatch();
    const history = useHistory();
    const authState = useAuthState();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigation = (destination) => {
        handleClose();
        switch (destination) {
            case 'home': {
                history.push('/home');
                break;
            }
            case 'contact': {
                history.push('/contact');
                break;
            }
            case 'logout': {
                logout(dispatch).then(() => {
                    toast.success('Logged Out!', {
                        position: 'bottom-right'
                    })
                    history.push('/login')
                })
                break;
            }
            case 'login': {
                history.push('/login');
                break;
            }
            default: {
                handleClose();
                break;
            }
        }
    }

    return (
        <nav className="nav-container">
            <Fab color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Settings />
            </Fab>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {authState.userDetails && <MenuItem onClick={() => handleNavigation('home')}>
                    <ListItemIcon>
                        <HomeOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </MenuItem>}
                {!authState.userDetails && <MenuItem onClick={() => handleNavigation('login')}>
                    <ListItemIcon>
                        <ArrowForward fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                </MenuItem>}
                <MenuItem onClick={() => handleNavigation('contact')}>
                    <ListItemIcon>
                        <ContactMail fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                </MenuItem>
                {authState.userDetails && <MenuItem onClick={() => handleNavigation('logout')}>
                    <ListItemIcon>
                        <ArrowBack fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Log Out" />
                </MenuItem>}
            </Menu>

        </nav>
    );
}

export default NavigationBar;