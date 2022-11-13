import React from 'react';
import ReactDOM from 'react-dom'

function FirtComponent(){
  return(
    <div>
      <ol>React is easy to learn</ol>
      <ol>I will change my life with react</ol>
      <ol>I want to stay motivated</ol>
    </div>
  )
}

ReactDOM.render(<FirtComponent/>, document.getElementById("root"))