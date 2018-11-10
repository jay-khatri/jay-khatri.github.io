import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var linkStyle = {color: "#c9cacc"};
    return (
      <div className="App">
        <div className="App-body">
          <p>
            My name is 
            &nbsp;
            <a style={linkStyle} href="https://google.com">Jay Khatri</a>
            &nbsp; 
            and I'm an <strong>engineer</strong>
            .
          </p>
          <p>
            I'm a student learning Electrical and Computer Engineering at 
            &nbsp;
            <a style={linkStyle} href="https://google.com">Texas A&M University</a>
            &nbsp; 
            and I have interests in computer hardware and software, software architecture and 
            robotics & motion planning.
            &nbsp; 
          </p>
          <p>
            I like to say that I have a pretty unique background, so my projects are quite diverse. 
            In high school, I was a captain of the 
            &nbsp;
            <a style={linkStyle} href="https://www.theledger.com/article/LK/20140313/News/608076751/LL/">2015 FTC World Championship Robotics team</a>
            , and at the time, I had a strong focus in <strong>mechanical design and electronics.</strong>
            &nbsp;
          </p>
        </div>
      </div>
    );
  }
}

export default App;
