import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Timer from "./Timer";
import Quiz from "./Quiz";
import Home from "./Home";
import Randomizer from "./Randomizer";
import RcMenu from "./RcMenu";
import Bingo from "./Bingo";
import VideoPage from "./VideoPage";

class App extends Component {
  state = { menuIsExpanded: false };

  toggleSidebarMenu() {
    this.setState(prevState => ({ menuIsExpanded: !prevState.menuIsExpanded }));
  }

  render() {
    return (
      <>
        <button
          className="sidebar-hamburger-button"
          type="button"
          onClick={this.toggleSidebarMenu.bind(this)}
        >
          ☰
        </button>

        <RcMenu
          toggleMenu={this.toggleSidebarMenu.bind(this)}
          menuIsExpanded={this.state.menuIsExpanded}
        />
        <div className="page-container">
          <Route path="/timer" component={Timer} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/" component={Home} exact />
          <Route path="/episode-randomizer" component={Randomizer} />
          <Route path="/bingo" component={Bingo} />
          <Route path="/videos" component={VideoPage} />
        </div>

        <div className="footer">
          <div className="footer-content">
            Run with{" "}
            <a
              href="https://www.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify</a>{"  |  "}
            Code on{" "}
            <a
              href="https://github.com/ReactingTesting/reacting-testing"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default App;
