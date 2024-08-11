import React from 'react'
import Percentage from './Percentage'

export default function PercentageGroup() {
  return (
    <div className="col-sm-9 mx-auto">
    <div className='row row-cols d-flex'>
        <div className="col-12 col-md-3 mx-auto">
            <Percentage value="85%" text="of users say that Slack has improved communication*"/>
        </div>
        <div className="col-12 col-md-3 mx-auto">
            <Percentage value="86%" text="feel that their ability to work remotely has improved*"/>
        </div>
        <div className="col-12 col-md-3 mx-auto">
            <Percentage value="88%" text="feel more connected to their teams*"/>
        </div>
    </div>
    </div>
  )
}
