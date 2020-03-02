import React from 'react';

const App = (props) => (
  <div id='mainContainer'>
    <div id='headerContainer'>
      <h1>2Chan</h1>
    </div>
    <div id='bodyContainer'>
      <div id='messagesContainer'>
        <form action="">
          <input type="text" id="postBar"></input>
        </form>

        <div id='messagesBox'>
          <h3>All posts</h3>  
        </div>
      </div>
      <div id='usersContainer'>

      </div>
    </div>
  </div>
);

export default App;

