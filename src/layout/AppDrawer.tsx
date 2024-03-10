import React from 'react'
import { drawerWidth } from '../datas/Constants'
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import { drawerLinks, dsTypes } from '../datas/datas';
import { Link } from 'react-router-dom';
import { toPascalCase } from '../datas/utilities';

export interface IAppDrawerProps {
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
    mobileOpen: boolean,
    setIsClosing: React.Dispatch<React.SetStateAction<boolean>>
}

const AppDrawer: React.FC<IAppDrawerProps> = ({ setMobileOpen, mobileOpen, setIsClosing }) => {


    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {drawerLinks.map((text) => (
                    <ListItem key={text} disablePadding component={Link} to={`/${text}`}>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            <Drawer

                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    )
}

export default AppDrawer;

