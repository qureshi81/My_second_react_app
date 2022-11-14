import React from 'react';
import ReactDOM from 'react-dom'

function FirtComponent(){
  return(
    <header>
      <nav>
        <img src="./logo192.png" alt='Simply easy' width=""/>  
      </nav>
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
      <footer>@ 20xx Shafique Development. All rights reserved. </footer>
      </header>
    
  )
}

ReactDOM.render(< FirtComponent />, document.getElementById("root"))