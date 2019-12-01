import React, { Component } from "react";
import HeaderNav from "./Containers/HeaderNav/HeaderNav";
import Sidebar from "./Containers/SideBar/SideBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderNav />
        <Sidebar />
      </React.Fragment>
    );
  }
}

export default App;
