import React from "react"
import { Helmet } from "react-helmet"

import "../scss/styles.scss";

import Hero from "../components/hero/hero";
import Meaning from "../components/meaning/meaning";
import Skills from "../components/skills/skills";
import AboutMe from "../components/about-me/about-me";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";


export default () => (
  <div>
    <Helmet>
      <title>Jeroen van Meerendonk - UX Engineer in Barcelona</title>
      <meta name="description" content="UX Engineer and frontend developer in Barcelona focused on Design Systems with HTML, CSS (Sass + BEM), JavaScript (React + Storybook) and PHP (CodeIgniter)." />
    </Helmet>
    <Hero />
    <Meaning />
    <Skills />
    <AboutMe />
    <Contact />
    <Footer />
  </div>
);
