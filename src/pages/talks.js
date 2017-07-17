import React from 'react'
import R from 'ramda'
import talks from '../data/talks'

const byYear = R.groupBy(R.prop('year'))(talks)

const Talk = (props) => <li>
  {props.venue} - {props.talk}
</li>

const Year = (props) => {
  return(<div>
    <h4>{props.year}</h4>
    <ul>
      {props.talks.map((t, i) => <Talk key={i} {...t}/>)}
    </ul>
  </div>)
}

export default () => <div>
  {R.keys(byYear).reverse().map(y => <Year key={y} year={y} talks={byYear[y]}/>)}
</div>
