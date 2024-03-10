import { Typography } from '@mui/material'
import React from 'react'

export interface IHeadingProps {
    children: React.ReactNode
}
const Heading: React.FC<IHeadingProps> = ({ children }) => {
    return (
        <Typography variant='h1' > {children}</Typography>
    )
}

export default Heading