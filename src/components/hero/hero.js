import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Header from "../header/header"

import IconChevron from "../../../static/chevron.svg"
import WaveHero from "../../../static/hero_wave.svg"


export default () => (
  <div className="b-hero">
    <div className="container">
      <Header />
      <div className="b-hero__tag">
        <div>
          <p className="b-hero__title">Hi! My name is <strong>Jeroen</strong> and I'm a <strong>UX Engineer<span className="b-hero__a-what">A what?</span></strong>.</p>
        </div>
      </div>
    </div>

    <AnchorLink className="b-hero__scroll-down" href="#what">
      <span>Scroll down</span>
      <IconChevron />
    </AnchorLink>
    <WaveHero className="b-hero__wave" />
  </div>
);
