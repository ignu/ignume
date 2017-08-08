import React from "react"

// Import typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import profilePic from "./profile-pic.jpg"
import { rhythm } from "../utils/typography"

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Len Smith`}
          style={{
            float: "left",
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Written by
        {" "}
        <strong>Len Smith</strong>
        {" "}
        who lives and works in Seattle. Follow him on <a href="https://twitter.com/ignu">Twitter</a>, <a href="http://github.com/ignu">Github</a> or listen to him on <a href="http://turing.cool">Turing-Incomplete</a>
      </p>
    )
  }
}

export default Bio
