import React, { useState } from "react";
import "./NavBar.scss";
import {useSelector} from 'react-redux'
import ScrollIntoView from "react-scroll-into-view";
const NavBar = () => {
  const src=useSelector(state=>state.language)
  const display=useSelector(state=>state.display)
  const lang=src[display].nav;
 
  return (
    <div className="nav">
      <ScrollIntoView selector="#galery">
        <li>{lang.galery}</li>
      </ScrollIntoView>
      <ScrollIntoView selector="#infor">
        <li>{lang.detail}</li>
      </ScrollIntoView>

      <ScrollIntoView selector="#contact">
        <li>{lang.contact}</li>
      </ScrollIntoView>
    </div>
  );
};

export default NavBar;
