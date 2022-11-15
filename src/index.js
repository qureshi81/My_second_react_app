import React from 'react';
import ReactDOM from 'react-dom'

function Header(){
  return(
  <header>
        <nav>
          <img src="./logo192.png" alt='Simply easy' width="40px" />
        </nav>
      </header>
    )
}

function FirtComponent() {
  return (
    <div>
      <Header />
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
      <footer>
        <small> ©2022 Shafique Development. All rights reserved. </small>
      </footer>
    </div>

  )
}

ReactDOM.render(< FirtComponent />, document.getElementById("root"))