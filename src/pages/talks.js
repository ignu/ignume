import React from 'react'
import R from 'ramda'
import talks from '../data/talks'

const byYear = R.groupBy(R.prop('year'))(talks)

const Talk = (props) => <div>
  <h4>{props.venue} - {props.talk}</h4>
</div>

const Year = (props) => {
  return(<div>
    <h3>{props.year}</h3>
    {props.talks.map((t, i) => <Talk key={i} {...t}/>)}
  </div>)
}

export default () => <div>
  {R.keys(byYear).reverse().map(y => <Year key={y} year={y} talks={byYear[y]}/>)}
</div>
