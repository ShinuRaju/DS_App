import { Typography } from '@mui/material'
import React from 'react'

export interface IParagraphProps {
    children: React.ReactNode
}

const Paragraph: React.FC<IParagraphProps> = ({ children }) => {
    return (
        <Typography paragraph>{children}
        </Typography>
    )
}

export default Paragraph