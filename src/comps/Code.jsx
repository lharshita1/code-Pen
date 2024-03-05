import Editor from "./Editor";
import {Box, styled} from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Container =styled(Box)`
        display:flex;
        background-color:#060606;
        min-height:50vh;
    `

function Code() {

    const {html,setHtml,css,setCss,js,setJs}=useContext(DataContext)

  return (
    <Container>
        <Editor 
            language='HTML'
            icon='/'
            color="red"
            value={html}
            onChange={setHtml}
        />
        <Editor 
            language='CSS'
            icon='*'
            color="blue" 
            value={css}
            onChange={setCss}
        />
        <Editor 
             language='JavaScript'
             icon='()'
             color="yellow"
             value={js}
             onChange={setJs}
        />
    </Container>
  );
}

export default Code
