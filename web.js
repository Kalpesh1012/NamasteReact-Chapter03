import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  {
    id: "conatiner",
  },
  [
    React.createElement(
      "h1",
      { className: "title" },
      "Using-React-CreateElement"
    ),
    React.createElement(
      "ul", // This will be a huge mess so we will use jsx
      {},
      React.createElement("li", {}, "About us"),
      React.createElement("li", {}, "Support"),
      React.createElement("li", {}, "Home")
    ),
  ]
);

//using jsx

const heading1 = (
  <div id="Title" key="abc">
    <h1>Using jsx</h1>
    <ul>
      <li>About us</li>
      <li>Support</li>
      <li>Home</li>
    </ul>
  </div>
);

// using functional Component
const Titleom = () => {
  return (
    <h1 id="titleom" key="h2">
      Composition of Component
    </h1>
  );
};

const Heading3 = () => {
  return (
    <div id="title" key="abc">
      {Titleom()}
      <h1>Using functional Component</h1>
      <ul>
        <li>About us</li>
        <li>Support</li>
        <li>Home</li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="imga">
        <img src="https://learn.namastedev.com/logo.png?v=6" alt="logo"></img>
      </div>
      <div>
        <input type="text" placeholder="Search......" className="input"></input>
      </div>
      <div className="right">
        <img
          src="https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-28.png"
          alt="user"
        />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header></Header>);
