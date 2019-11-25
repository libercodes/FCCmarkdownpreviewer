import styled from 'styled-components'
import marked from 'marked'
import React from 'react'

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

const Container = styled.div`
    width:50%;
    height: 50vh;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;
    box-shadow: 0px 0px 10px black;
`
const Previewer = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
`
const renderer = new marked.Renderer()
renderer.link = (href, title, text) => `<a target="_blank" href="${href}"> ${text} </a>`

const Preview = ({markdown, setMarkdown}) => {
    return (
        <Container>
            <Toolbar>Preview</Toolbar>
            <Previewer
                id="preview"
                dangerouslySetInnerHTML={{
                    __html: marked(markdown, { renderer: renderer })
                }}
            ></Previewer>
        </Container>
    )
}

export default Preview