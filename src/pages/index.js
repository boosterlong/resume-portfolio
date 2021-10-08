import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div class="content">
    <h3 class="horizontal-line">Professional Summary</h3>
    <p>
      Goal-driven and creatively-diverse Hobbyist Web Developer with a varied skillset and great work ethic. Well-suited to fast-paced work environments, and thrives on longer detail-oriented projects. Strong communication skills for interacting with clients and peers. Knowledgeable in HTML, JS and CSS for React and Rails based websites. Very open to learning new technologies and will actively seek out new ways of doing things.
    </p>
    <h3 class="horizontal-line">Programming Skills</h3>
    <p>
      <ul>
        <li>HTML/JS/CSS (3 years)</li>
        <li>React (1 year)</li>
        <li>TypeScript (1 year)</li>
        <li>Ruby (1 year)</li>
        <li>Rails (1 year)</li>
      </ul>
    </p>
    <h3 class="horizontal-line">Other Webdev Adjacent Skills</h3>
    <ul>
      <li>Web Design (3 years)</li>
      <li>Adobe Creative Suite (14 years)</li>
      <li>Photography (8 years)</li>
      <li>Marketing and Sales (4 years)</li>
    </ul>
    <h3 class="horizontal-line">Relevant Projects</h3>
    <p>
    <div class="row">
      <div class="column">
        <div class="card">
            <h4>
              Disco Trivialis
            </h4>
            <p class="descriptor hidescroll">
              Assisted an experienced developer create a multiplayer web-app using a React frontend and a Node.js backend. The app consisted of rounds of trivia while betting points. Designed and styled the user interface to work with game functions offered.
            </p>
            <a class="outbound-link" href="https://imgur.com/a/3yDoOhQ">Screenshots</a>
          </div>
      </div>
      <div class="column">
        <div class="card">
            <h4>
              Chartrand Photo
            </h4>
            <p class="descriptor hidescroll">
              A functional exercise in designing and implementing a landing page for a photography business. Simplicity and functionality was the focus, as well as having an equal experience between mobile and desktop browers.
            </p>
            <a class="outbound-link" href="http://chartrand.photo/">Website</a>
          </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="card">
              <h4>
                Dungeons and Dragons Combat Simulator
              </h4>
              <p class="descriptor hidescroll">
                Took the basic mechanics of the D&D D20 system and made a simulator to quickly determine the winner between two characters. 
              </p>
              <a class="outbound-link" href="https://blakechartrand.com/dndsim">Simulator</a>
            </div>
      </div>
      <div class="column">
        <div class="card">
              <h4>
                The Forest of Judithia
              </h4>
              <p class="descriptor hidescroll">
                Developed a fun little game where the Hero defeats teams of randomly generated enemies. 
              </p>
              <a class="outbound-link" href="https://github.com/boosterlong/roguelikeautobattler">GitHub</a>
            </div>
      </div>
    </div>
    </p>
    </div>
    <footer
          style={{
            bottom: `0px`,
            fontSize: `small`,
            width: `100%`,
            background: `white`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> | Background by <a href="https://www.heropatterns.com/">Hero Patterns</a> (CC BY 4.0)
        </footer>
  </Layout>
)

export default IndexPage
