import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { drawerWidth } from '../datas/Constants'
import AppRouter from './AppRouter'



const PageBorder: React.FC = () => {
    return (
        <>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <AppRouter />
            </Box>
        </>
    )
}

export default PageBorder