import React, { useState } from 'react';
import Body from './Components/Body'
import marked from 'marked'

//components
import Editor from './Components/Editor'
import Preview from './Components/Preview'

marked.setOptions({
  breaks: true
})
const defaultValueForMarkdown = `
  <h1>My markdown</h1>
  <h2>This is a subheader</h2>
  <li>Buy milk</li>
  <code> const sayHi = () => console.log("hi user") </code>
  <b> Bolded text </b>
  inline code \`<div></div>\`
  <a href="www.freecodecamp.com" target="_blank"> Freecodecamp </a>
`
const App = props => {
  const [ markdown, setMarkdown ] = useState(defaultValueForMarkdown)

  return(
    <Body>
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Preview markdown={markdown} setMarkdown={setMarkdown} />
    </Body>
  )
}

export default App;
