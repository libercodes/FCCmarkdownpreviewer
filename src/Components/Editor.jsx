import styled from 'styled-components'
import marked from 'marked'
import React from 'react'

const Container = styled.div`
    width: 40%;
    height: 40vh;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px black;
`
const Toolbar = styled.div`
    width: 100%;
    height: 10%;
    background-color: white;
    font-size: 1.3rem;
    align-self:flex-start;
    display: flex;
    align-items:center;
    justify-content: center;
`
const TextArea = styled.textarea`
    width: 100%;
    height: 90%;
    background-color: inherit;
    resize: none;
`



const Editor = ({markdown, setMarkdown}) => {
    return(
        <Container>
            <Toolbar>Editor</Toolbar>
            <TextArea 
                id="editor"
                value={markdown}
                onChange={e => setMarkdown(e.target.value)}
                type="text"
            />
        </Container>
    )
}
export default Editor