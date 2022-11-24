import React from 'react';
import ReactDOM from 'react-dom'
import "./style.css"
import { Header } from './Header';




function FirtComponent() {
  return (
    
    <div>
      {/* Reference to parent component  */}
      <Header/> 
      <MainContent/>
      <Footer/>
      </div>
      

  )
}

function MainContent() {
  return(
    <div>    
      <h1>Reasons I am excited to learn React</h1>
      <ol>
        <li>It's a popular library, so ill be
          able to fit in with the cool kids.
        </li>
        <li>I will change my life with react</li>
        <li>I'm more likely to get a job as as developer
          if I know react.
        </li>
      </ol>
      </div>


  )
}

function Footer(){
  return(
    <footer className='foot-class'>
    <small> ©2022 Shafique Development. All rights reserved. </small>
  </footer>

  )
}

ReactDOM.render(< FirtComponent />, document.getElementById("root"))