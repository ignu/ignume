import React from 'react'

const talks = [
  {
    year: "2017",
    venue: "CodeMash",
    talk: "React Everywhere Workshop"
  },
  {
    year: "2016",
    venue: "Midwest JS",
    talk: "Bootstrapping React Applications"
  },
  {
    year: "2016",
    venue: "MoonConf",
    talk: "Functional Programming with JavaScript and Ramda"
  },
  {
    year: "2015",
    venue: "CodeMash",
    talk: "Marionette - a Framework for Backbone (lightning talk)"
  },
  {
    year: "2013",
    venue: "BohConf",
    talk: "Marionette - a Framework for Backbone"
  },
  {
    year: "2014",
    venue: "Philly BarCamp",
    talk: "Developer Tools"
  },
  {
    year: "2011",
    venue: "Indy Hall",
    talk: "Ruby 101 Workshop"
  },
  {
    year: "2012",
    venue: "BarCamp Philly",
    talk: "Modern jQuery"
  },
  {
    year: "2011",
    venue: "BarCamp Philly",
    talk: "Git as a Tool"
  },
  {
    year: "2010",
    venue: "BarCamp Philly",
    talk: "JavaScript is Real Code: SOLID and TDD in the Browser"
  },
  {
    year: "2011",
    venue: "Philly.rb",
    talk: "JavaScript is Real Code: SOLID and TDD in the Browser"
  },
  {
    year: "2011",
    venue: "Northwest Ohio .NET User Group",
    talk: "JavaScript is Real Code: SOLID and TDD in the Browser"
  },
  {
    year: "2012",
    venue: "TechBash",
    talk: "Modern jQuery"
  },
  {
    year: "2012",
    venue: "TechBash",
    talk: "Git as a Tool"
  },
  {
    year: "2010",
    venue: "RubyHoedown",
    talk: "Focus and Pomodoros (lightning talk)"
  },
  {
    year: "2010",
    venue: "Ann Arbor Day of .NET",
    talk: "TDD in JavaScript with JSpec"
  },
  {
    year: "2010",
    venue: "Great Lakes Area .NET User Group ",
    talk: "JavaScript is Real Code: SOLID and TDD in the Browser"
  },
  {
    year: "2009",
    venue: "Philly Code Camp",
    talk: "TDD like you mean it."
  },
  {
    year: "2009",
    venue: "Central Ohio Day of .NET",
    talk: "TDD and Dependency Injection"
  },
  {
    year: "2010",
    venue: "A2 div",
    talk: "TDD in JavaScript with JSpec"
  },
  {
    year: "2012",
    venue: "Philly Code Camp",
    talk: "Backbone.js and CoffeeScript"
  },
  {
    year: "2012",
    venue: "Pittsburgh Tech Fest",
    talk: "Backbone.js and CoffeeScript"
  },
  {
    year: "2012",
    venue: "Pittsburgh Tech Fest",
    talk: "Modern jQuery"
  },
  {
    year: "2012",
    venue: "MADExpo",
    talk: "Getting Git"
  },
  {
    year: "2012",
    venue: "MADExpo",
    talk: "JavaScript is Real Code: SOLID and TDD in the Browser"
  },
  {
    year: "2009",
    venue: "Chicago Code Camp",
    talk: "Get Rolling With NHibernate"
  },
  {
    year: "2009",
    venue: "Chicago Code Camp",
    talk: "jQuery Magic"
  },
  {
    year: "2008",
    venue: "Clevland Day of .NET",
    talk: "Data Access with NHibernate"
  },
  {
    year: "2007",
    venue: "Lansing Day of .NET",
    talk: "Data Access with NHibernate"
  },
  {
    year: "2010",
    venue: "CodeStock",
    talk: "JavaScript is Real Code: SOLID and TDD in the Browser"
  },
  {
    year: "2009",
    venue: "Ann Arbor .NET User Group",
    talk: "TDD and Dependency Injection"
  },
  {
    year: "2009",
    venue: "Ann Arbor .NET User Group",
    talk: "An Introduction to jQuery"
  }
]

const Talk = (props) => <div>
  <h2>{props.talk}</h2>
  <h4>{props.venue} - {props.year}</h4>
</div>

export default () => <div>
  {talks.map(t => <Talk {...t}/>)}
</div>
