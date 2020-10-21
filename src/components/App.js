import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {

  const [para, setPara] = React.useState("");

  const renderParagraph = function() {
    setPara(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)
  };
  return (
    <>
      <div id="main">// Do not alter the main div</div>
      <button onClick={this.renderParagraph}></button>
      {this.para}
    </>
  );
}

export default App;
