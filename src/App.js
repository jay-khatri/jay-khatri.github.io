import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var linkStyle = {color: "#c9cacc"};
    return (
      <div className="App">
        <div className="App-body">
          <h4>Good Morning.</h4>
          <p>
            My name is 
            &nbsp;
            <a style={linkStyle} target="_blank" href="https://linkedin.com/in/jay-khatri">Jay Khatri</a>
            &nbsp; 
            and I'm an <strong>engineer</strong>
            .
          </p>
          <h4>About me.</h4>
          <p>
            I'm a student learning Electrical and Computer Engineering at 
            &nbsp;
            <a style={linkStyle} href="https://google.com">Texas A&M University</a>
            &nbsp; 
            and I have interests in computer hardware, software architecture and 
            robotics & motion planning.
            &nbsp; 
          </p>
          <p>
            I like to say that I have a pretty unique background.

            In high school, I was a captain of the 
            &nbsp;
            <a style={linkStyle} href="https://www.theledger.com/article/LK/20140313/News/608076751/LL/">2015 FTC World Championship Robotics team</a>
            , and at the time, I had a strong focus in <strong>mechanical design and electronics.</strong>
            &nbsp;
            Since then, I've taken an interest in software engineering, having done a few interships ranging from 
            &nbsp;
            <strong>full stack development</strong> to <strong> web infrastructure </strong>.
            In my coursework, I especially enjoy classes related hw/sw co-design, algorithms and operating systems.
          </p>
          <h4>Experience.</h4>
          <p>
            Based on past experience, I've really enjoyed working on small teams and having the ability to contribute product 
            decisions as an engineer. Here's some internships I've done in the past:

          </p>
          <h4>Let's talk.</h4>
          <p>
            Interested in some of the work I've done? If you want to chat, I'd be happy to grab 
            &nbsp; 
            <a style={linkStyle} href="https://www.philzcoffee.com/">coffee</a>
            , or get in touch via
            &nbsp; 
            <a style={linkStyle} href="mailto:jaykhatrimail@gmail.com?Subject=Good Morning">email</a>
            &nbsp; 
            or
            &nbsp; 
            <a style={linkStyle} target="_blank" href="https://linkedin.com/in/jay-khatri">linkedIn</a>
            .
          </p>
        </div>
      </div>
    );
  }
}

export default App;
