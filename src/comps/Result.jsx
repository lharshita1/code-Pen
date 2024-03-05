import {Box, styled} from '@mui/material'
import { useContext,useEffect } from 'react'
import { DataContext } from '../context/DataProvider'
import { useState } from 'react'

const Result = () => {
    const [src,setSrc] = useState('')

    const {html,css,js}= useContext(DataContext)
    const srcCode= `
        <html>
            <body>${html}</body>
            <script>${js}</script>
            <style>${css}</style>
        </html>
    `
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setSrc(srcCode)
        },1000)

        return ()=> clearTimeout(timeout)
    }, [html,css,js])


    return(
        <Box>
            <iframe
                srcDoc={src}
                title='Output'
                sandbox='allow-script'
                width='100%'
                height='100%'
            />
        </Box>
    )
}

export default Result