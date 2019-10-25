import React from "react";

import IconLinkedIn from "../../../static/social/linkedin.svg"
import IconGithub from "../../../static/social/github.svg"
import IconTwitter from "../../../static/social/twitter.svg"
import IconInstagram from "../../../static/social/instagram.svg"


export default (props) => (
  <ul className={`b-social ${ (props.className || '') }`}>
    <li><a href="https://www.linkedin.com/in/jeroenwtf/" aria-label="Visit my LinkedIn profile" target="_blank" rel="noopener noreferrer"><IconLinkedIn /></a></li>
    <li><a href="https://github.com/jeroenwtf/" aria-label="Visit my GitHub account" target="_blank" rel="noopener noreferrer"><IconGithub /></a></li>
    <li><a href="https://twitter.com/jeroen_wtf/" aria-label="Visit my Twitter account" target="_blank" rel="noopener noreferrer"><IconTwitter /></a></li>
    <li><a href="https://instagram.com/jeroenwtf/" aria-label="Visit my Instagram account" target="_blank" rel="noopener noreferrer"><IconInstagram /></a></li>
  </ul>
);
