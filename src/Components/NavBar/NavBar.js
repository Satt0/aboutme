import React from "react";
import "./NavBar.scss";
import ScrollIntoView from "react-scroll-into-view";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "galery",
    };
  }
  scrollInto(e) {
    e.preventDefault();
    console.log(e.target);
  }
  render() {
    return (
      <div className="nav">
        <ScrollIntoView selector="#galery">
          <li>Galery</li>
        </ScrollIntoView>
        <ScrollIntoView selector="#infor">
          <li>Detail</li>
        </ScrollIntoView>

        <ScrollIntoView selector="#contact">
          <li>Contact</li>
        </ScrollIntoView>
      </div>
    );
  }
}

export default NavBar;
