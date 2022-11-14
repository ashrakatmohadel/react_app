import React from "react";

const Header = () => {
  return (
    <div>
      <header className="hide-when-mobile">
        <h1>React App</h1>
        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="/html">
              HTML
            </a>
            <ul className="sub-ul">
            <li>
              <a href="/html">Full Course</a>
            </li>
          </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="/css">
              CSS
            </a>
            <ul className="sub-ul">
            <li>
              <a href="/css">Full Course</a>
            </li>
            <li className="mini-projects">
              <a href="/css">Practical Implementation&nbsp; + </a>
              <ul className="sub-sub-ul">
                <li>
                  <a href="/css">First design</a>
                </li>
                <li>
                  <a href="/css">Second design</a>
                </li>
                <li>
                  <a href="/css">Third design</a>
                </li>
              </ul>
            </li>
          </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="/javascript">
              JavaScript
            </a>
            <ul className="sub-ul sub-of-js">
            <li>
              <a href="/javascript">Full Course</a>
            </li>
          </ul>
          </li>
        </ul>
      </header>
      <header
        style={{ backgroundColor: "blueviolet" }}
        className="show-when-mobile"
      >
        <h1>React App</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="/html">Full Course</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="/css">Full Course</a>
              </li>

              <li>
                <label className="mini-projects" htmlFor="mini">
                Practical Implementation <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="/css">First design</a>
                  </li>
                  <li>
                    <a href="/css">Second design</a>
                  </li>
                  <li>
                    <a href="/css">Third design</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="/javascript">Full Course</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
